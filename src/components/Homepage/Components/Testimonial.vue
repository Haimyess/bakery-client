<!-- @format -->

<script setup lang="ts">
interface Testimonial {
  testimonialId: number;
  testimonialUser: string;
  testimonialMessage: string;
}
const props = defineProps<Testimonial>();
</script>

<template>
  <div class="testimonial-wrapper">
    <div class="testimonial-container">
      <!-- up -->
      <div>
        <!-- left -->
        <div>
          <img src="" alt="" />
        </div>

        <!-- right -->
        <div>
          <!-- Testimonial name -->
          <span>{{ props.testimonialUser }}</span>
          <!-- Review stars -->
          <span></span>
        </div>
      </div>

      <!-- Down -->
      <div>
        <!-- Tesm=timonial text -->
        <p>{{ props.testimonialMessage }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-wrapper {
  border: 1px solid red;
}
</style>
