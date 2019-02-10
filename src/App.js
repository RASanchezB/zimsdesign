import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Productos from "./Views/Productos";
import Error404 from "./Views/Error404";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route to="/" exact>
              <Productos />
            </Route>
            <Route to="">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
