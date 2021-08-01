<template>
  <div class=" flex flex-col items-center">
    <h1 class=" m-4 text-6xl text-[#00ACBF]">Blog</h1>
    <div
      class=" mb-16 mx-4 w-1/2 h-60 flex flex-col bg-[#ccc] justify-center p-4 shadow-2xl rounded-xl"
      v-for="post in posts"
      :key="post.id"
    >
      <h1 class=" text-xl font-bold text-[#ccc]">{{ post.title }}</h1>
      <p class=" mb-4 text-[#ccc]">{{ post.body }}</p>

      <nuxt-link class=" font-bold underline text-[#00ACBF]" to="/blog"
        >Leer mas</nuxt-link
      >
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
