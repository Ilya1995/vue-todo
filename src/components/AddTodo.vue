<template>
  <b-form @submit.prevent="onSubmit" class="w-50 mx-auto">
    <b-input-group>
      <b-input type="text" v-model.lazy.trim="title" />
      <b-input-group-append>
        <b-button type="submit">Create</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapMutations(["addTodo", "toggleFlag"]),
    onSubmit() {
      if (this.title) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };
        this.addTodo(newTodo);
        this.title = "";
      }
    }
  }
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
