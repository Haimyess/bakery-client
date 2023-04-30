<!-- @format -->
<script lang="ts" setup>
import ProductCard from "./ProductCard.vue";

import { ref } from "vue";

// interface
const cakes = ref([
  {
    id: 1,
    name: "Torta de tres leches",
    // ingridients: ["Manjar"],
    price: 250,
    // images: ["first image"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe! Itaque,accusantium dolores fuga omnis ratione magni amet dolore aperiam accusamus namillo blanditiis sequi esse repellendus, magnam placeat voluptate aspernatur etea. Corrupti voluptate aspernatur illo molestiae, repellendus providentdeserunt mollitia eveniet facere a vitae dolor, laboriosam qui repudiandae.",
  },
]);
</script>
<template>
  <div>
    <h1>Products</h1>

    <section>
      <div v-for="cake in cakes" :key="cake.id">
        <ProductCard :cake="cake" />
      </div>
    </section>
  </div>
</template>

<style></style>
