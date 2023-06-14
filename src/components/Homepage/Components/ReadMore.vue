<!-- @format -->

<script setup lang="ts">
import { ref, computed } from "vue";

interface Text {
  content: string;
  limit: number;
}

const props = defineProps<Text>();

const isOpen = ref(false);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}

const showText = computed(() => {
  console.log(props.content);
  return isOpen.value ? props.content : props.content?.slice(0, props.limit);
});
</script>

<template>
  <div class="text-wrapper">
    <!-- <p>{{ props.content }}</p> -->
    <p>
      {{ showText
      }}<span class="read-btn" @click="toggleOpen">
        {{ isOpen ? " Read less" : " Read more..." }}</span
      >
    </p>
  </div>
</template>

<style scope>
.text-wrapper {
  /* padding: 1rem; */
}
.read-btn {
  font-weight: bold;
  font-size: small;
  cursor: pointer;
}

.read-btn:hover {
  opacity: 90%;
  /* text-decoration: underline; */
}
</style>
