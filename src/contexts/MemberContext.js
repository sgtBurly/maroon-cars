import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [members, setMembers] = useState([
        {test: "test", email: "test"},
    ]);



    const transferUserData = (newUser) => {

        let userExist = null

        userExist = members.find(member => member.email === newUser.email);

        if (userExist) {
            console.log("Already a member!")
        } else {
            setMembers([...members, {...newUser}]);
        }
    };

    useEffect(() => {

        console.log("This is Members: ", members)

    }, [members])

    const values = {
        transferUserData,
        members
    }

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
}

export default MemberProvider;