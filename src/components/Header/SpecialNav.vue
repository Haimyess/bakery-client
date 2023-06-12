<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";

import GoBack from "../GoBack.vue";

interface Header {
  title: string;
  isCart: string;
  data?: string | number;
}
const props = defineProps<Header>();
</script>

<template>
  <div class="navigation">
    <GoBack />
    <!-- <v-btn>Hi</v-btn> -->

    <div>
      <h4>{{ props.title }}</h4>
      <span v-if="props.isCart">{{ props.data }} items</span>
    </div>
  </div>
</template>

<style scope>
.navigation {
  position: fixed;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
}
</style>
