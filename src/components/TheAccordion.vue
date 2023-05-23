<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";
interface Accordion {
  question: String;
  answer: String;
}

const isClicked = ref(false);

const props = defineProps<Accordion>();

function toggleExpansion() {
  isClicked.value = !isClicked.value;
}
</script>

<template>
  <div>
    <!-- up -->
    <div @click="toggleExpansion" class="question-wrapper">
      <!-- Question -->
      <span>{{ props.question }}</span>
      <!-- Arrow -->
      <span>arrow</span>
    </div>

    <!-- Text appering -->
    <div :class="[isClicked ? 'open' : 'closed']">
      {{ props.answer }}
    </div>
  </div>
</template>

<style scoped>
.question-wrapper {
  border: 1px solid #000000;
  padding: 1rem;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
}
.closed {
  display: none;
}
/* .closed > p {
  height: 0;
  border: 1px solid red;
  transition: 0.3s ease-in-out;
} */
.open {
  display: block;
  /* max-height: 100%; */
}
</style>
