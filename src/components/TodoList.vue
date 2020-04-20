<template>
  <div>
    <b-list-group>
      <transition-group name="list-complete">
        <TodoItem
          v-for="(todo, i) of todos"
          :todo="todo"
          :index="i"
          :key="todo.id"
          class="list-complete-item"
        />
      </transition-group>
    </b-list-group>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>

<style scoped>
.list-complete-item {
  transition: all 0.3s;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
