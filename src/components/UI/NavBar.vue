<template>
  <div class="top_bar">
    <div class="top_bar_wrapper">
        <div><router-link class="top_bar_link" to="/">Main page</router-link></div>
        <div><router-link class="top_bar_link" to="/posts">Posts page</router-link></div>
        <div><router-link class="top_bar_link" to="/about">About page</router-link></div>
        <!-- <post-button @click="$router.push('/')">Main page</post-button>
        <post-button @click="$router.push('/posts')">Posts page</post-button>
        <post-button @click="$router.push('/about')">About page</post-button> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'nav-bar'
};
</script>

<style lang="scss" scoped>
.top_bar {
    background-color: rgb(79, 165, 235);
    color: #fff;
    .top_bar_wrapper {
        width: 80%;
        height: auto;
        margin: 0 auto;
        display: flex;
        column-gap: 2rem;
        padding: 1rem 0;
    }
}
.top_bar_link {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    &:hover {
        text-decoration: underline;
    }
}
</style>