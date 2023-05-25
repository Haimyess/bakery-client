<!-- @format -->

<script setup lang="ts">
import TheHero from "@/components/TheHero.vue";
import TheProducts from "@/components/TheProducts.vue";
import TheContact from "@/components/TheContact.vue";
import Faq from "@/components/Homepage/Sections/Faq.vue";

import TheNav from "@/components/TheNav.vue";
// import TheProducts from "@/components/TheProducts.vue";
// import TheContact from "@/components/TheContact.vue";
// import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheNav />
  <main class="home">
    <TheHero />
    <TheProducts />
    <Faq />
    <TheContact />
    <!-- <TheFooter /> -->
  </main>
</template>

<style scoped>
.home {
  width: 90%;
  margin: 0 auto;
}
</style>
