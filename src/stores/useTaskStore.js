import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref([
    { id: 1, text: 'Acheter du pain', completed: false },
    { id: 2, text: 'Terminer le projet Vue.js', completed: true },
    { id: 3, text: 'Répondre aux emails', completed: false },
  ]);

  const newTask = ref('');

  const completedTasks = computed(() => tasks.value.filter(task => task.completed));

  function addTask() {
    if (newTask.value.trim()) {
      tasks.value.push({
        id: Date.now(),
        text: newTask.value,
        completed: false,
      });
      newTask.value = '';
    }
  }

  function removeTask(taskId) {
    tasks.value = tasks.value.filter(task => task.id !== taskId);
  }

  function clearCompleted() {
    tasks.value = tasks.value.filter(task => !task.completed);
  }

  function clearAllTasks() {
    if (confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches ?')) {
      tasks.value = [];
    }
  }

  return {
    tasks,
    newTask,
    completedTasks,
    addTask,
    removeTask,
    clearCompleted,
    clearAllTasks,
  };
});
