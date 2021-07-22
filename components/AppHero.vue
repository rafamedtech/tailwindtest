<template>
  <section class=" flex justify-around items-center bg-gray-200">
    <div class=" ">
      <h1 class="text-6xl my-4 text-gray-200">I'm Rafael Valenzuela</h1>
      <p class="text-3xl my-4 text-blue-400">FullStack Web Developer</p>
    </div>
    <div class=" w-64 shadow-xl">
      <img class="rounded-lg " src="~/assets/gh.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "AppHero"
};
</script>

<style>
section {
  height: 85vh;
}
</style>
