<!-- @format -->

<script setup lang="ts">
import { ref } from "vue";

import GoBack from "../GoBack.vue";

interface Header {
  title: string;
  isCart: boolean;
  data?: string | number;
}
const props = defineProps<Header>();
</script>

<template>
  <div :class="[props.isCart ? 'cart' : 'navigation']">
    <GoBack />
    <!-- <v-btn>Hi</v-btn> -->

    <div class="cart-center">
      <h4>{{ props.title }}</h4>
      <!-- fix plural or singular of the word items depending on how many there are in the cart. -->
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
.cart {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  width: 100%;
  /* justify-content: center; */
}

.cart-center {
  /* border: 1px solid green; */
  align-self: center;
}

.cart-center > * {
  margin: 0;
  padding: 0;
  display: block;
  text-align: center;
}
</style>
