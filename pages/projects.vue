<template>
  <div>
    <h1 class=" text-3xl text-white my-4 mx-4">Projects</h1>
    <div class="flex flex-wrap justify-center">
      <Project
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.getters["projects/getProjects"];
    }
  }
};
</script>
