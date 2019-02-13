import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Carrito from "./Views/Carrito";
import Error404 from "./Views/Error404";
import Header from "./Components/Header";
import Productos from "./Views/Productos";
import firebase from "./firebase.js";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: "#CDCDCD" }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/productos" component={Productos} exact />
            <Route path="/carrito" component={Carrito} exact />
            <Route component={Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
