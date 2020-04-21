<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <b-checkbox
      @change="toggleTodo(todo.id)"
      :checked="todo.completed"
      class="mr-3"
      :class="{ done: todo.completed }"
    >
      <strong>{{ todo.id }}</strong>
      {{ todo.title | uppercase }}
    </b-checkbox>

    <div style="font-size: 2rem; cursor: pointer">
      <b-icon
        @click="removeTodo(todo.id)"
        icon="trash-fill"
        variant="light"
        class="rounded-circle bg-danger p-2"
      />
    </div>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  methods: mapMutations(["removeTodo", "toggleTodo"])
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
