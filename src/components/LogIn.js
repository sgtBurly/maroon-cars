import { useState, useContext } from "react";
import styles from "../styles/LogInStyles.module.css";
import { MemberContext } from "../contexts/MemberContext";

function LogIn() {
  const { loginFunc } = useContext(MemberContext);
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const updateUserPassword = (e) => {
    setUserPassword(e.target.value);
  };
  const updateUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    const memberInput = {
      userPassword,
      userEmail,
    };

    loginFunc(memberInput);
  };

  return (
    <div className={styles.logIn}>
      <div className={styles.logInWrapper}>
        <form className={styles.form} onSubmit={handleLogIn}>
          <h2 className={styles.form_title}>Log in</h2>
          <input
            type="text"
            placeholder="Enter e-mail"
            name="email"
            onChange={updateUserEmail}
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            name="psw"
            onChange={updateUserPassword}
            className={styles.input}
            required
          />
          <button className={styles.btn}>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
