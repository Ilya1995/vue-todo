<template>
  <div class="my-5">
    <h2>Todo application</h2>
    <router-link to="/">
      <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true" />Home
    </router-link>
    <hr />
    <AddTodo />
    <b-form-select v-model="filter" class="my-3 w-25">
      <b-form-select-option value="all">All</b-form-select-option>
      <b-form-select-option value="completed">Completed</b-form-select-option>
      <b-form-select-option value="not-completed">Not completed</b-form-select-option>
    </b-form-select>
    <hr />
    <transition name="fade" mode="out-in">
      <Loader v-if="loading" />
      <div v-else-if="filteredTodos.length">
        <TodoList :todos="filteredTodos" />
        <b-pagination
          :value="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @change="changePage"
          align="fill"
          class="mt-3"
        ></b-pagination>
      </div>
      <p v-else>No todos!</p>
    </transition>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      filter: "all",
      rows: 30,
      perPage: 1,
      currentPage: 1
    };
  },
  mounted() {
    this.fetchTodos();
  },
  computed: {
    ...mapGetters(["allTodos", "loading"]),
    filteredTodos() {
      switch (this.filter) {
        case "completed":
          return this.allTodos.filter(todo => todo.completed);
        case "not-completed":
          return this.allTodos.filter(todo => !todo.completed);
        default:
          return this.allTodos;
      }
    }
  },
  methods: {
    ...mapActions(["fetchTodos"]),
    changePage(page) {
      this.fetchTodos(page);
      this.currentPage = page;
    }
  },
  components: {
    AddTodo,
    TodoList,
    Loader
  }
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
