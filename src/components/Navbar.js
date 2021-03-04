import React from 'react'
import styles from '../styles/Navbar.module.css'

import * as ReactBootstrap from "react-bootstrap"

export default function Navbar() {

    return (
        // <div className={styles.navbar} sticky="top">
            <ReactBootstrap.Navbar collapseOnSelect sticky="top" className={`navbar ${styles.navbar}`} expand="sm" variant="light">
                <ReactBootstrap.Navbar.Brand><span className={styles.font}>Maroon Cars</span></ReactBootstrap.Navbar.Brand>
                <div className="d-flex">
                    <ReactBootstrap.Nav.Link className={`${styles.clr} d-sm-none`} href="paymentPage"><i className="fas fa-shopping-cart fa-lg"></i></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Navbar.Toggle className={`${styles.border} navbar-light`} aria-controls="responsive-navbar-nav">
                        <span className={`navbar-toggler-icon ${styles.toggleButton}`}></span>
                    </ReactBootstrap.Navbar.Toggle>
                </div>
                <ReactBootstrap.Navbar.Collapse  id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="ml-auto" >
                        <ReactBootstrap.Nav.Link  className={styles.clr} href="/">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className={styles.clr} href="/about">About</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link className={`${styles.clr} d-none d-sm-inline-block`} href="paymentPage"><i className="fas fa-shopping-cart fa-lg"></i></ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        // </div>
    )
}

