import React from 'react';
import Styles from '../styles/LoginBtnStyles.module.css';
import { Link } from "react-router-dom"

const LoginBtn = () => {
    let isLoggedIn = true;
    return (
        <div className={Styles.main_wrapper}>
            {
            /* Checks if user is logged in and renders either profile button or login button */
            isLoggedIn ? ( <Link to="/profile"><button>Profile</button></Link>) : (<Link to="/membership"><button>Login</button></Link>) 
            }
            <button as={Link} to="/membership">Register</button>
        </div>
    );
}
 
export default LoginBtn;