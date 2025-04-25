import { userMainData } from './mockData.js';

export async function getUserMainData(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(userMainData);
    }, 200);
  });
}