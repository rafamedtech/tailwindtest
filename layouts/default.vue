<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/AppHeader";

export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
