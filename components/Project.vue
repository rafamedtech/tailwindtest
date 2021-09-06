<template>
  <div class=" w-96 h-full  m-4 rounded-xl shadow-myShadow ">
    <figure class="h-2/3 w-full">
      <img
        :src="project.featured_image"
        class="w-full h-full object-cover object-center-top rounded-t-xl"
        alt=""
      />
    </figure>
    <div class="flex flex-col justify-center items-center h-auto">
      <h2
        class="text-white text-center mt-2 border-b-2 border-portfolio-primary"
      >
        {{ project.title }}
      </h2>
      <div class=" h-24 flex justify-center items-center text-white mt-4">
        <p class="text-white my-4 p-4">{{ project.description }}</p>
        <a
          :href="project.source_link"
          target="_blank"
          class=" bg-portfolio-primary mx-4 rounded-xl px-4 py-1 shadow-2xl text-sm text-center"
          >Source 💻</a
        >
        <a
          class=" bg-portfolio-primary mx-4 rounded-xl px-6 py-1 shadow-2xl text-sm text-center"
          :href="project.demo_link"
          target="_blank"
          >Live 🚀</a
        >
      </div>
      <div class="flex mb-4">
        <Tag v-for="tag in project.tags" :key="tag.id" :tag="tag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  }
};
</script>
