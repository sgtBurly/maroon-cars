
import React from 'react';
import styles from '../styles/RegisterComponentStyles.module.css'


const RegisterComponent = () => {
    return ( 
        <div>
            <form className={styles.Form} onSubmit={handleSubmit}>
                    <div className={styles.ContactInfo}>
                        <div className={styles.inputWrapper}>
                            <input className={`${styles.textInput} ${styles.eMail_input}`} type="text" onChange={updateUserEmail} placeholder="Email..." required />
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
                        <input className={styles.textInput} type="password" onChange={handleUserPassword} placeholder="Password..." required/>
                        <input className={styles.textInput} type="password" onChange={handleUserComfirmPassword} placeholder="confirm password..." required/>
                        </div>
                    </div>
                    <button type="submit" className={styles.completeContactFormBtn}>Create account</button>
                </form>
        </div>
     );
}
 
export default RegisterComponent;

