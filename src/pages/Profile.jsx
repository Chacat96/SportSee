import { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { getUserData } from "../services/mock/mockService";
import React from "react";
import '../styles/css/Profile.css';

function Profile () {
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUserData(18);
        console.log("Données récupérées:", user);
        setUserData(user);
      } catch (err) {
        console.error("Erreur:", err);
      }
    }
    
    fetchUser();
  }, []);
    
  return (
    <>
      <Header />
      <NavBar />

      {userData ? (
        <div className="container">

        <div className="container__title">
          <h1>Bonjour <span className="container__title__name">{userData.userInfos.firstName}</span></h1>
        </div>

        <div className="container__dashboard">
          <p>Félicitation ! Vous avez explosé vos objectifs hier ! 👏</p>
        </div>

      </div>
      ) : (
        <p>Chargement des données...</p>
      )}
      
     
    </>
  );
}

export default Profile;