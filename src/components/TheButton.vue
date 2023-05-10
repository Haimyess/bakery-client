<!-- @format -->

<!-- Create dynamic button -->
<script setup lang="ts"></script>

<template>
  <button class="btn"><slot /></button>
</template>

<style scoped>
.btn {
  border: none;
  /* background-color: transparent; */
  border: 1px solid #000000;
  border-radius: 20px;
  background-color: #000000;
  padding: 0.8rem 2.5rem;
  color: #ffff;
}
</style>
