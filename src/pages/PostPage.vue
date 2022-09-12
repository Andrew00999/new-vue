<template>
  <div>
    <div>
      <post-button @click="showModal" style="margin: 1rem 1rem 1rem 0">
        Add users
      </post-button>
      <post-select :options="sortOptions" v-model="selectedSort" />
      <post-input
        style="margin-bottom: 1rem"
        v-model="searchQuery"
        placeholder="Search..."
      />
    </div>
    <modal-window v-model:show="modalVisible">
      <post-form @create="createPost" @close="closeModal" />
    </modal-window>
    <post-list
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading"
    />
    <h1 v-else>Loading...</h1>
    <div ref="observer" class="observer"></div>
    <!-- Pagination buttons -->
    <!-- <div class="page_wrapper">
        <div 
          v-for="pageItem in totalPages" 
          :key="pageItem"
          @click="changePage(pageItem)"
          class="page"
          :class="{
            'current_page': page === pageItem
          }"
        >
          {{ pageItem }}
        </div>
      </div> -->
  </div>
</template>
  
  <script>
import PostForm from "../components/PostForm.vue";
import PostList from "../components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "Title sort" },
        { value: "body", name: "Body sort" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.unshift(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    async fetchUsers() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Error");
      }
    },
    // changePage(pageItem) {
    //   this.page = pageItem;
    // }
  },
  mounted() {
    this.fetchUsers();
    console.log(this.$refs.observer);
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchUsers();
    // }
  },
};
</script>
  
  <style lang="scss">
.page_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
}
.page {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 2px solid green;
}
.current_page {
  background-color: green;
  color: #fff;
}
.observer {
  height: 1px;
  visibility: hidden;
  opacity: 0;
}
</style>