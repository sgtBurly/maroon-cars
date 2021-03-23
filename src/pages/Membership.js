import react, { useContext } from 'react';
import Profile from '../components/Profile';
import RegisterComponent from '../components/RegisterComponent';
import LogIn from '../components/LogIn';
import { MemberContext } from '../contexts/MemberContext';

const Membership = () => {
    // Get this varable from MemberContext later
    const {loggedInMember} = useContext(MemberContext);

    return (
        <div className="membership">
            {loggedInMember.email ? <Profile /> : <div>Register and login component goes here!</div>}
            <LogIn />
            <RegisterComponent />
        </div>
     );
}

export default Membership;