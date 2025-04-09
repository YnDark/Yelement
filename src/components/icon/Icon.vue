<template>
  <i class="yd-icon" v-bind="$attrs" :class="{ [`yd-icon--${type}`]: type }"
  :style="customStyles">
    <FontAwesomeIcon v-bind="filteredProps" ></FontAwesomeIcon>
  </i>
</template>
<script lang="ts" setup>
import type { Iconprops } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es';
import './style.css'
import { computed } from 'vue';
defineOptions({
  name: "Icon",
  inheritAttrs: false
})
const props = defineProps<Iconprops>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>
