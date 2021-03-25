import React, {useState, createContext, useEffect} from 'react';
export const MemberContext = createContext();

export function MemberProvider(props){

    // Function for retrieving custom information from local storage
    const getFromLocalStorage = argument => {
        if(argument in localStorage){
            let parsedLocalContent = JSON.parse(localStorage.getItem(argument));
            if (argument === 'membersInStorage' && parsedLocalContent.length !== 0) {
                parsedLocalContent.map(member => {
                    member.purchases.map(order => order.timestamp = new Date(order.timestamp));
                })
            } else if (argument === 'loggedInMember' && parsedLocalContent.length !== 0) {
                parsedLocalContent.purchases.map( order => order.timestamp = new Date(order.timestamp));
            }
            return parsedLocalContent
        } else {
            return []
        }
    }

    const [members, setMembers] = useState(getFromLocalStorage('membersInStorage'));
    const [loggedInMember, setLoggedInMember] = useState(getFromLocalStorage('loggedInMember'));

    useEffect(() => {
        console.log('this is members', members)
        console.log('this is logged in member', loggedInMember)
    }, [members, loggedInMember])

    //Using the hook to update local storage with members array and logged in member
    useEffect(() => {
        localStorage.setItem('membersInStorage', JSON.stringify(members));
        localStorage.setItem('loggedInMember', JSON.stringify(loggedInMember));
    }, [members, loggedInMember])

    // Function for retrieving custom information from local storage

    const transferUserData = (newUser) => {
        let userExist = null;
        userExist = members.find(member => member.email === newUser.email);

        if (userExist) {
            console.log("Already a member!")
        } else {
            setMembers([...members, {...newUser}]);
        }
    };

    const addPurchase = (latestPurchase) => {
        let memberToAddTo = members.findIndex(member => member.email === loggedInMember.email);
        console.log(memberToAddTo)
        setLoggedInMember(prevState => ({...prevState, purchases: [latestPurchase, ...prevState.purchases]}));
        setMembers(prevState => ([...prevState.slice(0, memberToAddTo), {...prevState[memberToAddTo], purchases: [latestPurchase, ...prevState[memberToAddTo].purchases]},...prevState.slice(memberToAddTo+1, members.length)]));
    }
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
        setLoggedInMember,
        addPurchase
    };

    return (
        <MemberContext.Provider value={values}>
            {props.children}
        </MemberContext.Provider>
    )
};

export default MemberProvider;