<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) of todos"
        :todo="todo"
        :index="i"
        @remove-todo="removeTodo"
        @toggle-todo="toggleTodo"
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
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
    toggleTodo(id) {
      this.$emit('toggle-todo', id);
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
