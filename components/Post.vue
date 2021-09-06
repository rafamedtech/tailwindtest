<template>
  <div
    class=" mb-16 mx-4 w-full h-60 flex flex-col justify-center p-4 shadow-myShadow rounded-xl relative"
  >
    <img
      class="w-full inset-0 rounded-xl filter brightness-75 object-cover absolute z-[-1]"
      src="https://images.unsplash.com/photo-1630576904866-d51b579796f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=778&q=80"
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
