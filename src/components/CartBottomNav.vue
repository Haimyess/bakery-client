<!-- @format -->

<script setup lang="ts">
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <div class="container">
    <!-- Price -->
    <div>
      <span>Total Price:</span>
      <span>{{ cartStore.getTotalPrice }}</span>
    </div>

    <!-- Button checkout -->
    <div>
      <button>Checkout</button>
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
}

.container div:last-child {
  border: 1px solid blue;
  flex: 1;
}

button {
  width: 100%;
}
</style>
