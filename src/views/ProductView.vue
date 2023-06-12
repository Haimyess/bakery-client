<!-- @format -->

<script setup lang="ts">
import SpecialNav from "@/components/Header/SpecialNav.vue";
import axios from "axios";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const product = ref(null);

const route = useRoute();
console.log(typeof route.params.name);

onMounted(() => {
  getProductById();
});

async function getProductById() {
  try {
    const baseURl = `http://localhost:5000/api/v1/products/${route.params.name}`;
    const response = await axios.get(baseURl);
    console.log(response);
    product.value = response.data;
    console.log(product.value);
  } catch (err) {
    console.log(err);
  }
}
</script>

<template>
  <SpecialNav title="" isCart="false" />
  <h1>Product page</h1>
</template>

<style scope></style>
