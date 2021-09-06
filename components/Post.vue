<template>
  <div
    class=" h-60 w-full flex flex-col justify-center p-4 shadow-myShadow rounded-xl relative"
  >
    <img
      class="w-full h-full inset-0 rounded-xl filter brightness-[0.40] object-cover absolute z-[-1]"
      :src="post.image"
      alt=""
    />
    <h1 class=" text-xl font-bold text-portfolio-primary">{{ post.title }}</h1>
    <p class=" mb-4 text-[#ccc]">{{ post.body }}</p>

    <!-- <nuxt-link class=" font-bold underline text-[#00ACBF]" to="/blog"
      >Leer mas</nuxt-link
    > -->
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
};
</script>
