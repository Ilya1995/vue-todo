<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        :todo="todo"
        :index="i"
        :key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
