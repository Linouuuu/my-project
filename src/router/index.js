import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';  // Remplacez par le bon chemin vers votre fichier Home.vue
import TodoApp from '../components/TodoApp.vue';  // Vous pouvez remplacer par votre composant TodoApp si c'est le cas

const routes = [
  { path: '/', component: Home },  // Page d'accueil
  { path: '/todo', component: TodoApp },  // Page pour la To-Do List, vous pouvez la remplacer par un autre composant si nécessaire
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

