<!-- @format -->

<!-- Add design and create components -->

<script setup lang="ts">
// import { computed } from "vue";
import CartBottomNav from "@/components/CartBottomNav.vue";
import { useCartStore } from "@/stores/cart";

// Components
import GoBack from "@/components/GoBack.vue";

const cartStore = useCartStore();

// const getPricePerItem = (qty: number | undefined, price: number) => {
//   return qty * price;
// };
</script>

<template>
  <div class="cart-top">
    <GoBack />
    <!-- <v-btn>Hi</v-btn> -->

    <div>
      <h4>Your Cart</h4>
      <span>{{ cartStore.cartQuantity }} items</span>
    </div>
  </div>

  <!-- Create a component for each product later -->
  <template v-if="cartStore.cart.length > 0">
    <div
      v-for="product in cartStore.cart"
      :key="product.cakeId"
      class="cart-product"
    >
      <!-- Left -->
      <div class="product-img-wrapper">
        <img src="#" alt="Product image" class="product-img" />
      </div>

      <!-- Right -->

      <div class="cart-product-right">
        <!-- up -->
        <div class="cart-product--rg-up">
          <!-- Left -->
          <div>
            <span class="product-name">{{
              product.cakeName.toLocaleUpperCase()
            }}</span>
          </div>
          <!-- right -->
          <div>
            <div>
              <button @click="cartStore.deleteFromCart(product.cakeId)">
                delete
              </button>
            </div>
          </div>
        </div>

        <!-- down -->
        <div class="cart-product--rg-down">
          <!-- left -->
          <div>
            <span class="product-price">${{ product.cakePrice }}</span>
          </div>
          <!-- Right -->
          <div class="product-qty">
            <!-- quantity -->

            <button @click="cartStore.decreaseQuantity(product)">-</button>
            <span>{{ product.cakeQuantity }}</span>
            <button @click="cartStore.addToCart(product)">+</button>
          </div>
        </div>
      </div>
    </div>

    <!-- <span>Subtotal price</span>
          <span
            >${{
              getPricePerItem(product.cakeQuantity, product.cakePrice)
            }}</span
          > -->
  </template>

  <p v-else>Your cart is empty.</p>

  <CartBottomNav v-if="cartStore.cart.length > 0" />
</template>

<style>
.cart-top {
  border: 1px solid red;
}

.cart-product {
  /* border: 1px solid green; */
  display: flex;
  margin: 1rem 0;
  gap: 1rem;
}

.cart-product-right {
  /* border: 1px solid yellow; */
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.cart-product--rg-up,
.cart-product--rg-down {
  /* border: 1px solid blue; */

  display: flex;
  justify-content: space-between;
}

.product-name {
  font-size: 0.7rem;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
}

.product-img-wrapper {
  /* border: 1px solid black; */
  height: 70px;
}

.product-img {
  height: 100%;
}

/* .product-qty {
  display: flex;
} */
</style>
