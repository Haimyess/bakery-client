/** @format */

import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  interface Product {
    cakeId: number;
    cakePrice: number;
    cakeDescription: string;
    cakeName: string;
    cakeQuantity?: number;
  }

  // add to cart localstoreage
  // Product[] means an array of objects. the objects are the product interface

  const cart = ref<Product[]>(JSON.parse(localStorage.getItem("cart")) || []);

  function addToCart(product: Product) {
    const exist = cart.value.find((item) => item.cakeId === product.cakeId);

    if (exist) {
      exist.cakeQuantity++;
    } else {
      cart.value.push({ ...product, cakeQuantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function decreaseQuantity(product: Product) {
    product.cakeQuantity--;

    if (product.cakeQuantity === 0) {
      console.log("we should delete the product");
      // localStorage.removeItem()

      const updatedArr = cart.value.filter(
        (item) => item.cakeId !== product.cakeId
      );
      cart.value = updatedArr;
    }
    localStorage.setItem("cart", JSON.stringify(cart.value));
  }
  // onMounted(() => {
  // })

  console.log(cart.value);

  return { cart, addToCart, decreaseQuantity };
});
