import React, { useContext } from 'react'
import styles from '../styles/Navbar.module.css'
import { Link } from 'react-router-dom';
import BasketValue from "../components/BasketValue";
import * as ReactBootstrap from "react-bootstrap";
import {MemberContext} from '../contexts/MemberContext'

export default function Navbar() {

    const { loggedInMember } = useContext(MemberContext);

    return (
        <ReactBootstrap.Navbar collapseOnSelect sticky="top" className={`navbar ${styles.navbar}`} expand="md" variant="light">
            <ReactBootstrap.Navbar.Brand as={Link} to="/">
                <span className={styles.font}>Maroon Cars</span>
            </ReactBootstrap.Navbar.Brand>
            <div className={`${styles.iconSize} d-flex align-items-center`}>
                <ReactBootstrap.Nav.Link className={`${styles.clr} d-md-none`} as={Link} to="/payment"><i className="fas fa-shopping-cart fa-lg"><BasketValue/></i>
                </ReactBootstrap.Nav.Link>
                <ReactBootstrap.Navbar.Toggle className={`${styles.border} navbar-light`} aria-controls="responsive-navbar-nav">
                    <span className={`navbar-toggler-icon ${styles.toggleButton}`}></span>
                </ReactBootstrap.Navbar.Toggle>
            </div>
            <ReactBootstrap.Navbar.Collapse  id="responsive-navbar-nav">
                <ReactBootstrap.Nav className="ml-auto align-items-center" >
                    <span className={styles.homeWrapper}>
                        <ReactBootstrap.Nav.Link  className={styles.clr} as={Link} to="/">Home</ReactBootstrap.Nav.Link>
                    </span>

                    <span className={styles.aboutWrapper}>
                        <ReactBootstrap.Nav.Link className={styles.clr} as={Link} to="/about">About</ReactBootstrap.Nav.Link>
                    </span>
                    {loggedInMember.email ? <span className={styles.aboutWrapper}>
                        <ReactBootstrap.Nav.Link className={styles.clr} as={Link} to="/membership">Profile</ReactBootstrap.Nav.Link>
                    </span> : <span className={styles.registerWrapper}>
                        <ReactBootstrap.Nav.Link className={styles.clr} as={Link} to="/membership">Log in/Register</ReactBootstrap.Nav.Link>
                    </span>}
                    
                    <ReactBootstrap.Nav.Link className={`${styles.clr} d-none d-md-inline-block`} as={Link} to="/payment"><i className="fas fa-shopping-cart fa-lg"><BasketValue/></i></ReactBootstrap.Nav.Link>
                </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    )
}

