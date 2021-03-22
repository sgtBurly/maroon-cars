import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    const [Members, setMembers] = useState([{test: "test"}]);
    const [loggedInMember, setLoggedInMember] = useState({purchases: [
        {
        "make": "Pontiac",
        "model": "Montana SV6",
        "year": 2006,
        "vin": "JN1CV6FE7DM360307",
        "city": "Jāsim",
        "descShort": "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
        "descLong": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "price": 299379,
        "miles": 12346,
        "discount": true
      },
      {
        "make": "Mercury",
        "model": "Mountaineer",
        "year": 2009,
        "vin": "3GTU2YEJ4CG418654",
        "city": "Dili",
        "descShort": "purus sit amet nulla quisque arcu libero rutrum ac lobortis",
        "descLong": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "price": 486455,
        "miles": 15226,
        "discount": true
      }
    ]})
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
    console.log("This is loggedInMember", loggedInMember)
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