import react from 'react';
import Profile from '../components/Profile';
import RegisterComponent from '../components/RegisterComponent';

const Membership = () => {
    // Get this varable from MemberContext later
    const loggedInMember = true;

    return (
        <div className="membership">
            {loggedInMember ? <Profile /> : <div>Register and login component goes here!</div>}
            <RegisterComponent />
        </div>
     );
}

export default Membership;