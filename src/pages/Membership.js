import react from 'react';
import Profile from '../components/Profile';

const Membership = () => {
    // Get this varable from MemberContext later
    const loggedInMember = true;

    return (
        <div className="membership">
            {loggedInMember ? <Profile /> : <div>Register and login component goes here!</div>}
        </div>
     );
}

export default Membership;