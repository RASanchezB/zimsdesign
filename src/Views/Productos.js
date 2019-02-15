import React, { Component } from "react";
import { ListGroup, Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import firebase from "../firebase.js";
import MenuItem from "../Components/MenuItem";
class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
    this.productos = [];
    this.getprods = async () => {
      var rootRef = firebase.database().ref();
      var urlRef = rootRef.child("Productos/");
      let productos = [];
      await urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
          productos.push(child.exportVal());
        });
      });
      this.setState({ productos });
    };
  }
  componentWillMount() {
    this.getprods();
  }
  render() {
    return (
      <div>
        <div className="align-items-center h-100">
          <div className="col-9 mx-auto">
            {this.state.productos.length === 0 ? (
              <center>
                <Loader type="Ball-Triangle" color="black" height={80} width={80} />
              </center>
            ) : (
              <ListGroup>
                <Form style={{ backgroundColor: "white" }}>
                  <FormGroup>
                    <Row>
                      <Col>
                        <Input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Busqueda"
                          aria-label="Busqueda"
                        />
                      </Col>
                      <Col xs="auto">
                        <Button>Buscar</Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
                {this.state.productos.map(item => {
                  return (
                    <MenuItem
                      nombre={item.nombre}
                      fecha={item.fecha}
                      creador={item.creador}
                      precio={item.precio}
                      id={this.state.productos.indexOf(item)}
                      onClick={this.props.addItemToCart}
                    />
                  );
                })}
              </ListGroup>
            )}
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product => dispatch({ type: "ADD_TO_CART", producto: product }),
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Productos);
