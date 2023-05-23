<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";
interface Accordion {
  question: String;
  answer: String;
}

const isClicked = ref(false);

const props = defineProps<Accordion>();
</script>

<template>
  <div>
    <!-- up -->
    <div>
      <!-- Question -->
      <span>{{ props.question }}</span>
      <!-- Arrow -->
      <span>arrow</span>
    </div>

    <!-- Text appering -->
    <div :class="{ open: isClicked }">
      <p>{{ props.answer }}</p>
    </div>
  </div>
</template>

<style scoped>
/* .open {
} */
</style>
