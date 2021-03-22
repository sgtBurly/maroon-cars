import react from 'react';
import Profile from '../components/Profile';
import RegisterComponent from '../components/RegisterComponent';
import LogIn from '../components/LogIn';

const Membership = () => {
    // Get this varable from MemberContext later
    const loggedInMember = true;

    return (
        <div className="membership">
            {loggedInMember ? <Profile /> : <div>Register and login component goes here!</div>}
            <LogIn /> 
            <RegisterComponent />
        </div>
     );
}

export default Membership;