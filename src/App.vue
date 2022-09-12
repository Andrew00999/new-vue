<template>
  <nav-bar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
*,
*::after,
*::before,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1rem;
}
.app {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>