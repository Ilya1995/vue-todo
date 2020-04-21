export default {
  actions: {
    async fetchTodos({ commit }, page = 1, limit = 5) {
      try {
        commit('setLoading', true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
        );
        const todos = await res.json();
        commit('updateTodos', todos);
      } catch (error) {
        console.log(error);
      } finally {
        commit('setLoading', false);
      }
    },
  },
  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    removeTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    toggleTodo(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
  },
  state: {
    todos: [],
    loading: true,
  },
  getters: {
    allTodos(state) {
      return state.todos;
    },
    loading(state) {
      return state.loading;
    },
  },
};
