import React, { useState, useContext } from 'react';
import styles from '../styles/RegisterComponentStyles.module.css'
import { MemberContext } from '../contexts/MemberContext';

const RegisterComponent = () => {

    const { transferUserData } = useContext(MemberContext);

    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ city, setCity ] = useState("");
    const [ zipCode, setZipCode ] = useState("");
    const [ country, setCountry ] = useState("");
    const [ email, setEmail] = useState("");

    //For password checking
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState(false);

    const [toggleContainAlert, setToggleContainAlert] = useState(false);
    const [toggleMatchAlert, setToggleMatchAlert] = useState(false);

    const updateUserFName = e => setFirstName(e.target.value);
    const updateUserLName = e => setLastName(e.target.value);
    const updateUserEmail = e => setEmail(e.target.value);
    const updateUserAddress = e => setAddress(e.target.value);
    const updateUserCity = e => setCity(e.target.value);
    const updateUserZipCode = e => setZipCode(e.target.value);
    const updateUserCountry = e => setCountry(e.target.value);

    const HandleUserComfirmPassword = (e) =>{
         setConfirmPassword(e.target.value);
         //Remove the alert banner when user changes confirm password
         setToggleMatchAlert(false);
    }

    const handleUserPassword = (e) => {

        setToggleContainAlert(false);

        setPassword(e.target.value);

       if ((e.target.value).length >= 6 && (e.target.value).toLowerCase() !== e.target.value && (e.target.value).toUpperCase() !== e.target.value){
            setPasswordCheck(true)
        } else {
            setPasswordCheck(false);
            setToggleContainAlert(true);
        }
    }

    const handleAccountSubmit = (e) => {

        setToggleMatchAlert(false);

        e.preventDefault();

        if (password === confirmPassword && passwordCheck){
        const newUser = {
            password,
            firstName,
            lastName,
            address,
            city,
            zipCode,
            country,
            email,
            purchases: [],
        }
        transferUserData(newUser)
        } else {
            //Show the alert message if conditions don't apply
            setToggleMatchAlert(true);
            //Change state variable for matching passwords to false
            setPasswordMatch(false);
        }
    }

    return (
        <div>
            <form className={styles.Form} onSubmit={handleAccountSubmit}>
                    <div className={styles.ContactInfo}>
                        <h3 className={styles.header} >Please fill in your contact information to register</h3>

                        <div className={styles.inputWrapper}>
                            <div className={styles.flexWrapperPersonal}>
                                <input className={styles.textInput} type="text" onChange={updateUserEmail} placeholder="E-mail" required/>
                                <input className={styles.textInput} type="text" onChange={updateUserFName} placeholder="First name" required/>
                                <input className={styles.textInput} type="text" onChange={updateUserLName} placeholder="Last name" required/>
                            </div>

                            <div className={styles.flexWrapperAddress}>
                                <input className={styles.textInput} type="text" onChange={updateUserAddress} placeholder="Address" required/>
                                <input className={styles.textInput} type="text" onChange={updateUserCity} placeholder="City" required/>
                                <input className={styles.textInput} type="text" onChange={updateUserZipCode} placeholder="Zip code" required/>
                                <input className={styles.textInput} type="text" onChange={updateUserCountry} placeholder="Country" required/>
                            </div>
                        </div>

                        <div className={styles.passwordWrapper}>
                            <input className={styles.textInput} type="password" onChange={handleUserPassword} placeholder="Password..." required/>
                                {toggleContainAlert &&
                                    <div className={styles.alertMsg}>
                                        <p>Must contain a lower case, a capital letter, and at least 6 characters!</p>
                                    </div>
                                }
                                <input className={styles.textInput} type="password" onChange={HandleUserComfirmPassword} placeholder="Confirm password..." required/>
                                {toggleMatchAlert &&
                                    <div className={styles.alertMsg}>
                                        <p>Passwords don't match!</p>
                                    </div>
                                }
                        </div>
                    </div>
                <button type="submit" className={styles.createAccountBtn}>Create account</button>
            </form>
        </div>
    );
}

export default RegisterComponent;

