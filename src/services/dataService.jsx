import { getUserData as getMockUserData, getActivity as getMockActivity, getAverageSessions as getMockAverageSessions, getPerformance as getMockPerformance } from './mock/mockService';

const USE_MOCK_DATA = true; 

const baseURL = 'http://localhost:3000/user';

// Services pour les données API
/**
 * Fetches the user data for the given user ID from the API
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The user data
 * @throws {Error} If the API request fails
 */
async function getApiUserData(userId) {
    try {
        const response = await fetch(`${baseURL}/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.data; 
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

/**
 * Fetches the activity data for the given user ID from the API
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The activity data
 * @throws {Error} If the API request fails
 */
async function getApiActivity(userId) {
    try {
        const response = await fetch(`${baseURL}/${userId}/activity`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching activity data:', error);
        throw error;
    }
}

/**
 * Fetches the average sessions data for the given user ID from the API
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The average sessions data
 * @throws {Error} If the API request fails
 */
async function getApiAverageSessions(userId) {
    try {
        const response = await fetch(`${baseURL}/${userId}/average-sessions`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching average sessions data:', error);
        throw error;
    }
}

/**
 * Fetches the performance data for the given user ID from the API
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The performance data
 * @throws {Error} If the API request fails
 */
async function getApiPerformance(userId) {
    try {
        const response = await fetch(`${baseURL}/${userId}/performance`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching performance data:', error);
        throw error;
    }
}

// mock
/**
 * Fetches userData for the given user ID
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} User Data
 * @throws {Error} If the API request fails
 */
export async function getUserData(userId) {
    if (USE_MOCK_DATA) {
        return await getMockUserData(userId);
    } else {
        return await getApiUserData(userId);
    }
}

/**
 * Fetches the activity data for the given user ID
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The activity data
 * @throws {Error} If the API request fails
 */
export async function getActivity(userId) {
    if (USE_MOCK_DATA) {
        return await getMockActivity(userId);
    } else {
        return await getApiActivity(userId);
    }
}

/**
 * Fetches the average sessions data for the given user ID
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The average sessions data
 * @throws {Error} If the API request fails
 */
export async function getAverageSessions(userId) {
    if (USE_MOCK_DATA) {
        return await getMockAverageSessions(userId);
    } else {
        return await getApiAverageSessions(userId);
    }
}

/**
 * Fetches the performance data for the given user ID
 * @param {number} userId - The ID of the user
 * @returns {Promise<object>} The performance data
 * @throws {Error} If the API request fails
 */
export async function getPerformance(userId) {
    if (USE_MOCK_DATA) {
        return await getMockPerformance(userId);
    } else {
        return await getApiPerformance(userId);
    }
}