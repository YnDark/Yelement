<template>
  <i class="yd-icon" v-bind="$attrs" :class="{ [`yd-icon--${type}`]: type }"
  :style="customStyles">
    <font-awesome-icon v-bind="filteredProps" ></font-awesome-icon>
  </i>
</template>
<script lang="ts" setup>
import type { Iconprops } from './types'
import { omit } from 'lodash-es';
import './style.css'
import { computed } from 'vue';
defineOptions({
  name: "ydIcon",
  inheritAttrs: false
})
const props = defineProps<Iconprops>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
