<!-- @format -->
<script lang="ts" setup>
import ProductCard from "./ProductCard.vue";

import axios from "axios";

import { ref, onMounted } from "vue";

interface Product {
  id: string;
  price: number;
  description: string;
  name: string;
  quantity?: number;
}

const products = ref<Product[]>([]);

onMounted(() => {
  getProducts();
});

async function getProducts() {
  const baseUrl = "http://localhost:5000/api/v1/products";
  const response = await axios.get(baseUrl);
  products.value = response.data.data;
  console.log(response);
}

// interface
</script>
<template>
  <div>
    <h1>Products</h1>

    <section>
      <div>
        <ProductCard
          v-for="cake in products"
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
