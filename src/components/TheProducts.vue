<!-- @format -->
<script lang="ts" setup>
import ProductCard from "./ProductCard.vue";

import axios from "axios";

import { ref, onMounted } from "vue";

import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();
</script>
<template>
  <div>
    <h1>Products</h1>

    <section>
      <div>
        <ProductCard
          v-for="cake in productStore.products"
          :key="cake._id"
          :_id="cake._id"
          :description="cake.description"
          :price="cake.price"
          :name="cake.name"
        />
      </div>
    </section>
  </div>
</template>
<!-- :cakeQuantity="cake.quantity" -->
<style></style>
