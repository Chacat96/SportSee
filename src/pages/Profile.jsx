import { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { getUserData } from "../services/mock/mockService";
import React from "react";

function Profile () {
  const [userData, setUserData] = React.useState(null);
  
  useEffect(() => {
    async function fetchUser() {
     
      const user = await getUserData(12); 
      setUserData(user);
      console.log(user); 
    }
    fetchUser();
  }, []);
    
  return (
    <>
      <Header />
      <NavBar />
      <h1>Bonjour {userData.userInfos.firstName}</h1>
    </>
  );
}

export default Profile;