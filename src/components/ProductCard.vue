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
  _id: string;
  name: string;
  //   ingridients: Ingridients;
  price: number;
  //   images: Images;
  description: string;
  quantity?: number | undefined;
}

const props = defineProps<Cake>();

console.log(props.name);

// Check this later

const product: Cake = {
  _id: props._id,
  name: props.name,
  description: props.description,
  price: props.price,
};

console.log(props._id);

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
  const slug = props.name;
  return slug.replaceAll(" ", "-");
});
</script>

<template>
  <div>
    <p>{{ props._id }}</p>
    <h2>{{ props.name }}</h2>
    <p>{{ props.description }}</p>
    <p>{{ props.price }}</p>

    <!-- --------------------------------------------------------- -->
    <!-- ----------Add design and change it when clicked---------- -->
    <!-- --------------------------------------------------------- -->
    <TheButton @click="cartStore.addToCart(product)" :state="isClicked"
      >Add to cart</TheButton
    >

    <RouterLink :to="`/products/${props._id}`">View more..</RouterLink>
    <!-- <RouterLink :to="`/products/${props._cakeId}`">View more..</RouterLink> -->
  </div>
</template>

<style scoped></style>
