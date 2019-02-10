import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import MenuItem from "../Components/MenuItem";
class Productos extends Component {
  render() {
    return (
      <div>
        <div className="align-items-center h-100">
          <div className="col-9 mx-auto">
            <ListGroup>
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
              <MenuItem nombre="nombre" creador="creador" fecha="dd/mm/yy" precio="250" />
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Productos;
