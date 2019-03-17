import React, { Component } from "react";
import { ListGroup, Form, FormGroup, Input, Button, Row, Col, Container } from "reactstrap";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import MenuItem from "../Components/MenuItem";
class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = { productos: [], query: "" };
    this.handleclick = this.handleclick.bind(this);
  }
  componentDidMount() {
    fetch("https://us-central1-zims-design.cloudfunctions.net/products/")
      .then(Response => Response.json())
      .then(Responsejson => {
        this.setState({ productos: Responsejson });
      });
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
      <Container>
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
            {Object.keys(this.state.productos).map(item => {
              return (
                <MenuItem
                  producto={this.state.productos[item]}
                  id={item}
                  onClick={this.props.addItemToCart}
                />
              );
            })}
          </ListGroup>
        )}
      </Container>
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
