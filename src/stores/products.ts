/** @format */

import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import { useRoute } from "vue-router";

import axios from "axios";

const route = useRoute();

export const useProductsStore = defineStore("products", () => {

interface Product {
  _id: string;
  price: number;
  description: string;
  name: string;
  quantity?: number;
}


const products = ref<Product[]>([]);
const product = ref<Product>()

onMounted(() => {
  getProducts();
});

// Get all products
async function getProducts() {
  const baseUrl = "http://localhost:5000/api/v1/products";
  const response = await axios.get(baseUrl);
  products.value = response.data.data;
  console.log(response);
}

// Get product by id 
async function getProductById(id : string) {
  try {
    const baseURl = `http://localhost:5000/api/v1/products/${id}`;
    const response = await axios.get(baseURl);

    product.value = response.data.data;
  } catch (err) {
    console.log(err);
  }
}

  return { products, getProductById, product };
});
