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
      title: "Rafamed | Welcome to my portfolio 👨‍💻",
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
  components: AppHero

  // computed: {
  //   counter() {
  //     return this.$store.getters["counter"];
  //   }
  // },

  // methods: {
  //   llamarASumarDos() {
  //     this.$store.dispatch("sumarDos");
  //   }
  // }
};
</script>
