<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="yd-button" :class="{
    [`yd-button--${type}`]: type,
    [`yd-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
  }" :disabled="disabled" :autofocus="autofocus" :type="nativeType" ref="_ref">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, withDefaults, ref } from 'vue';

export default defineComponent({
  name: "YButton",
})
</script>
<script setup lang="ts">
import type { ButtonProps } from './types.ts'
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})


</script>
<style scoped>
.yd-button{
  background-color: var(--yn-color-primary);
}
</style>
