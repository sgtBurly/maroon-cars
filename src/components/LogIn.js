import styles from "../styles/LogInStyles.module.css";

function LogIn() {
    return (
        <div className={styles.logIn}>
            <div className={styles.logInWrapper}>
                <form className={styles.form}>
                    <h2 className={styles.form_title}>Log In</h2>
                    <input type="text" placeholder="Enter Username" name="uname" className={styles.input} required/>
                    <input type="password" placeholder="Enter Password" name="psw" className={styles.input} required/>
                    <button className={styles.btn}>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;