import React, { Component } from "react";
import { ListGroupItem, Row, Col, Container, Button } from "reactstrap";
import "../App.css";
class CartItem extends Component {
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
  render() {
    console.log(this.props.foto);
    return (
      <Container>
        <ListGroupItem>
          <Row className="vertical-align">
            <Col xs="6">
              <img
                style={{ width: this.detectmob() ? "100%" : "40%", height: "auto" }}
                src={this.props.item.foto}
                alt="producto"
              />
            </Col>
            <Col xs="6">
              <p className="titulo">{this.props.item.nombre}</p>
              <p className="texto-gris">Por {this.props.item.creador}</p>
              <p className="precio">
                L. {this.props.item.precio}
                <Button onClick={prodcut => this.props.onClick(this.props.item)}>
                  Eliminar Del Carrito
                </Button>
              </p>
            </Col>
          </Row>
        </ListGroupItem>
      </Container>
    );
  }
}

export default CartItem;
