import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [Members, setMembers] = useState([{test: "test"}]);

    const transferUserData = (newUser) => {
        setMembers([...Members, {...newUser}]);
    };

    useEffect(() => {
        console.log("this is Members: ", Members);

    }, [Members]);

    const values = {
        transferUserData,
        Members
    }

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
}

export default MemberProvider;