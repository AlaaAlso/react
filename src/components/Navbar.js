import React, { Component } from "react";
import { Nav } from "react-bootstrap";

function Navbarr() {
  return <div>
<Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className="color" href="/home">
            Services
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="color" eventKey="link-1">
            Work
          </Nav.Link>
        </Nav.Item>
        <img  src="./img/Logo.png"  alt="logo" style={{ width: "100px" }}/>
        <Nav.Item>
          <Nav.Link className="color" eventKey="link-2-">
            Contact
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="color" eventKey="link-3-">
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>
  </div>;
}

export default Navbarr;
