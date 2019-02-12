import React, { Component } from "react";
import { ListGroupItem, Row, Col, Container } from "reactstrap";
import "../App.css";
class MenuItem extends Component {
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
    return (
      <ListGroupItem>
        <Container>
          <Row className="vertical-align">
            <Col xs="6">
              <img
                style={{ width: this.detectmob() ? "100%" : "40%", height: "auto" }}
                src={require("../senora.jpg")}
                alt="producto"
              />
            </Col>
            <Col xs="6">
              <p className="titulo">{this.props.nombre}</p>
              <p className="texto-gris">
                Por {this.props.creador} | {this.props.fecha}
              </p>
              <p className="precio">L. {this.props.precio}</p>
            </Col>
          </Row>
        </Container>
      </ListGroupItem>
    );
  }
}

export default MenuItem;
