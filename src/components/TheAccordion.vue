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
  <div class="accordion">
    <!-- up -->
    <div @click="toggleExpansion" class="question-wrapper">
      <!-- Question -->
      <span>{{ props.question }}</span>
      <!-- Arrow -->
      <span>arrow</span>
    </div>

    <!-- Text appering -->
    <div :class="isClicked ? 'open' : ''" class="closed">
      {{ props.answer }}
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid #000000;
}
.question-wrapper {
  padding: 0.7rem;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
}
.closed {
  visibility: hidden;
  height: 0;
  opacity: 0;
  padding: 0 1rem;

  transition: 0.3s ease-out;
}

.open {
  visibility: visible;
  height: max-content;
  opacity: 1;
}
</style>
