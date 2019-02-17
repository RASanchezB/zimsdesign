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
      let productos = [];
      for (let i = 0; i < this.props.carrito.length; i++) {
        let urlRef = rootRef.child("productos/" + this.props.carrito[i]);
        await urlRef.once("value", snapshot => {
          productos.push(snapshot.exportVal());
        });
      }
      for (let i = 0; i < productos.length; i++) {
        console.log(productos[i]);
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
                {this.state.productos.map(item => {
                  console.log(item);
                  return (
                    <CartItem
                      nombre={item.nombre}
                      fecha={item.fecha}
                      creador={item.creador}
                      precio={item.precio}
                      foto={item.url}
                      id={this.props.carrito.indexOf(item)}
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
