import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { getUserData, getActivity, getAverageSessions, getPerformance } from "../services/mock/mockService";
import React from "react";
import '../styles/css/Profile.css';
import ActivityChart from "../components/ActivityChart";
import Charts from "../components/Charts";
import Card from "../components/Card";
import { activityData } from "../services/mock/mockData";
import calorieIcon from '../assets/icon/energy.svg';
import proteinIcon from '../assets/icon/chicken.svg';
import glucideIcon from '../assets/icon/apple.svg';
import lipideIcon from '../assets/icon/cheeseburger.svg';

function Profile () {
  const {id} = useParams();
  const [userData, setUserData] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [averageSessionsData, setAverageSessionsData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const userId = id ? parseInt(id) : 12;

        const user = await getUserData(userId);
        console.log("Données user récupérées:", user);
        setUserData(user);

        const activity = await getActivity(userId);
        console.log("Données récupérées activity:", activity);
        setUserActivity(activity);

        const averageSessions = await getAverageSessions(userId);
        console.log("Données récupérées averageSessions:", averageSessions);
        setAverageSessionsData(averageSessions);

        const performance = await getPerformance(userId);
        console.log("Données récupérées performance:", performance);
        setPerformanceData(performance);

      } catch (err) {
        console.error("Erreur:", err);
      }
    }    
    fetchUser();
  }, [id]);

    
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
        <div className="container__graph">

       <div className="container__graph__chart">

      

        <div className="container__graph1">
          <ActivityChart data={userActivity.sessions} />
        </div>

        <div className="container__graph2">
          <Charts averageSessionData={averageSessionsData} performanceData={performanceData} scoredata={userData.score}/>
        </div>
 </div>
        <div className="container__etiquette">
           <Card 
              nutriment="Calories" 
              valeur={`${userData.keyData.calorieCount}kCal`} 
              imgNutriment={calorieIcon}
              bgColor="#FBE6D9"
            />
            <Card 
              nutriment="Protéines" 
              valeur={`${userData.keyData.proteinCount}g`} 
              imgNutriment={proteinIcon}
              bgColor="#FBE6D9"
            />
            <Card 
              nutriment="Glucides" 
              valeur={`${userData.keyData.carbohydrateCount}g`} 
              imgNutriment={glucideIcon}
              bgColor="#FBE6D9"
            />
            <Card 
              nutriment="Lipides" 
              valeur={`${userData.keyData.lipidCount}g`} 
              imgNutriment={lipideIcon}
              bgColor="#FBE6D9"
            />
        </div>
 </div>
      </div>
      ) : (
        <p>Chargement des données...</p>
      )}
      
     
    </>
  );
}

export default Profile;