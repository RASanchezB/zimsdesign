import React, { Component } from "react";
import { ListGroupItem, Row, Col, Container, Button } from "reactstrap";
import firebase from "../firebase";
import "../App.css";
class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = { url: "" };
  }
  detectmob = () => {
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    } else {
      return false;
    }
  };
  componentDidMount() {
    firebase
      .storage()
      .ref(this.props.producto.foto)
      .getDownloadURL()
      .then(url => {
        this.setState({ url });
        this.props.producto.foto = this.state.url;
      });
    this.props.producto.id = this.props.id;
  }
  render() {
    return (
      <ListGroupItem>
        <Container>
          <Row className="vertical-align">
            <Col xs="6">
              <img
                style={{ width: this.detectmob() ? "100%" : "40%", height: "auto" }}
                src={this.state.url}
                alt="producto"
              />
            </Col>
            <Col xs="6">
              <p className="titulo">{this.props.producto.nombre}</p>
              <p className="texto-gris">Por {this.props.producto.creador}</p>
              <p className="precio">
                L. {this.props.producto.precio}
                <Button onClick={prodcut => this.props.onClick(this.props.producto)}>
                  Agregar al carrito
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    );
  }
}

export default MenuItem;
