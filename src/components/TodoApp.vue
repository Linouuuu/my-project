<template>
    <div class="todo-app">
      <h1>Liste de tâches</h1>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Nouvelle tâche" />
      <button @click="addTask">Ajouter</button>
      <TodoList :tasks="tasks" @remove="removeTask" />
      <button @click="clearCompleted">Effacer les tâches terminées</button>
      <button @click="clearAllTasks">Supprimer toutes les tâches</button>
    </div>
  </template>
  
  <script>
  import TodoList from './components/TodoList.vue';
  
  export default {
    name: 'TodoApp',
    components: {
      TodoList,
    },
    data() {
      return {
        newTask: '',
        tasks: [
          { id: 1, text: 'Acheter du pain', completed: false },
          { id: 2, text: 'Terminer le projet Vue.js', completed: true },
          { id: 3, text: 'Répondre aux emails', completed: false },
        ],
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({
            id: Date.now(),
            text: this.newTask,
            completed: false,
          });
          this.newTask = '';
        }
      },
      removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
      },
      clearCompleted() {
        this.tasks = this.tasks.filter((task) => !task.completed);
      },
      clearAllTasks() {
        if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches ?')) {
          this.tasks = [];
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .todo-app {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  input {
    padding: 10px;
    margin: 10px;
  }
  
  button {
    padding: 10px;
    margin: 10px;
  }
  </style>
  
  

  