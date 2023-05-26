<!-- @format -->

<script setup lang="ts">
// Components
import SectionTitle from "@/components/SectionTitle.vue";
// import TestimonialsList from "../Components/TestimonialsList.vue";
import Testimonial from "../Components/Testimonial.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper";

const modules = ref([Pagination, Mousewheel]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { ref } from "vue";

const testimonials = ref([
  {
    id: 1,
    userName: "John Doe",
    message:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam magnam officia eius sint ullam optio velit, beatae ad? Delectus, officiis.",
  },
  {
    id: 2,
    userName: "John Smith",
    message:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam magnam officia eius sint ullam optio velit, beatae ad? Delectus, officiis.",
  },
  {
    id: 3,
    userName: "Michael Jordan",
    message:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam magnam officia eius sint ullam optio velit, beatae ad? Delectus, officiis.",
  },
  {
    id: 4,
    userName: "James Clint",
    message:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam magnam officia eius sint ullam optio velit, beatae ad? Delectus, officiis.",
  },
  {
    id: 5,
    userName: "Lilly Cornegie",
    message:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam magnam officia eius sint ullam optio velit, beatae ad? Delectus, officiis.",
  },
]);
</script>

<template>
  <SectionTitle text="What People Say About Us" />
  <!-- <h3 class="section-title">What People Say About Us</h3> -->

  <swiper
    :slides-per-view="1"
    :space-between="50"
    :pagination="true"
    :modules="modules"
    :mousewheel="true"
  >
    <swiper-slide v-for="testimonial of testimonials" :key="testimonial.id">
      <Testimonial
        :testimonialId="testimonial.id"
        :testimonialUser="testimonial.userName"
        :testimonialMessage="testimonial.message"
      />
    </swiper-slide>
  </swiper>

  <!-- <TestimonialsList> -->

  <!-- </TestimonialsList> -->
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  /* border: 1px solid green; */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
