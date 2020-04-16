<template>
  <li>
    <span :class="{ done: todo.completed }">
      <input
        type="checkbox"
        @change="toggleTodo(todo.id)"
        :checked="todo.completed"
      />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="rm" @click="removeTodo(todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
  methods: mapMutations(['removeTodo', 'toggleTodo']),
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>
