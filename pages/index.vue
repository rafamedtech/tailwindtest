<template>
  <div>
    <AppHero />
  </div>
</template>

<script>
import AppHero from "@/components/AppHero";

export default {
  head() {
    return {
      title: "Rafamed | Welcome to my Website 👨‍💻",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "This is my porfolio website"
        }
      ]
    };
  },
  components: AppHero
};
</script>
