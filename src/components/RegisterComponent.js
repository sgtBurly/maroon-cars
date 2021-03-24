
import React, {useState, useEffect, useContext} from 'react';
import styles from '../styles/RegisterComponentStyles.module.css'
import {MemberContext} from '../contexts/MemberContext';

const RegisterComponent = () => {

    const {transferUserData} = useContext(MemberContext);

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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

    // const [confirmNoMatch, setConfirmNoMatch] = useState(false);
    const [toggleContainAlert, setToggleContainAlert] = useState(false);
    const [toggleMatchAlert, setToggleMatchAlert] = useState(false);
    const [validLength, setValidLength] = useState(false);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
        // Test-variabel

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

    useEffect(() => {
        setValidLength(password.length >= 6 ? true : false);
        setUpperCase(password.toLowerCase() !== password);
        setLowerCase(password.toUpperCase() !== password);
    }, [password]);

    const handleUserPassword = (e) => {

        setToggleContainAlert(false);

        setPassword(e.target.value);

        if (validLength && upperCase && lowerCase){
            setPasswordCheck(true)

        }else {
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
            console.log("Passwords dont match bro");
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
                        <div className={styles.inputWrapper}>
                            <input className={`${styles.textInput} ${styles.eMail_input}`} type="text" onChange={updateUserEmail} placeholder="Email..." required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input className={styles.textInput} type="text" onChange={updateUserFName} placeholder="First name..." required/>
                            <input className={styles.textInput} type="text" onChange={updateUserLName} placeholder="Last name..." required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input className={styles.textInput} type="text" onChange={updateUserAddress} placeholder="Address..." required/>
                            <input className={styles.textInput} type="text" onChange={updateUserCity} placeholder="City..." required/>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input className={styles.textInput} type="text" onChange={updateUserZipCode} placeholder="Zip code..." required/>
                            <input className={styles.textInput} type="text" onChange={updateUserCountry} placeholder="Country..." required/>
                        </div>
                        <div>
                        <input className={styles.textInput} type="password" onChange={(e) => handleUserPassword(e)} placeholder="Password..." required/>
                            {toggleContainAlert &&
                                <div className={styles.alertMsg}>
                                    <p>Must contain a lower case, a capital letter, and at least 6 characters!</p>
                                </div>
                            }
                        <input className={styles.textInput} type="password" onChange={(e) => HandleUserComfirmPassword(e)} placeholder="Confirm password..." required/>
                            {toggleMatchAlert &&
                                <div className={styles.alertMsg}>
                                    <p>Passwords don't match!</p>
                                </div>
                            }
                        </div>
                    </div>
                    <button type="submit" className={styles.completeContactFormBtn}>Create account</button>
                </form>
        </div>
     );
}

export default RegisterComponent;

