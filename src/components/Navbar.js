import React from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import BasketValue from "../components/BasketValue";

import * as ReactBootstrap from "react-bootstrap"

export default function Navbar() {

    return (
        // <div className={styles.navbar} sticky="top">
            <ReactBootstrap.Navbar collapseOnSelect sticky="top" className={`navbar ${styles.navbar}`} expand="sm" variant="light">
                <ReactBootstrap.Navbar.Brand as={Link} to="/"><span className={styles.font}>Maroon Cars</span></ReactBootstrap.Navbar.Brand>
                <div className={`${styles.iconSize} d-flex align-items-center`}>
                    <ReactBootstrap.Nav.Link className={`${styles.clr} d-sm-none`} as={Link} to="/payment"><i className="fas fa-shopping-cart fa-lg"><BasketValue/></i></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Navbar.Toggle className={`${styles.border} navbar-light`} aria-controls="responsive-navbar-nav">
                        <span className={`navbar-toggler-icon ${styles.toggleButton}`}></span>
                    </ReactBootstrap.Navbar.Toggle>
                </div>
                <ReactBootstrap.Navbar.Collapse  id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="ml-auto align-items-center" >
                        <ReactBootstrap.Nav.Link  className={styles.clr} as={Link} to="/">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className={styles.clr} as={Link} to="/about">About</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className={`${styles.clr} d-none d-sm-inline-block`} as={Link} to="/payment"><i className="fas fa-shopping-cart fa-lg"><BasketValue/></i></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        // </div>
    )
}

