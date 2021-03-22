import React, { useContext } from 'react';
import Styles from '../styles/ProfileStyles.module.css';
import PreviousOrder from '../components/PreviousOrder';
import { MemberContext } from '../contexts/MemberContext';
//import { MemberContext } from '../contexts/MemberContext'

const Profile = () => {
    let { loggedInMember } = useContext(MemberContext)
    // Get loggedInMember from MemberContext later to make info dynamic
    // const { loggedInMember } = useContext(MemberContext);

    return (
        <div className={Styles.main_wrapper}>
            <div className={Styles.colored_wrapper}></div>

            <div className={Styles.user_image_text_wrapper}>
                <div className={Styles.user_image_wrapper}>
                    <img src="https://thispersondoesnotexist.com/image" alt="user" />
                </div>
                <h2>Jessie Adams</h2>
            </div>
            <div className={Styles.profile_info}>
                <h3>Profile Info</h3>
                <div className={Styles.profile_info_innerwrapper}>
                    <p>Firstname: <span>Jessie</span></p>
                    <p>Lastname: <span>Adamns</span></p>
                    <p>E-mail: <span>fhasjjdasda</span></p>
                    <p>Member Since: <span>dsjakdaskd</span></p>
                </div>
            </div>
            <div className={Styles.previous_order_wrapper}>
                <h3>These are you previous ordered cars</h3>
                
                {
                //Checks if loggedInMember has any former purchases, is so render those purchases
                loggedInMember.purchases.length > 0 ? <PreviousOrder /> : null
                }
            </div>
            <div className={Styles.logout_wrapper}>
                <button>Logout</button>
            </div>
        </div>
    );
}

export default Profile;