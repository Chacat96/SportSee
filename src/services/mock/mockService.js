import { userData, performanceData, activityData, averageSessionsData } from './mockData.js';

export async function getUserData(userId) {
  const user = userData.find(user => user.id === userId);
  return user; 
}

export async function getAverageSessions(userId) {
  return averageSessionsData.find(data => data.userId === userId);
}

export async function getPerformance(userId) {
  return performanceData.find(data => data.userId === userId);
}

export async function getActivity(userId) {
  return activityData.find(data => data.userId === userId);
}

