# 🏋️ SportSee 

Ce projet a été réalisé dans le cadre de ma **formation développeuse front-end chez OpenClassrooms**.  
L’objectif est de recréer la **page profil d’un utilisateur** pour l’application de coaching sportif SportSee, avec affichage de **données sportives sous forme de graphiques**, à partir d’une **API NodeJS** ou de **données mockées**.

> 🖥️ Ce projet est uniquement prévu pour un affichage **desktop**.

---

## 🚀 Installation et lancement

### 1. Cloner le dépôt

```bash
git clone https://github.com/Chacat96/SportSee.git
cd sportsee
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le front

```bash
npm run dev
```

Le front sera disponible sur [http://localhost:5173](http://localhost:5173) *(port Vite par défaut)*.

---

## 🔌 Lancement du backend

> Le projet utilise une **API Node.js locale** pour simuler les données utilisateur.  
> Voici les étapes pour la faire fonctionner :

### 1. Cloner le dépôt backend

```bash
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git sportsee-api
cd sportsee/SportSee
```

### 2. Installer les dépendances

```bash
yarn install
```

### 3. Lancer l'API sur le port 3000

```bash
yarn dev
```

L’API sera disponible sur : [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Stack technique

- **React** (avec Vite)
- **Recharts** – Librairie de visualisation graphique
- **Fetch API** – Appels réseau
- **CSS/SCSS desktop only**
- **JSDoc** – Documentation des services
- **Backend NodeJS fourni par OpenClassrooms**

---

## 📊 Fonctionnalités

- Affichage des données utilisateur :
  - Activité quotidienne (bar chart)
  - Durée des sessions (line chart)
  - Performance (radar chart)
  - Score (pie chart)
- Données issues de mock local **ou** d’une **API NodeJS**
- Standardisation des données pour correspondre aux maquettes
- Affichage conditionnel si les données ne sont pas disponibles
- Changer d'utilisateur : 12 ou 18 dans l'url

---

## 📦 Structure du projet

```
├── public/
├── src/
│   ├── assets/            → Logos, icônes, images
│   ├── components/        → Composants graphiques
│   ├── pages/             → Page Profil
│   ├── services/          → Appels API (mock ou réel)
│   ├── utils/            
│   ├── styles/            → CSS global
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 📄 Licence

Projet pédagogique réalisé dans le cadre d’un exercice.  
