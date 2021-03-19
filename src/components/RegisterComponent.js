
import React, {useState, useEffect, useContext} from 'react';
import styles from '../styles/RegisterComponentStyles.module.css'
import {MemberContext} from '../contexts/MemberContext';

const RegisterComponent = () => {

    const {transferUserData, Members} = useContext(MemberContext);


    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")
    const [PasswordMatch, setPasswordMatch] = useState(false)
    const [EmailState, setEmailState] = useState()
    const [ FirstName, setFirstName ] = useState("");
    const [ LastName, setLastName ] = useState("");
    const [ Address, setAddress ] = useState("");
    const [ City, setCity ] = useState("");
    const [ ZipCode, setZipCode ] = useState("");
    const [ Country, setCountry ] = useState("");
    const [ Email, setEmail] = useState("");

    const updateUserFName = e => {
        setFirstName(e.target.value);
    }
    const updateUserLName = e => setLastName(e.target.value);

    const updateUserEmail = e => {
        setEmail(e.target.value);
    }
    const updateUserAddress = e => {
    setAddress(e.target.value);
    }
    const updateUserCity = e => {
        setCity(e.target.value);
    }
    const updateUserZipCode = e => {
        setZipCode(e.target.value);
    }
    const updateUserCountry = e => {
        setCountry(e.target.value);
    }

    const handleUserPassword = (e) => {

        setPassword(e.target.value);

        if (ConfirmPassword === e.target.value){
            setPasswordMatch(true)
            
            }else {
                setPasswordMatch(false)
                
            }
    }

    const HandleUserComfirmPassword = (e) => {

        setConfirmPassword(e.target.value);

        if (Password === e.target.value){
            setPasswordMatch(true)
        
        }else {
            setPasswordMatch(false)
            
        }

    }

    const handleAccountSubmit = (e) => {

        e.preventDefault();

        if (PasswordMatch){
        const newUser = {
            Password,
            FirstName,
            LastName,
            Address,
            City,
            ZipCode,
            Country,
            Email,
            Purchases: [],
            isLoggedIn: true
        }
            
        transferUserData(newUser)
        }else {
            console.log("Passwords dont match bro");
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
                        <input className={styles.textInput} type="password" onChange={(e) => HandleUserComfirmPassword(e)} placeholder="Confirm password..." required/>
                        </div>
                    </div>
                    <button type="submit" className={styles.completeContactFormBtn}>Create account</button>
                </form>
        </div>
     );
}

export default RegisterComponent;

