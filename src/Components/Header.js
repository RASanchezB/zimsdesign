import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink as NL } from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">
            <img className="brand-logo" src={require("../ZD1000.png")} alt="Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NL target="_blank" href="https://behance.net/jimendoza">
                  Portafolio
                </NL>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/productos">
                  Productos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/carrito">
                  <img
                    src={require("../shopping-cart.png")}
                    style={{ width: "24px" }}
                    alt="carrito"
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
