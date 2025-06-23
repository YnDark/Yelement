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
<script setup lang="ts">
import Icon from '@/components/Icon/Icon.vue';
import { ref, withDefaults } from 'vue';
import './style.css';
import type { ButtonProps } from './types.ts';
defineOptions({
  name: "YButton",
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref
})
</script>
