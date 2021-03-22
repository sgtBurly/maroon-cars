import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [Members, setMembers] = useState([{test: "test"}]);
    const [loggedInMember, setLoggedInMember] = useState({})
    const transferUserData = (newUser) => {
        setMembers([...Members, {...newUser}]);
    };
    //Function that checks if the member has correct user-input to be logged in
    const loginFunc = (memberInput) => {
        const successfulLogin = Members.filter(member => member.username === memberInput.username && member.password === memberInput.password);
        if (successfulLogin) {
              //Sets the logged in member
              setLoggedInMember(successfulLogin[0]);
           
        }
        else {
            alert("INVALID USERNAME OR PASSWORD");
        }
    }
    
    useEffect(() => {
        console.log("this is Members: ", Members);
    }, [Members]);

    const values = {
        transferUserData,
        Members, 
        loginFunc,
        loggedInMember
    }

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
}

export default MemberProvider;