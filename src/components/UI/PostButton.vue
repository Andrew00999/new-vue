<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'post-button'
};
</script>

<style lang="scss" scoped>
.btn {
  border: 2px solid rgb(13, 109, 187);
  padding: 0.25rem 0.75rem;
  background-color: transparent;
  cursor: pointer;
  transition: .3s ease;
  font-size: 1rem;
  &:hover {
    background-color: rgb(13, 109, 187);
    color: #fff;
  }
}
</style>