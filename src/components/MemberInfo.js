import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";
import styles from '../styles/MemberInfo.module.css'

const MemberAddress = () => {

  const { loggedInMember } = useContext(MemberContext);

  return (
    <div className={styles.memberInfo}>
      <h3>Personal info:</h3>
      <hr />
      <div className={styles.memberInfoWrapper}>
        <div className={styles.memberInfoPart1}>
          <p>Name:  <span>{`${loggedInMember.firstName} ${loggedInMember.lastName}`}</span></p>
          <p>E-mail:  <span>{loggedInMember.email}</span></p>
        </div>
        <div className={styles.memberInfoPart2}>
          <p>Address:  <span>{loggedInMember.address}</span></p>
          <p>Zipcode:  <span>{loggedInMember.zipCode}</span></p>
          <p>City:  <span>{loggedInMember.city}</span></p>
        </div>
      </div>
    </div>
  );
}

export default MemberAddress;