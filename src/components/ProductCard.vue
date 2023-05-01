<!-- @format -->

<script setup lang="ts">
// interface Ingridients {
//   ingriedients: string[];
// }

// interface Images {
//   images: string[];
// }

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

console.log(cartStore.cart);

interface Cake {
  cakeId: number;
  cakeName: string;
  //   ingridients: Ingridients;
  cakePrice: number;
  //   images: Images;
  cakeDescription: string;
}

const props = defineProps<Cake>();

console.log(props.cakeName);

function addToCart(productId: number) {
  console.log(productId);
  console.log("added to cart");

  cartStore.cart.push(productId);
}
</script>

<template>
  <div>
    <h2>{{ props.cakeName }}</h2>
    <p>{{ props.cakeDescription }}</p>
    <p>{{ props.cakePrice }}</p>
    <button @click="addToCart(props.cakeId)">Add to cart</button>
  </div>
</template>

<style scoped></style>
