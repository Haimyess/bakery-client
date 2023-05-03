<!-- @format -->

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <h1>Cart page</h1>

  <!-- Create a component for each product later -->
  <template v-if="cartStore.cart.length > 0">
    <div v-for="product in cartStore.cart" :key="product.cakeId">
      <!-- up -->
      <div>
        <div>
          <img src="#" alt="Product image" />
        </div>
        <div>
          <span>{{ product.cakeName }}</span>
          <span>${{ product.cakePrice }}</span>
        </div>
        <div><button>delete</button></div>
      </div>

      <!-- down -->

      <div>
        <!-- quantity -->
        <div>
          <button @click="cartStore.decreaseQuantity(product)">-</button>
          <span>{{ product.cakeQuantity }}</span>
          <button @click="cartStore.addToCart(product)">+</button>
        </div>
        <div><span>Total price</span></div>
      </div>
    </div>
  </template>

  <p v-else>Your cart is empty.</p>
</template>

<style></style>
