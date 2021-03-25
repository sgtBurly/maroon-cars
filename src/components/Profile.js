import React, { useContext } from 'react';
import Styles from '../styles/ProfileStyles.module.css';
import PreviousOrder from '../components/PreviousOrder';
import { MemberContext } from '../contexts/MemberContext';
//import { MemberContext } from '../contexts/MemberContext'

const Profile = () => {
    const { loggedInMember, setLoggedInMember } = useContext(MemberContext)
    // Get loggedInMember from MemberContext later to make info dynamic

    const handleLogOut = (e) => {
        e.preventDefault();
        setLoggedInMember({purchases: []});
        console.log(loggedInMember);
    }

    return (
        <div className={Styles.main_wrapper}>
            <div className={Styles.colored_wrapper}></div>
            <div className={Styles.user_name_wrapper}>
                <h2>Let's buy some cars, {loggedInMember.firstName} {loggedInMember.lastName}!</h2>
            </div>

            <div className={Styles.profile_info}>
                {/* <h3>Profile info</h3> */}
                <div className={Styles.profile_info_innerwrapper}>
                    <p>First name: <span>{loggedInMember.firstName}</span></p>
                    <p>Last name: <span>{loggedInMember.lastName}</span></p>
                    <p>E-mail: <span>{loggedInMember.email}</span></p>
                    <p>Member since: <span>2021-03-15</span></p>
                </div>
            </div>
            <div className={Styles.logout_wrapper}>
                    <button onClick={handleLogOut}>Log out</button>
            </div>

            <div className={Styles.previous_order_wrapper}>
                <h3>Your previous orders</h3>
                {
                //Checks if loggedInMember has any former purchases, if so render those purchases
                loggedInMember.purchases.length > 0 ? <PreviousOrder /> : <p>No orders made yet...</p>
                }
            </div>
        </div>
    );
}

export default Profile;