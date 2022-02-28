<template>
  <div class="container mt-5">
    <div class="input-group mb-3">
      <input
        v-model="inputValue"
        type="text"
        class="form-control"
        placeholder="Search in table by title"
      />
      <div class="input-group-append">
        <button
          @click="filterPosts"
          class="btn btn-dark btn-outline-secondary"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      inputValue: "",
    };
  },
  methods: {
    filterPosts() {
      this.$emit("filter-posts", this.inputValue);
    },
  },
};
</script>
