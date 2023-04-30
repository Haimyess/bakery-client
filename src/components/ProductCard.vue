<!-- @format -->

<script setup lang="ts">
// interface Ingridients {
//   ingriedients: string[];
// }

// interface Images {
//   images: string[];
// }

interface Cake {
  id: number;
  name: string;
  //   ingridients: Ingridients;
  price: number;
  //   images: Images;
  description: string;
}

const props = defineProps<Cake>();

function addToCart() {
  console.log("added to cart");
}
</script>

<template>
  <div>
    <h2>{{ props.name }}</h2>
    <p>{{ props.description }}</p>
    <p>{{ props.price }}</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<style scoped></style>
