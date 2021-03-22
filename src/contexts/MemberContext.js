import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [members, setMembers] = useState([{test: "test"}]);
    const [loggedInMember, setLoggedInMember] = useState({});

    const transferUserData = (newUser) => {
        setMembers([...members, {...newUser}]);
    };
    //Function that checks if the member has correct user-input to be logged in
    const loginFunc = (memberInput) => {
        const successfulLogin = members.filter(member => member.userEmail === memberInput.userEmail && member.userPassword === memberInput.userPassword);
        if (successfulLogin) {
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
        loggedInMember
    };

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
};

export default MemberProvider;