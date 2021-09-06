<template>
  <div class="m-4 shadow-2xl">
    <p
      class=" text-portfolio-primary border border-portfolio-primary rounded-xl px-2 py-1"
    >
      {{ tag.name }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    tag: Object
  }
};
</script>
