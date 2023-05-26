<!-- @format -->

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/Footer/TheFooter.vue";
import TheButton from "./components/TheButton.vue";

import { ref, computed } from "vue";

// const cartQuantity = computed(() => {

//   return cartStore.cart.reduce((acc, curr) => acc + curr.cakeQuantity, 0);
// });

import { useCartStore } from "./stores/cart";

const cartStore = useCartStore();

console.log(cartStore.cart);

// const isShow = ref(false);

// function toggleCart() {
// if opened
// isShow.value = !isShow.value;
// }
</script>

<template>
  <RouterView />

  <!-- Show cart component from the right side -->
  <aside :class="[cartStore.isShow ? 'show-cart' : '']" class="cart-sidebar">
    <div>
      <!-- title -->
      <div>
        <span @click="cartStore.toggleCart">Close</span>
        <h3>Your Cart</h3>
      </div>
      <!-- Show list of products  -->
      <div>
        <div
          v-for="product in cartStore.cart"
          :key="product.cakeId"
          class="cart-product"
        >
          <span>{{ product.cakeName }}</span>
          <span>{{ product.cakeQuantity }}</span>
        </div>
      </div>
      <div>
        <TheButton v-if="cartStore.cartQuantity > 0">Checkout</TheButton>
        <RouterLink v-if="cartStore.cartQuantity > 0" to="/cart"
          >View Cart</RouterLink
        >
        <span v-else>Your cart is empty</span>
      </div>
    </div>
  </aside>
  <div
    v-if="cartStore.isShow"
    @click="cartStore.toggleCart"
    class="cart-sidebar--wrapper"
  ></div>

  <TheFooter />
</template>

<style scoped>
.cart-sidebar {
  display: none;
}

@media only screen and (min-width: 450px) {
  aside > * {
    white-space: nowrap;
  }

  .cart-sidebar--wrapper {
    /* border: 1px solid green; */

    /* filter: blur(4px); */
    position: fixed;
    top: 0;
    left: 0;
    /* bottom: 0; */
    width: 100vw;
    height: 100vh;
    /* z-index: 1000; */
  }

  .cart-sidebar {
    display: flex;
    width: 0;
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    background-color: #ffff;
    transition: 0.4s ease-in-out;
    z-index: 999;
  }

  .cart-product {
    border: 1px solid red;
  }

  /* .hide-cart {
    
  } */
}
</style>
