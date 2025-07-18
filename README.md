# GrooveNomad 🎵✈️

⚠️ Attention disponibilité limité du projet, abonnement gratuit à n8n qui expire le 25/07/2025.

## Description

**GrooveNomad** est la première plateforme qui combine festivals, voyages et intelligence artificielle. Notre mission est de simplifier l'organisation de voyages musicaux en proposant des séjours sur mesure qui incluent billets de festival, hébergement, transport et activités locales.

Grâce à notre chatbot intelligent, les utilisateurs peuvent construire en quelques clics un séjour personnalisé selon leurs goûts musicaux, envies de découverte et budget. Fini les recherches compliquées - tout est centralisé, rapide et fluide.

## 🏗️ Architecture

Le projet est structuré en deux applications principales :

### 📱 Application Mobile (React Native + Expo)
- **Technologies** : React Native, Expo, TypeScript
- **Fonctionnalités** : Billet de festivals, consultation des événements, interface utilisateur native
- **Plateformes** : iOS et Android

### 🌐 Application Web (React)
- **Technologies** : React, Webpack, Tailwind CSS
- **Fonctionnalités** : Catalogue de festivals, chatbot intelligent, filtres de recherche
- **Interface** : Design moderne et responsive

## 🚀 Technologies Utilisées

### Frontend Mobile
- **React Native** 0.79.5
- **Expo** ~53.0.17
- **TypeScript** ~5.8.3
- **React Navigation** ^7.1.14
- **Expo Font** ^13.3.2
- **React Native Reanimated** ^3.18.0

### Frontend Web
- **React** ^19.1.0
- **Webpack** ^5.100.0
- **Tailwind CSS** ^4.1.11
- **Babel** ^7.28.0
- **ESLint** ^9.31.0

### Backend & Services
- **Airtable** - Base de données pour les festivals
- **N8N** - Automatisation et webhooks pour le chatbot

## 📁 Structure du Projet

```
GrooveNomad/
├── mobile/                 # Application mobile React Native
│   ├── app/               # Code source de l'app mobile
│   ├── android/           # Configuration Android
│   ├── ios/               # Configuration iOS
│   └── package.json       # Dépendances mobile
├── web/                   # Application web React
│   ├── src/               # Code source de l'app web
│   ├── public/            # Assets publics
│   └── package.json       # Dépendances web
└── README.md              # Ce fichier
```

## 🛠️ Installation et Configuration

### Prérequis
- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn**
- **Expo CLI** (pour l'application mobile)
- **Compte Airtable** avec une base de données configurée

### Installation de l'Application Mobile

```bash
# Naviguer vers le dossier mobile
cd mobile

# Installer les dépendances
npm install
# ou
yarn install

# Démarrer l'application
npm start
# ou
yarn start
```

### Installation de l'Application Web

```bash
# Naviguer vers le dossier web
cd web

# Installer les dépendances
npm install
# ou
yarn install

# Démarrer l'application
npm start
# ou
yarn start
```

## 🔧 Configuration des Variables d'Environnement

### Application Mobile (.env)
```env
EXPO_PUBLIC_AIRTABLE_API_KEY=votre_clé_api_airtable
EXPO_PUBLIC_AIRTABLE_BASE_ID=votre_base_id_airtable
```

### Application Web (.env)
```env
REACT_APP_AIRTABLE_API_KEY=votre_clé_api_airtable
REACT_APP_AIRTABLE_BASE_ID=votre_base_id_airtable
```

## 🎯 Fonctionnalités Principales

### Application Mobile
- **Navigation intuitive** avec bottom tabs
- **Catalogue de festivals**
- **Interface utilisateur native** optimisée
- **Gestion des polices personnalisées** (BwModelica, Chillax)
- **Notifications push** (configurées)

### Application Web
- **Carousel de festivals** avec animations
- **Chatbot intelligent** pour la personnalisation
- **Design responsive** et moderne
- **Intégration Airtable** pour les données

### Chatbot Intelligent
- **Personnalisation des séjours** selon les préférences
- **Gestion multi-étapes** (type, ville, mois)
- **Intégration webhook** avec N8N
- **Contexte conversationnel** robuste

## 🎨 Design System

### Couleurs
- **Orange principal** : #FF6B35
- **Bleu principal** : #0B2D39
- **Gris neutre** : #A6AFC0

### Typographie
- **Web** : Sora (Google Fonts)
- **Mobile** : BwModelica, Chillax (polices personnalisées)

### Composants
- **Cards de festivals** avec effets hover
- **Carousel** avec navigation par points
- **Filtres** avec interface intuitive
- **Chatbot** avec interface conversationnelle

## 📊 Base de Données Airtable

La structure de la base Airtable inclut :
- **Festival Name** : Nom du festival
- **Start Date** : Date de début
- **Location** : Lieu du festival
- **IMAGE** : Image du festival
- **Festival Type** : Type de musique
- **Festival Description** : Description détaillée

## 🚀 Déploiement

### Application Mobile
```bash
# Build pour Android
expo build:android

# Build pour iOS
expo build:ios

# Publication sur les stores
expo publish
```

### Application Web
```bash
# Build de production
npm run build
# ou
yarn build

# Déployer sur votre hébergeur préféré
```

## 🤝 Contribution

1. **Fork** le projet
2. **Créez** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Commitez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Poussez** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

## 📝 Scripts Disponibles

### Application Mobile
```bash
npm start          # Démarrer Expo
npm run android    # Lancer sur Android
npm run ios        # Lancer sur iOS
npm run web        # Lancer version web
```

### Application Web
```bash
npm start          # Démarrer en mode développement
npm run build      # Build de production
npm run lint       # Linter le code
npm run lint:fix   # Corriger automatiquement les erreurs de linting
npm run format     # Formater le code avec Prettier
```

## 🐛 Dépannage

### Problèmes Courants

1. **Erreur Airtable** : Vérifiez vos clés API et l'ID de base
2. **Problèmes de polices** : Assurez-vous que les fichiers de polices sont présents dans `mobile/app/assets/fonts/`
3. **Erreurs de build** : Nettoyez le cache avec `expo r -c` ou `npm run clean`

## 📞 Support

Pour toute question ou problème :
- **Email** : [votre-email@example.com]
- **Issues GitHub** : [lien vers les issues]

## 📄 Licence

Ce projet est sous licence [votre licence]. Voir le fichier `LICENSE` pour plus de détails.

---

**GrooveNomad** - Transformez chaque festival en aventure unique ! 🎵✨
