<template>
  <div class="app-container">
    <nav class="navigation">
      <router-link to="/" class="nav-link">Accueil</router-link>
      <router-link to="/todo" class="nav-link">Ma To-Do List</router-link>
    </nav>
    <div class="content">
      <h1>Accueil</h1>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Centrer le contenu principal */
.app-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centre verticalement */
  align-items: center;     /* Centre horizontalement */
  height: 100vh;           /* Prend toute la hauteur de l'écran */
  margin: 0;               /* Enlève les marges par défaut */
  text-align: center;      /* Centre le texte */
}

/* Stylisation du menu de navigation */
.navigation {
  margin-bottom: 20px;      /* Ajoute un peu d'espace sous la barre de navigation */
  display: flex;
  gap: 30px;                /* Espace entre les liens */
}

.nav-link {
  font-size: 18px;          /* Taille de la police */
  font-weight: bold;        /* Met les liens en gras */
  color: #3498db;           /* Couleur bleue */
  text-decoration: none;    /* Enlève le soulignement */
  padding: 10px 20px;       /* Espace autour des liens */
  border-radius: 5px;       /* Bord arrondi */
  transition: background-color 0.3s ease; /* Transition douce au survol */
}

.nav-link:hover {
  background-color: #2980b9; /* Change la couleur de fond au survol */
  color: white;              /* Change la couleur du texte */
}

/* Stylisation du texte principal */
.content h1 {
  font-size: 48px;           /* Taille plus grande pour "Accueil" */
  font-weight: bold;
  color: #2c3e50;            /* Couleur grise foncée */
  margin-top: 20px;          /* Ajoute un peu d'espace en haut */
}

/* Pour rendre la page encore plus jolie sur mobile */
@media (max-width: 600px) {
  .content h1 {
    font-size: 36px;          /* Taille plus petite sur mobile */
  }
  .nav-link {
    font-size: 16px;          /* Taille de police réduite sur mobile */
  }
}
</style>


