<!-- @format -->

<script setup lang="ts">
// import TheAccordion from "@/components/TheAccordion.vue";

import { ref } from "vue";

const questions = ref([
  {
    id: 1,
    questionTitle: "Are you Kosher?",
    answer:
      "At the moment unfortunatly we don't have any licence from the rabanut",
  },
  {
    id: 2,
    questionTitle: "Do you have shipping?",
    answer:
      "Sadly, we dont. But we are pretty close to you. We are working to be able to deliver right to your door as soon as possible.",
  },
  {
    id: 3,
    questionTitle: "What are you working hours",
    answer: "Sundays to thursdays, from 9 am to 6 pm",
  },
]);
</script>

<template>
  <div class="faq">
    <!-- <template v-for="question of questions" :key="question.id"> -->
    <!-- :question="question.questionTitle" :answer="question.answer" -->

    <!-- <TheAccordion -->
    <v-expansion-panels>
      <v-expansion-panel
        v-for="question of questions"
        :key="question.id"
        title="question.questionTitle"
        text="question.answer"
      ></v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
</style>
