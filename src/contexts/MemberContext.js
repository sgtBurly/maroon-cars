import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState, createContext, useEffect} from 'react';

export const MemberContext = createContext();


export function MemberProvider(props){

    const [members, setMembers] = useState([{test: "test"}]);
    const [loggedInMember, setLoggedInMember] = useState({purchases: []});

    useEffect(() => {
        console.log('this is members', members)
        console.log('this is logged in member', loggedInMember)
    }, [members, loggedInMember])

    const transferUserData = (newUser) => {

        let userExist = null

        userExist = members.find(member => member.email === newUser.email);

        if (userExist) {
            console.log("Already a member!")
        } else {
            setMembers([...members, {...newUser}]);
        }
    };
    //Function that checks if the member has correct user-input to be logged in
    const loginFunc = (memberInput) => {
        const successfulLogin = members.filter(member => member.email === memberInput.userEmail && member.password === memberInput.userPassword);
        if (successfulLogin.length > 0) {
              //Sets the logged in member
              setLoggedInMember(successfulLogin[0]);
        }
        else {
            alert("INVALID USERNAME OR PASSWORD");
        };
    };

    const values = {
        transferUserData,
        members,
        loginFunc,
        loggedInMember,
    };

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
};

export default MemberProvider;