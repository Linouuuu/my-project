<template>
    <ul>
      <TodoItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @remove="$emit('remove', task.id)"
      />
    </ul>
  </template>
  
  <script>
  import TodoItem from './TodoItem.vue';
  
  export default {
    name: 'TodoList',
    components: {
      TodoItem,
    },
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
      
  