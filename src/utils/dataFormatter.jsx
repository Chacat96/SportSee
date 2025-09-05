/**
 * Standardise les données utilisateur venant de l'API
 * @param {Object} rawUserData - Données brutes de l'API utilisateur
 * @returns {Object} Données utilisateur standardisées
 */
export function formatUserData(rawUserData) {
  if (!rawUserData) return null;

  return {
    id: rawUserData.id,
    userInfos: {
      firstName: rawUserData.userInfos.firstName,
      lastName: rawUserData.userInfos.lastName,
      age: rawUserData.userInfos.age
    },
    score: rawUserData.score || rawUserData.todayScore || 0,
    keyData: {
      calorieCount: rawUserData.keyData.calorieCount,
      proteinCount: rawUserData.keyData.proteinCount,
      carbohydrateCount: rawUserData.keyData.carbohydrateCount,
      lipidCount: rawUserData.keyData.lipidCount
    }
  };
}

/**
 * Standardise les données d'activité venant de l'API
 * @param {Object} rawActivityData - Données brutes de l'API activité
 * @returns {Object} Données d'activité standardisées
 */
export function formatActivityData(rawActivityData) {
  if (!rawActivityData) return null;

  return {
    userId: rawActivityData.userId,
    sessions: rawActivityData.sessions.map(session => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories
    }))
  };
}

/**
 * Standardise les données de sessions moyennes venant de l'API
 * @param {Object} rawSessionsData - Données brutes de l'API sessions moyennes
 * @returns {Object} Données de sessions standardisées
 */
export function formatAverageSessionsData(rawSessionsData) {
  if (!rawSessionsData) return null;

  return {
    userId: rawSessionsData.userId,
    sessions: rawSessionsData.sessions.map(session => ({
      day: session.day,
      sessionLength: session.sessionLength
    }))
  };
}

/**
 * Standardise les données de performance venant de l'API
 * @param {Object} rawPerformanceData - Données brutes de l'API performance
 * @returns {Object} Données de performance standardisées
 */
export function formatPerformanceData(rawPerformanceData) {
  if (!rawPerformanceData) return null;

  return {
    userId: rawPerformanceData.userId,
    kind: { ...rawPerformanceData.kind },
    data: rawPerformanceData.data.map(item => ({
      value: item.value,
      kind: item.kind
    }))
  };
}