<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr />
    <AddTodo />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr />
    <transition name="fade" mode="out-in">
      <Loader v-if="loading" />
      <TodoList v-else-if="filteredTodos.length" :todos="filteredTodos" />
      <p v-else>No todos!</p>
    </transition>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import Loader from '@/components/Loader';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
      filter: 'all',
    };
  },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters(['allTodos', 'loading']),
    filteredTodos() {
      switch (this.filter) {
        case 'completed':
          return this.allTodos.filter((todo) => todo.completed);
        case 'not-completed':
          return this.allTodos.filter((todo) => !todo.completed);
        default:
          return this.allTodos;
      }
    },
  },
  methods: mapActions(['fetchTodos']),
  components: {
    AddTodo,
    TodoList,
    Loader,
  },
};
</script>

<style scoped>
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
