<template>
  <form @submit.prevent class="form">
    <div class="modal_title">
      <h3>Add users</h3>
      <span @click="$emit('close')">&times;</span>
    </div>

    <post-input
      style="margin-top: 1rem"
      v-model="post.title"
      type="text"
      placeholder="Name"
    />
    <post-input
      style="margin-top: 1rem"
      v-model="post.body"
      type="text"
      placeholder="Surname"
    />
    <post-button
      style="align-self: flex-end; margin-top: 1rem"
      @click="createPost"
    >
      Create Post
    </post-button>
  </form>
</template>

<script>
import PostInput from "./UI/PostInput.vue";

export default {
  components: {
    PostInput,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      // Callback to parent
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
}
.modal_title {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  span {
    cursor: pointer;
    font-size: 2.5rem;
    line-height: 0;
  }
}
</style>