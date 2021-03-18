import styles from "../styles/LogInStyles.module.css";

function LogIn() {
    return (
        <div className={styles.logIn}>

            <div className={styles.logInWrapper}>
                <form>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                </form>
            </div>
            <div className={styles.signUpWrapper}>
                <form>
                    <input type="text" placeholder="Enter Username" name="uname" required/>
                    <input type="email" placeholder="Enter email" name="email" required/>
                    <input type="password" placeholder="Enter Password" name="psw" required/>
                </form>
            </div>
        </div>
    )
}

export default LogIn;