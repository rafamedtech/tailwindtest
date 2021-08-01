<template>
  <header class="flex  justify-between shadow-md ">
    <nuxt-link to="/" class=" h-full flex items-center ml-5">
      <img class=" w-32" src="~assets/images/logo.png" alt="" />
    </nuxt-link>
    <nav class="my-auto mr-5">
      <ul class="flex items-center text-white">
        <nuxt-link class="mx-2" to="/blog">Blog</nuxt-link>
        <nuxt-link class="mx-2" to="/about">About</nuxt-link>
        <nuxt-link class="mx-2" to="/contact">Contact</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
header {
  height: 15vh;
  border-bottom: 1px solid #fff;
}
</style>
