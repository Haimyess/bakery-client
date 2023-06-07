/** @format */

import { ref, onMounted } from "vue";
import { defineStore } from "pinia";

import axios from "axios";

export const useProductsStore = defineStore("products", () => {

interface Product {
  _id: string;
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

  return { products };
});
