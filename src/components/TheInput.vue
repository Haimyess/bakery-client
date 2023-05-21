<!-- @format -->

<script setup lang="ts">
interface Input {
  placeholder: string;
  label: string;
  modelValue: string | number;
}

const props = defineProps<Input>();
// Check this
const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();
</script>

<template>
  <div class="button-label">
    <label for="">{{ props.label }}</label>
    <input
      :placeholder="props.placeholder"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<style scoped>
.button-label {
  display: flex;
  flex-direction: column;
}
</style>
