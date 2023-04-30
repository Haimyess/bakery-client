<!-- @format -->

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />

  <TheFooter />
</template>

<style scoped></style>
