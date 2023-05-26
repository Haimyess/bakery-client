<!-- @format -->

<script setup lang="ts">
interface Title {
  text: string;
}

const props = defineProps<Title>();
</script>

<template>
  <h3 class="section-title">{{ props.text }}</h3>
</template>

<style scoped>
.section-title {
  /* border: 1px solid red; */
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
