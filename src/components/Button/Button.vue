<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="yd-button" :class="{
    [`yd-button--${type}`]: type,
    [`yd-button--${size}`]: size,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled,
    'is-loading': loading
  }" :disabled="disabled || loading" :autofocus="autofocus" :type="nativeType" ref="_ref">
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import { defineComponent, withDefaults, ref } from 'vue';
import './style.css'
import Icon from '../Icon/Icon.vue'
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
</style>
