<template>
    <li :class="{ completed: task.completed }">
      <input type="checkbox" v-model="task.completed" />
      <span>{{ task.text }}</span>
      <button @click="$emit('remove')">Supprimer</button>
    </li>
  </template>
  
  <script>
  export default {
    name: 'TodoItem',
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  
  