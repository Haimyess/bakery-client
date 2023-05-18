<!-- @format -->

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";

import { ref, computed, getCurrentInstance } from "vue";

const cartQuantity = computed(() => {
  // reduce all the quantities later
  return cartStore.cart.reduce((acc, curr) => acc + curr.cakeQuantity, 0);
});

import { useCartStore } from "./stores/cart";

const cartStore = useCartStore();

console.log(cartStore.cart);

const isShow = ref(false);

function toggleCart() {
  // if opened
  isShow.value = !isShow.value;
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
      <!-- Desktop -->
      <span @click="toggleCart" class="desktop-cart"
        >{{ cartQuantity }} Desktop</span
      >
      <!-- Mobile -->
      <RouterLink to="/cart" class="mobile-cart">
        {{ cartQuantity }} Mobile Cart</RouterLink
      >
    </div>
  </header>

  <RouterView />

  <!-- Show cart component from the right side -->
  <aside :class="[isShow ? 'show-cart' : '']" class="cart-sidebar">
    <div>
      <!-- title -->
      <div>
        <span @click="toggleCart">Close</span>
        <h3>Your Cart</h3>
      </div>
    </div>
  </aside>
  <div v-if="isShow" @click="toggleCart" class="cart-sidebar--wrapper">
    Hola
  </div>

  <TheFooter />
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}

.cart-sidebar {
  display: none;
}

.desktop-cart {
  display: none;
}

.mobile-cart {
  display: flex;
}

@media only screen and (min-width: 450px) {
  .mobile-cart {
    display: none;
  }

  .desktop-cart {
    display: flex;
  }
  .cart-sidebar--wrapper {
    border: 1px solid green;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    /* height: 100vh; */
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
  }

  .show-cart {
    width: 250px;
    border: 1px solid red;
  }

  /* .hide-cart {
    
  } */
}
</style>
