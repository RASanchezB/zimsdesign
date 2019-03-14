import React, { Component } from "react";
import { ListGroup, Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import firebase from "../firebase.js";
import MenuItem from "../Components/MenuItem";
class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [], query: "" };
    this.productos = [];
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
    this.handleclick = this.handleclick.bind(this);
  }
  componentWillMount() {
    this.getprods();
  }
  handleclick() {
    let aux = [];
    for (let i = 0; i < this.state.productos.length; i++) {
      console.log(this.state.productos[i].nombre.includes(this.state.query));
      if (this.state.productos[i].nombre.includes(this.state.query)) {
        aux.push(this.state.productos[i]);
      }
    }
    this.setState({ productos: aux });
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
                          onChange={e => this.setState({ query: e.target.value })}
                        />
                      </Col>
                      <Col xs="auto">
                        <Button onClick={this.handleclick}>Buscar</Button>
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
                      foto={item.url}
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
