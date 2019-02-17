import React, { Component } from "react";
import { ListGroup, Jumbotron } from "reactstrap";
import { connect } from "react-redux";
import firebase from "../firebase";
import CartItem from "../Components/CartItem";
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [] };
    this.getprods = async () => {
      let rootRef = firebase.database().ref();
      let urlRef = rootRef.child("productos/");
      let productos = [];
      await urlRef.once("value", function(snapshot) {
        snapshot.forEach(function(child) {
          productos.push(child.exportVal());
        });
      });
      for (let i = 0; i < productos.length; i++) {
        let image = firebase.storage().ref(productos[i].foto);
        await image.getDownloadURL().then(url => {
          productos[i].url = url;
        });
      }

      this.setState({ productos });
    };
  }
  componentWillMount() {
    this.getprods();
  }
  render() {
    return (
      <div>
        {console.log(this.props.carrito)}
        {console.log(this.state.productos)}
        <div className="align-items-center h-100">
          <div className="col-9 mx-auto">
            {this.state.productos.length === 0 ? (
              <div style={{ justifyContent: "center", flex: 1 }}>
                <Jumbotron style={{ backgroundColor: "#cdcdcd", textAlign: "center" }}>
                  <h1 className="display-3">Oops!</h1>
                  <p className="lead">Parece que tu Carrito esta vacio</p>
                </Jumbotron>
              </div>
            ) : (
              <ListGroup>
                {this.props.carrito.map(index => {
                  console.log(index);
                  console.log(this.state.productos);
                  let item = this.state.productos[index];
                  return (
                    <CartItem
                      nombre={item.nombre}
                      fecha={item.fecha}
                      creador={item.creador}
                      precio={item.precio}
                      foto={item.url}
                      id={index}
                      onClick={this.props.removeItemFromCart}
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
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: product => dispatch({ type: "REMOVE_FROM_CART", producto: product }),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carrito);
