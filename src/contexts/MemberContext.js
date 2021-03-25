import React, { useState, createContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
export const MemberContext = createContext();

export function MemberProvider(props) {
  // Function for retrieving custom information from local storage
  const getFromLocalStorage = (argument) => {
    if (argument in localStorage) {
      let parsedLocalContent = JSON.parse(localStorage.getItem(argument));
      return parsedLocalContent;
    } else {
      return [];
    }
  };

  const [members, setMembers] = useState(
    getFromLocalStorage("membersInStorage")
  );
  const [loggedInMember, setLoggedInMember] = useState(
    getFromLocalStorage("loggedInMember")
  );

  //Using the hook to update local storage with members array and logged in member
  useEffect(() => {
    localStorage.setItem("membersInStorage", JSON.stringify(members));
    localStorage.setItem("loggedInMember", JSON.stringify(loggedInMember));
  }, [members, loggedInMember]);

  const transferUserData = (newUser) => {
    let userExist = null;
    userExist = members.find((member) => member.email === newUser.email);

    if (userExist) {
      toast.error("Already a member!");
    } else {
      setMembers([...members, { ...newUser }]);
      //seting setLoggedInMember variable to newUser (user is logged in when register)
      setLoggedInMember(newUser);
      toast.success(`Welcome to Maroon Cars, ${newUser.firstName}!`);
    }
  };

  const addPurchase = (latestPurchase) => {
    let memberToAddTo = members.findIndex(
      (member) => member.email === loggedInMember.email
    );

    setLoggedInMember((prevState) => ({
      ...prevState,
      purchases: [latestPurchase, ...prevState.purchases],
    }));
    setMembers((prevState) => [
      ...prevState.slice(0, memberToAddTo),
      {
        ...prevState[memberToAddTo],
        purchases: [latestPurchase, ...prevState[memberToAddTo].purchases],
      },
      ...prevState.slice(memberToAddTo + 1, members.length),
    ]);
  };
  //Function that checks if the member has correct user-input to be logged in
  const loginFunc = (memberInput) => {
    const successfulLogin = members.filter(
      (member) =>
        member.email === memberInput.userEmail &&
        member.password === memberInput.userPassword
    );
    if (successfulLogin.length > 0) {
      //Sets the logged in member
      setLoggedInMember(successfulLogin[0]);
    } else {
      alert("INVALID USERNAME OR PASSWORD");
    }
  };

  const values = {
    transferUserData,
    members,
    loginFunc,
    loggedInMember,
    setLoggedInMember,
    addPurchase,
  };

  return (
    <MemberContext.Provider value={values}>
      {props.children}
    </MemberContext.Provider>
  );
}

export default MemberProvider;
