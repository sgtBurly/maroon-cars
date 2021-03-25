import React, { useContext, useEffect } from "react";
import Profile from "../components/Profile";
import RegisterComponent from "../components/RegisterComponent";
import LogIn from "../components/LogIn";
import { MemberContext } from "../contexts/MemberContext";
import styles from "../styles/Membership.module.css";

const Membership = () => {
  const { loggedInMember } = useContext(MemberContext);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="membership">
      {loggedInMember.email ? (
        <Profile />
      ) : (
        <div>
          <LogIn />
          <h3 className={styles.not_a_member_yet}>Not a member yet?</h3>
          <input
            type="checkbox"
            id="registerFormToggle"
            className={styles.registerFormToggle}
          ></input>
          <label for="registerFormToggle" className={styles.registerFormLabel}>
            Register now!
          </label>
          <div className={styles.registerComponentWrapper}>
            <RegisterComponent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;
