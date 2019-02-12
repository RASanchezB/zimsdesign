import React, { Component } from "react";
import { ListGroupItem, Row, Col, Container } from "reactstrap";
import "../App.css";
class MenuItem extends Component {
  render() {
    return (
      <ListGroupItem>
        <Container>
          <Row className="vertical-align">
            <Col xs="6">
              <img
                style={{ width: "75%", height: "auto" }}
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
