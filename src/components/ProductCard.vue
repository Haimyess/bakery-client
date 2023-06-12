<!-- @format -->

<script setup lang="ts">
import { ref, computed } from "vue";
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
  _cakeId: string;
  cakeName: string;
  //   ingridients: Ingridients;
  cakePrice: number;
  //   images: Images;
  cakeDescription: string;
  cakeQuantity?: number | undefined;
}

const props = defineProps<Cake>();

console.log(props.cakeName);

// Check this later

const product: Cake = {
  _cakeId: props._cakeId,
  cakeName: props.cakeName,
  cakeDescription: props.cakeDescription,
  cakePrice: props.cakePrice,
};

console.log(props._cakeId);

const isClicked = ref(false);
function changeState() {
  isClicked.value = !isClicked.value;
}

// cartStore.addToCart()

// function addToCart(product: Cake) {
//   const exist = cartStore.cart.find((item) => item.cakeId === product.cakeId);

//   if (exist) {
//     exist.cakeQuantity++;
//   } else {
//     cartStore.cart.push({ ...product, cakeQuantity: 1 });
//   }

//   localStorage.setItem("cart", JSON.stringify(cartStore.cart));
// }

const deleteSpaces = computed(() => {
  const slug = props.cakeName;
  return slug.replaceAll(" ", "-");
});
</script>

<template>
  <div>
    <p>{{ props._cakeId }}</p>
    <h2>{{ props.cakeName }}</h2>
    <p>{{ props.cakeDescription }}</p>
    <p>{{ props.cakePrice }}</p>

    <!-- --------------------------------------------------------- -->
    <!-- ----------Add design and change it when clicked---------- -->
    <!-- --------------------------------------------------------- -->
    <TheButton @click="cartStore.addToCart(product)" :state="isClicked"
      >Add to cart</TheButton
    >

    <RouterLink :to="`/products/${props._cakeId}`">View more..</RouterLink>
    <!-- <RouterLink :to="`/products/${props._cakeId}`">View more..</RouterLink> -->
  </div>
</template>

<style scoped></style>
