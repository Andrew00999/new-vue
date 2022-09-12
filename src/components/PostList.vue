<template>
  <div v-if="posts.length">
    <h3>Users list</h3>
    <transition-group name="post-list">
      <post-item
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else class="wrong_text">Users list empty!</h2>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrong_text {
  text-align: center;
  color: red;
  font-size: 3rem;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all .3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>