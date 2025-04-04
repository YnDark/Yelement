<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="yd-button" :class="{
    [`yd-button--${type}`]: type,
    [`yd-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
  }" :disabled="disabled">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: "YButton",
})
</script>
<script setup lang="ts">
import type { ButtonProps } from './types.ts'
defineProps<ButtonProps>()
</script>
<style scoped></style>
