<!-- @format -->
<script setup lang="ts">
import { ref, computed, onMounted, watch, onUnmounted } from "vue";
import MobileFooter from "./MobileFooter.vue";
import DesktopFooter from "./DesktopFooter.vue";

import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

// const windowWidth = ref(window.innerWidth);

// const handleResize = () => {
//   windowWidth.value = window.innerWidth;
// };

// onMounted(() => {
//   window.addEventListener("resize", handleResize);
// });

// onUnmounted(() => {
//   window.removeEventListener("resize", handleResize);
// });

// const selectFooter = computed(() => {
//   return windowWidth.value > 480 ? DesktopFooter : MobileFooter;
// });
const selectFooter = computed(() => {
  return width.value > 480 ? DesktopFooter : MobileFooter;
});
</script>

<template>
  <div class="footer">
    <footer>
      {{ width }}
      <!-- {{ windowWidth }} -->
      <component :is="selectFooter"></component>
    </footer>
  </div>
</template>

<style scoped>
footer {
  position: sticky;
  bottom: 0;
  left: 0;
}
</style>

<!-- Footer for cart, final price and checkout button -->
<!-- Create dynamic button component -->
<!-- delete product button: DONE -->
<!-- when added product to cartchange button to added and is not possible to add it again -->

<!-- stripe implementation check -->
