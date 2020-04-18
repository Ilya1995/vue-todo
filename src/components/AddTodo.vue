<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model.lazy.trim="title" v-focus />
    <button type="submit">Create</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: '',
    };
  },
  directives: {
    focus: {
      update: function(el) {
        el.focus();
      },
    },
  },
  methods: {
    ...mapMutations(['addTodo', 'toggleFlag']),
    onSubmit() {
      if (this.title) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.addTodo(newTodo);
        this.title = '';
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  width: 400px;
}
</style>
