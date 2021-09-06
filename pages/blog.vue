<template>
  <div class=" flex flex-col items-center">
    <h1 class=" m-4 text-6xl text-[#00ACBF]">Blog</h1>
    <div class="grid grid-cols-3 gap-4 m-8 h-auto">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Rafamed | Blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is my porfolio website"
        }
      ],
      htmlAttrs: {
        lang: "en"
      }
    };
  },

  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
    }
  }
};
</script>
