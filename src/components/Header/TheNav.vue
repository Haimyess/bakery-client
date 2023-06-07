<!-- @format -->

<script lang="ts" setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";

// Fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faCartShopping);

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

        <!-- Desktop -->
        <!-- MAybe wothout the parentesis -->
        <span @click="cartStore.toggleCart()" class="desktop-cart"
          >{{ cartStore.cartQuantity }} Desktop</span
        >
        <!-- Mobile -->

        <RouterLink to="`/products/${}`">Tres Leches Cake</RouterLink>

        <RouterLink to="/cart" class="mobile-cart">
          <div type="button" class="position-relative">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" size="lg" />
            <span
              v-if="cartStore.cartQuantity > 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartStore.cartQuantity }}
            </span>
          </div>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.cart-count {
  border: 1px solid red;
  /* position: absolute;
  top: 0; */
}
header {
  margin-bottom: 70px;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 1rem;
  top: 0;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid red;
}
.wrapper {
  /* display: flex;
  justify-content: space-between; */
}
.desktop-cart {
  display: none;
}

.mobile-cart {
  display: flex;
  text-decoration: none;
  position: relative;
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
