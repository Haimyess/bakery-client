<!-- @format -->

<script lang="ts" setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <!-- <header> -->
  <!-- Left -->
  <!-- <nav></nav> -->
  <!-- Center -->
  <!-- <span>Logo</span> -->
  <!-- Right -->
  <!-- <span>Cart logo</span> -->
  <!-- </header> -->
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
      <!-- Desktop -->
      <!-- MAybe wothout the parentesis -->
      <span @click="cartStore.toggleCart()" class="desktop-cart"
        >{{ cartStore.cartQuantity }} Desktop</span
      >
      <!-- Mobile -->
      <RouterLink to="/cart" class="mobile-cart">
        {{ cartStore.cartQuantity }} Mobile Cart</RouterLink
      >
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
}
.desktop-cart {
  display: none;
}

.mobile-cart {
  display: flex;
}

/* ------------- */

@media only screen and (min-width: 450px) {
  .mobile-cart {
    display: none;
  }

  .desktop-cart {
    display: flex;
  }

  .show-cart {
    width: 350px;
    /* border: 1px solid red; */
  }
}
</style>
