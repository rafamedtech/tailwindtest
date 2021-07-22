<template>
  <div>
    <h1 class=" m-4 text-6xl">Blog</h1>
    <div
      class=" mb-4 mx-4 w-1/2 border border-red-800 p-4 shadow-lg rounded-xl"
      v-for="post in posts"
      :key="post.id"
    >
      <h1 class=" text-xl font-bold">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  //   created() {
  //     this.$store.dispatch("posts/loadPosts");
  //   },

  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
    }
  }
};
</script>
