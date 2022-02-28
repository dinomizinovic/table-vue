<template>
  <searchBox @filter-posts="filteredPosts" />
  <tablePrint :posts="posts" />
</template>

<script>
import axios from "axios";
import tablePrint from "./TablePrint.vue";
import searchBox from "./SearchBox.vue";

export default {
  components: {
    tablePrint,
    searchBox,
  },
  data: function () {
    return {
      posts: [],
      iniPosts: [],
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.posts = res.data;
      this.iniPosts = res.data;
    });
  },
  methods: {
    filteredPosts(inpV) {
      if (inpV === "") {
        this.posts = this.iniPosts;
      } else {
        this.posts = this.posts.filter((post) => post.title.includes(inpV));
      }
    },
  },
};
</script>
