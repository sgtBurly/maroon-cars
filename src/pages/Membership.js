import react from 'react';
import Profile from '../components/Profile';
import RegisterComponent from '../components/RegisterComponent';
import LogIn from '../components/LogIn';
import { MemberContext } from '../contexts/MemberContext';
import { useContext } from 'react';

const Membership = () => {
    // Get this varable from MemberContext later
    const {loggedInMember} = useContext(MemberContext);
    // const loggedInMember = true;

    return (
        <div className="membership">
            {loggedInMember.email ? <Profile /> : <div>            
            <LogIn /> 
            <RegisterComponent />
            </div>
            }
        </div>
     );
}

export default Membership;