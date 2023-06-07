/** @format */

import { ref } from "vue";
import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);

//  async function getProducts () =

  return { products };
});
