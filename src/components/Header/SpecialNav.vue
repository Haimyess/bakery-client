<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";

import GoBack from "../GoBack.vue";

interface Header {
  title: string;
  isCart: boolean;
  data: string | number;
}
const props = defineProps<Header>();
</script>

<template>
  <div class="cart-top">
    <GoBack />
    <!-- <v-btn>Hi</v-btn> -->

    <div>
      <h4>{{ props.title }}</h4>
      <span v-if="props.isCart">{{ props.data }} items</span>
    </div>
  </div>
</template>
