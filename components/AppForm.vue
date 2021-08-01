<template>
  <div class="flex flex-col lg:flex-row items-center justify-around">
    <div class="flex flex-col-reverse lg:flex-col items-center justify-center">
      <h1 class="mt-4 ml-4 text-white text-4xl">
        Let's start working together 🚀
      </h1>
      <img class=" w-96 h-96" src="~assets/images/deal.svg" alt="" />
    </div>

    <div class=" bg-transparent w-96 h-[85vh] flex justify-center items-center">
      <form
        class=" h-[80%] w-full border border-portfolio-primary flex flex-col justify-evenly px-8 my-4 rounded-xl shadow-2xl"
        action=""
      >
        <label class="text-portfolio text-white" for="name">Name</label>
        <input
          class=" focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4"
          type="text"
          id="name"
        />

        <label class="text-white" for="email">Email</label>
        <input
          class=" focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4"
          type="email"
          name="email"
          id="email"
        />

        <label class="text-white" for="message">Message</label>
        <textarea
          class=" focus:border-portfolio-primary focus:ring-1 focus:ring-portfolio-primary focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 px-4"
          name="message"
          id="message"
          cols="30"
          rows="5"
        ></textarea>

        <input
          class="mt-4 w-24 rounded-lg h-10 bg-portfolio-primary text-white hover:bg-white hover:text-portfolio-primary hover:scale-125 cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppForm"
};
</script>
