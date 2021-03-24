import { useContext } from "react";
import { MemberContext } from "../contexts/MemberContext";

const MemberAddress = () => {

  const { loggedInMember } = useContext(MemberContext);

  return (
    <div className='memberaddress'>
      <h3>Personal info:</h3>
      <div>
          <p>Name: <span>{`${loggedInMember.firstName} ${loggedInMember.lastName}`}</span></p>
          <p>E-mail: <span>{loggedInMember.email}</span></p>
          <p>Address: <span>{loggedInMember.address}</span></p>
          <p>Zipcode: <span>{loggedInMember.zipCode}</span></p>
          <p>City: <span>{loggedInMember.city}</span></p>
      </div>
    </div>
  );
}

export default MemberAddress;