export const userData = [
  {
    id: 12,
    userInfos: {
      firstName: "Karl",
      lastName: "Dovineau",
      age: 31
    },
    score: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34
    },
    score: 0.3, 
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120
    }
  }
];

export const activityData = [
  {
    "userId": 18,
    "sessions": [
        {
            "day": "2020-07-01",
            "kilogram": 70,
            "calories": 240
        },
        {
            "day": "2020-07-02",
            "kilogram": 69,
            "calories": 220
        },
        {
            "day": "2020-07-03",
            "kilogram": 70,
            "calories": 280
        },
    ]
},
{
  "userId": 12,
  "sessions": [
      {
          "day": "2020-07-01",
          "kilogram": 80,
          "calories": 240
      },
      {
          "day": "2020-07-02",
          "kilogram": 80,
          "calories": 220
      },
      {
          "day": "2020-07-03",
          "kilogram": 81,
          "calories": 280
      },
  ]
}
]

export const averageSessionsData = [
  {
    "userId": 12,
    "sessions": [
        {
            "day": 1,
            "sessionLength": 30
        },
        {
            "day": 2,
            "sessionLength": 23
        },
        {
            "day": 3,
            "sessionLength": 45
        },
    ]
},
{
  "userId": 18,
  "sessions": [
      {
          "day": 1,
          "sessionLength": 30
      },
      {
          "day": 2,
          "sessionLength": 23
      },
      {
          "day": 3,
          "sessionLength": 45
      },
  ]
} 
]

export const performanceData = [
  {
    "userId": 12,
    "kind": {
      "1": "cardio",
      "2": "energy",
      "3": "endurance",
  },
  "data": [
    {
        "value": 80,
        "kind": 1
    },
    {
        "value": 120,
        "kind": 2
    },
    {
        "value": 140,
        "kind": 3
    },
    ]
},
{
  "userId": 18,
  "kind": {
    "1": "cardio",
    "2": "energy",
    "3": "endurance",
},
    "data": [
      {
          "value": 200,
          "kind": 1
      },
      {
          "value": 240,
          "kind": 2
      },
      {
          "value": 80,
          "kind": 3
      },
  ]
}
]