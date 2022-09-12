<template>
  <div class="post">
    <div>
      <div>
        {{ post.id }}.<strong style="margin-left: 0.5rem">Name: </strong>
        {{ post.title }}
      </div>
      <div><strong>Surname: </strong>{{ post.body }}</div>
    </div>
    <div class="post_btns">
      <post-button @click="$router.push(`/posts/${post.id}`)">Change</post-button>
      <post-button @click="$emit('remove', post)">Delete</post-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  padding: 1rem 2rem;
  border: 2px solid rgb(13, 109, 187);
  border-radius: 0.25rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post_btns {
  display: flex;
  column-gap: .5rem;
}
</style>