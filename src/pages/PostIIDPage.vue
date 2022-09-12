<template>
  <div>
    <h1>Page with dynamic id: {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2rem;
}
</style>