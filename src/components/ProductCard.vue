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
  cakeQuantity?: number | undefined;
}

const props = defineProps<Cake>();

console.log(props.cakeName);

function addToCart(product: Cake) {
  console.log(product);
  console.log("added to cart");

  //   If exists we add quantity++
  // if doesnt exist we add quantity of 1
  //   add to local storage

  //   const exist = cartStore.cart.includes(product.cakeId);
  const exist = cartStore.cart.find((item) => item.cakeId === product.cakeId);
  console.log(exist);

  !exist
    ? (product.cakeQuantity = 1 && cartStore.cart.push(product))
    : (exist.cakeQuantity += 1);

  console.log(cartStore.cart);
}
</script>

<template>
  <div>
    <h2>{{ props.cakeName }}</h2>
    <p>{{ props.cakeDescription }}</p>
    <p>{{ props.cakePrice }}</p>
    <button
      @click="addToCart({ cakeId, cakePrice, cakeDescription, cakeName })"
    >
      Add to cart
    </button>
  </div>
</template>

<style scoped></style>
