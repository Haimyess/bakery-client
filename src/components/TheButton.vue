<!-- @format -->

<!-- Create dynamic button -->
<script setup lang="ts">
const props = defineProps({
  state: { type: Boolean },
  add: { required: true },
});
</script>

<template>
  <button
    @click="
      props.add.addToCart({
        cakeId,
        cakeName,
        cakeDescription,
        cakePrice,
        cakeQuantity,
      }),
        changeState()
    "
    :class="props.state ? 'added' : 'btn'"
  >
    <slot />
  </button>
  <!-- class="btn" -->
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

.added {
  background-color: red;
}
</style>
