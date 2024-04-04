import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user.username) return <div>Please Login</div>;
  else return <div>Welcome {user.username}</div>;
}

export default Profile;
