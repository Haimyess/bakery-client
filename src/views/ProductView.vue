<!-- @format -->

<script setup lang="ts">
import SpecialNav from "@/components/Header/SpecialNav.vue";
import axios from "axios";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper";

const modules = ref([Pagination, Mousewheel]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useProductsStore } from "../stores/products";
import ProductBottomNav from "@/components/ProductBottomNav.vue";
const productStore = useProductsStore();

const route = useRoute();

onMounted(() => {
  productStore.getProductById(route.params.name);
});
</script>

<template>
  <SpecialNav title="" isCart="false" />

  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="true"
    :modules="modules"
    :mousewheel="true"
  >
    <swiper-slide
      ><div class="image-wrapper"><span>Image 1</span></div></swiper-slide
    >
    <swiper-slide
      ><div class="image-wrapper"><span>Image 2</span></div></swiper-slide
    >
    <swiper-slide
      ><div class="image-wrapper"><span>Image 3</span></div></swiper-slide
    >
    <!-- <swiper-slide v-for="images of productStore.product.images" :key="images"> -->

    <!-- </swiper-slide> -->
  </swiper>

  <!-- info product -->

  <div>
    <h3 class="item-name">{{ productStore.product?.name }}</h3>
    <p class="item-price">{{ productStore.product?.price }} NIS</p>
    <!-- Create a vew more component -->
    <p class="item-info">{{ productStore.product?.description }}</p>
    <!-- Ingridients(nutritional information) -->
  </div>

  <ProductBottomNav buttonText="Add to cart" />
</template>

<style scope>
.image-wrapper {
  height: 200px;
  border: 1px solid black;
  margin-bottom: 2rem;
  text-align: center;
  vertical-align: middle;
}

.item-name {
  font-weight: bold;
}
/* 
.item-info {
}
.item-price {
} */
</style>
