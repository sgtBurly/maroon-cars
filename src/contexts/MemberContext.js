import { getDefaultNormalizer } from '@testing-library/dom';
import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [Members, setMembers] = useState([{test: "test", Email: "johan.markstrom@gmail.com"}]);


    const [ValidateUser, setValidateUser] = useState([])

    const transferUserData = (newUser) => {

        setValidateUser(newUser);

        let Valid = Members.map(member => member.Email.includes(newUser.Email))            
        console.log("This is value of valid: ", Valid);

        validateUserCredentials(Valid);
    };

    const validateUserCredentials = (Valid) => {
        
        if(Valid){
            console.log("Already a member!");

        }else {
            console.log("This is inside if loop");
            setMembers([...Members, {...ValidateUser}]);
    
    }


    };

    useEffect(() => {

        console.log("This is Members: ", Members)

    }, [Members])

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