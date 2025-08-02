import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { getUserData, getActivity, getAverageSessions, getPerformance } from "../services/dataService";
import React from "react";
import '../styles/css/Profile.css';
import ActivityChart from "../components/ActivityChart";
import Charts from "../components/Charts";
import Card from "../components/Card";
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
  const [size, setSize] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isResponsive = size < 1370;

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        
        const userId = id ? parseInt(id) : 12;

        const user = await getUserData(userId);
        setUserData(user);

        const activity = await getActivity(userId);
        setUserActivity(activity);

        const averageSessions = await getAverageSessions(userId);
        setAverageSessionsData(averageSessions);

        const performance = await getPerformance(userId);
        setPerformanceData(performance);

      } catch (err) {
        console.error("Erreur:", err);
        setError("Erreur lors du chargement des données");
      } finally {
        setLoading(false);
      }
    }    
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <NavBar />
        <div className="container">
          <p>Chargement des données...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <NavBar />
        <div className="container">
          <p className="error">{error}</p>
        </div>
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <Header />
        <NavBar />
        <div className="container">
          <p>Aucune donnée utilisateur disponible</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <NavBar />

      <div className="container">
        <div className="container__title">
          <h1>Bonjour <span className="container__title__name">{userData.userInfos.firstName}</span></h1>
        </div>

        <div className="container__dashboard">
          <p>Félicitation ! Vous avez explosé vos objectifs hier ! 👏</p>
        </div>

        {isResponsive ? (

          // Vue responsive 
          
          <div className="container__responsive">
            <div className="container__responsive__etiquetteResponsive">
            <Card 
                nutriment="Calories" 
                valeur={`${userData.keyData.calorieCount}kCal`} 
                imgNutriment={calorieIcon}
                bgColor="#FF0000"
              />
              <Card 
                nutriment="Protéines" 
                valeur={`${userData.keyData.proteinCount}g`} 
                imgNutriment={proteinIcon}
                bgColor="#4AB8FF"
              />
              <Card 
                nutriment="Glucides" 
                valeur={`${userData.keyData.carbohydrateCount}g`} 
                imgNutriment={glucideIcon}
                bgColor="#F9CE23"
              />
              <Card 
                nutriment="Lipides" 
                valeur={`${userData.keyData.lipidCount}g`} 
                imgNutriment={lipideIcon}
                bgColor="#FD5181"
              />
            </div>
            
            <div className="container__responsive__graph__chart">
              <div className="container__responsive__graph1">
                {userActivity && userActivity.sessions ? (
                  <ActivityChart data={userActivity.sessions} />
                ) : (
                  <p>Chargement des données d'activité...</p>
                )}
              </div>
              <div className="container__responsive__graph2">
                {averageSessionsData && performanceData ? (
                  <Charts 
                    averageSessionData={averageSessionsData} 
                    performanceData={performanceData} 
                    scoredata={userData.score || userData.todayScore}
                  />
                ) : (
                  <p>Chargement des graphiques...</p>
                )}
              </div>
            </div>
          </div>
        ) : (

          // Vue desktop 

          <div className="container__graph">
            <div className="container__graph__chart">
              <div className="container__graph1">
                {userActivity && userActivity.sessions ? (
                  <ActivityChart data={userActivity.sessions} />
                ) : (
                  <p>Chargement des données d'activité...</p>
                )}
              </div>
              <div className="container__graph2">
                {averageSessionsData && performanceData ? (
                  <Charts 
                    averageSessionData={averageSessionsData} 
                    performanceData={performanceData} 
                    scoredata={userData.score || userData.todayScore}
                  />
                ) : (
                  <p>Chargement des graphiques...</p>
                )}
              </div>
            </div>
            
            <div className="container__etiquette">
            <Card 
                nutriment="Calories" 
                valeur={`${userData.keyData.calorieCount}kCal`} 
                imgNutriment={calorieIcon}
                bgColor="#FF0000"
              />
              <Card 
                nutriment="Protéines" 
                valeur={`${userData.keyData.proteinCount}g`} 
                imgNutriment={proteinIcon}
                bgColor="#4AB8FF"
              />
              <Card 
                nutriment="Glucides" 
                valeur={`${userData.keyData.carbohydrateCount}g`} 
                imgNutriment={glucideIcon}
                bgColor="#F9CE23"
              />
              <Card 
                nutriment="Lipides" 
                valeur={`${userData.keyData.lipidCount}g`} 
                imgNutriment={lipideIcon}
                bgColor="#FD5181"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;