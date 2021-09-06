<template>
  <div class="flex justify-evenly">
    <div class="flex lg:flex-col items-center justify-center">
      <h1 class="mt-4 ml-4 text-white text-4xl">
        Let's start working together 🚀
      </h1>
      <img class=" w-96 h-96" src="~assets/images/deal.svg" alt="" />
    </div>
    <AppForm />
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";
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
      ],
      htmlAttrs: {
        lang: "en"
      }
    };
  },
  components: {
    AppForm
  }
};
</script>
