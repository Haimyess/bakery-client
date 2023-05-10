<!-- @format -->

<script setup lang="ts">
import TheButton from "./TheButton.vue";
// interface Ingridients {
//   ingriedients: string[];
// }

// interface Images {
//   images: string[];
// }

import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();

// console.log(cartStore.addToCart());

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

function changeState() {}

// function addToCart(product: Cake) {
//   const exist = cartStore.cart.find((item) => item.cakeId === product.cakeId);

//   if (exist) {
//     exist.cakeQuantity++;
//   } else {
//     cartStore.cart.push({ ...product, cakeQuantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cartStore.cart));
// }
</script>

<template>
  <div>
    <h2>{{ props.cakeName }}</h2>
    <p>{{ props.cakeDescription }}</p>
    <p>{{ props.cakePrice }}</p>

    <!-- --------------------------------------------------------- -->
    <!-- ----------Add design and change it when clicked---------- -->
    <!-- --------------------------------------------------------- -->
    <TheButton
      @click="
        cartStore.addToCart({
          cakeId,
          cakeName,
          cakeDescription,
          cakePrice,
          cakeQuantity,
        }),
          changeState()
      "
      >Add to cart</TheButton
    >
    <!-- <button
      @click="
        cartStore.addToCart({
          cakeId,
          cakeName,
          cakeDescription,
          cakePrice,
          cakeQuantity,
        })
      "
    >
      Add to cart
    </button> -->
  </div>
</template>

<style scoped></style>
