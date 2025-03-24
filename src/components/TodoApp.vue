<script setup>
import { ref, reactive, computed } from 'vue';
import TodoList from './TodoList.vue';

// État réactif pour la nouvelle tâche
const newTask = ref('');

// État réactif pour la liste des tâches
const tasks = reactive([
  { id: 1, text: 'Acheter du pain', completed: false },
  { id: 2, text: 'Terminer le projet Vue.js', completed: true },
  { id: 3, text: 'Répondre aux emails', completed: false },
]);

// Propriété calculée pour filtrer les tâches terminées
const completedTasks = computed(() => tasks.filter(task => task.completed));

// Méthode pour ajouter une nouvelle tâche
function addTask() {
  if (newTask.value.trim()) {
    tasks.push({
      id: Date.now(),
      text: newTask.value,
      completed: false,
    });
    newTask.value = '';
  }
}

// Méthode pour supprimer une tâche spécifique
function removeTask(taskId) {
  const index = tasks.findIndex(task => task.id === taskId);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

// Méthode pour effacer les tâches terminées
function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
}

// Méthode pour supprimer toutes les tâches
function clearAllTasks() {
  if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches ?')) {
    tasks.splice(0, tasks.length);
  }
}
import { useTaskStore } from '../stores/useTaskStore';

const taskStore = useTaskStore();
</script>

<template>
  <div class="todo-app">
    <h1>Liste de tâches</h1>
    <input v-model="taskStore.newTask" @keyup.enter="taskStore.addTask" placeholder="Nouvelle tâche" />
    <button @click="taskStore.addTask">Ajouter</button>
    <TodoList :tasks="taskStore.tasks" @remove="taskStore.removeTask" />
    <button @click="taskStore.clearCompleted">Effacer les tâches terminées</button>
    <button @click="taskStore.clearAllTasks">Supprimer toutes les tâches</button>
  </div>
</template>

  
  

  