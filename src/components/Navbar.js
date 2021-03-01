import React from 'react'
import styles from '../styles/Navbar.module.css'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1>Maroon Cars</h1>

            <div className={styles.links}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/PaymentPage"><i class="fas fa-shopping-cart"></i></NavLink>
            </div>

        </div>
    )
}
