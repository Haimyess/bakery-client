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
    // quantity: 1,
  },
  {
    id: 2,
    name: "Torta panqueque manjar nuez ",
    // ingridients: ["Manjar"],
    price: 300,
    // images: ["first image"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, saepe! Itaque,accusantium dolores fuga omnis ratione magni amet dolore aperiam accusamus namillo blanditiis sequi esse repellendus, magnam placeat voluptate aspernatur etea. Corrupti voluptate aspernatur illo molestiae, repellendus providentdeserunt mollitia eveniet facere a vitae dolor, laboriosam qui repudiandae.",
    // quantity: 1,
  },
]);
</script>
<template>
  <div>
    <h1>Products</h1>

    <section>
      <div>
        <ProductCard
          v-for="cake in cakes"
          :key="cake.id"
          :cakeId="cake.id"
          :cakeDescription="cake.description"
          :cakePrice="cake.price"
          :cakeName="cake.name"
        />
      </div>
    </section>
  </div>
</template>
<!-- :cakeQuantity="cake.quantity" -->
<style></style>
