<!-- @format -->

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// import { useCartStore } from "@/stores/cart";

// const cartStore = useCartStore();

import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
const productStore = useProductsStore();
const cartStore = useCartStore();

const quantity = ref(1);

const pricePerProduct = computed(() => {
  return productStore.product?.price * quantity.value;
});

interface Nav {
  buttonText: string;
}

interface Product {
  _cakeId: string;
  cakePrice: number;
  cakeDescription: string;
  cakeName: string;
  cakeQuantity?: number;
}

const props = defineProps<Nav>();

const increaseQtty = () => quantity.value++;
const decreaseQtty = () => quantity.value--;
</script>

<template>
  <div class="container">
    <!-- Price -->
    <div class="">
      <button class="button" @click="decreaseQtty">-</button>
      <span>{{ quantity }}</span>
      <button class="button" @click="increaseQtty">+</button>
    </div>

    <!-- Button checkout -->
    <div class="">
      <button
        class="add-btn"
        @click="cartStore.addToCart(productStore.product)"
      >
        <span>{{ props.buttonText }}</span> - <span>{{ pricePerProduct }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  padding: 1rem 0;
  gap: 1rem;
}

.container div:nth-child(1) {
  border: 1px solid green;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.container div:last-child {
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
}

.button {
  width: 100%;
  padding: 10px;
  border: 1px solid red;
}

.add-btn {
  width: 100%;
  vertical-align: middle;
}
</style>
