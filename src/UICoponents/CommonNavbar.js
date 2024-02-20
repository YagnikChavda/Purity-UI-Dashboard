import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import { createPortal } from 'react-dom';

import Nav from 'react-bootstrap/Nav';
import './CommonNavbar.scss';

export default function CommonNavbar(props) {

  let Links = props.link.replace(/\s/g, "");

  const portalContainer = document.getElementById("overlay-navbar");

  const OverlayNavbar = (props) => {
    return (
      <Nav>
        <Nav.Link as={Link} to={`/${Links}`}> {props.link} </Nav.Link>
      </Nav>
    )
  }

  return (
    <>
      <OverlayNavbar link={props.link}/>
      {/* {ReactDOM.createPortal(< OverlayNavbar link={props.link} />, portalContainer)} */}
    </>
  )
}
