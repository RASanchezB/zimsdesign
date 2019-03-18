import React, { Component } from "react";
import {
  ListGroup,
  Jumbotron,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { connect } from "react-redux";
import CartItem from "../Components/CartItem";
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [], total: 0, modal: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  render() {
    let total = 0;
    Object.keys(this.props.carrito).forEach(element => {
      total += this.props.carrito[element].precio;
    });

    return (
      <Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Exito</ModalHeader>
          <ModalBody>su pedido ha sido hecho exitosamente</ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggle}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
        {this.props.carrito.length === 0 ? (
          <div style={{ justifyContent: "center", flex: 1 }}>
            <Jumbotron style={{ backgroundColor: "#cdcdcd", textAlign: "center" }}>
              <h1 className="display-3">Oops!</h1>
              <p className="lead">Parece que tu Carrito esta vacio</p>
            </Jumbotron>
          </div>
        ) : (
          <ListGroup>
            {Object.keys(this.props.carrito).map(index => {
              let item = this.props.carrito[index];
              return (
                <CartItem
                  item={item}
                  id={index}
                  onClick={() => {
                    this.props.removeItemFromCart();
                    this.forceUpdate();
                  }}
                />
              );
            })}
          </ListGroup>
        )}
        <Jumbotron>
          <h1 className="display-3">Su total es: L. {total}</h1>
          <p className="lead">
            <Button
              color="secondary"
              onClick={() => {
                let body = { productos: this.props.carrito, total };
                fetch("https://us-central1-zims-design.cloudfunctions.net/orders/", {
                  method: "post",
                  body: JSON.stringify(body),
                })
                  .then(response => response.json)
                  .then(responsejson => {
                    this.toggle();
                    this.props.clearcart();
                  });
              }}>
              Cancelar
            </Button>
          </p>
        </Jumbotron>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return { carrito: state };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: product => dispatch({ type: "REMOVE_FROM_CART", producto: product }),
    clearcart: () => dispatch({ type: "CLEAR_CART" }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrito);
