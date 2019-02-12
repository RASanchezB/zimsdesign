import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import * as firebase from "firebase";
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
      console.log("update");
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
            <ListGroup>
              {this.state.productos.map(item => {
                console.log(item);
                return (
                  <MenuItem
                    nombre={item.nombre}
                    fecha={item.Fecha}
                    creador={item.creador}
                    precio={item.precio}
                  />
                );
              })}
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;
