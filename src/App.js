import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as firebase from "firebase";
import Home from "./Views/Home";
import Carrito from "./Views/Carrito";
import Error404 from "./Views/Error404";
import Header from "./Components/Header";
import Productos from "./Views/Productos";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyCioIfLPdSgZb8MSGZ1T0TQaS-XR6QGrys",
      authDomain: "zims-design.firebaseapp.com",
      databaseURL: "https://zims-design.firebaseio.com",
      projectId: "zims-design",
      storageBucket: "zims-design.appspot.com",
      messagingSenderId: "146892583885",
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
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
