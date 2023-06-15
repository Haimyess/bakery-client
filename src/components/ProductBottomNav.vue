<!-- @format -->

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
// import { useCartStore } from "@/stores/cart";

// const cartStore = useCartStore();
import { RouterLink } from "vue-router";

import { useProductsStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
const productStore = useProductsStore();
const cartStore = useCartStore();

const quantity = ref(1);
const productExist = ref(false);

const pricePerProduct = computed(() => {
  return productStore.product?.price * quantity.value;
});

// Show quantity of product if there is in the cart, if not, 1

const showQuantity = computed(() => {
  const exist = cartStore.cart.find(
    (product) => product._id === productStore.product?._id
  );
  const assignQuantity = exist
    ? (quantity.value = exist.quantity)
    : quantity.value;

  return assignQuantity;
});

const checkingIfProductExist = computed(() => {
  const exist = cartStore.cart.find(
    (product) => product._id === productStore.product?._id
  );

  return exist ? (productExist.value = true) : "";
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

<!-- If the product exist in the cart, we will not show the quantity and buttons and the add to cart button will display that the product has been added already -->

<template>
  <div class="container">
    <!-- Price -->
    <div class="" v-if="!checkingIfProductExist">
      <button class="button" @click="decreaseQtty" :disabled="quantity === 1">
        -
      </button>
      <span>{{ showQuantity }}</span>
      <button class="button" @click="increaseQtty">+</button>
    </div>
    <!-- toggleProductExist? -->
    <!-- Button checkout -->
    <div class="">
      <button
        v-if="!checkingIfProductExist"
        class="add-btn"
        @click="cartStore.addToCart(productStore.product, quantity)"
        :class="[checkingIfProductExist ? 'added' : '']"
      >
        <span>{{ props.buttonText }}</span>
        - <span>{{ pricePerProduct }}</span>
      </button>

      <RouterLink v-else to="/cart">Go to cart</RouterLink>
      <!-- <button
        v-else
        class="update-btn"
        @click="cartStore.deleteFromCart(productStore.product?._id)"
      >
        Delete
      </button> -->
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

.added {
  background-color: red;
  color: #ffffff;
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

.button:disabled {
  cursor: not-allowed;
  background-color: azure;
  /* color: azure; */
}

.update-btn {
  border: 1px solid red;
}

.add-btn {
  width: 100%;
  vertical-align: middle;
}
</style>
