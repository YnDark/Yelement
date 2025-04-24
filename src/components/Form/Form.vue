<script setup lang='ts'>
import type { FormProps } from './types';
import { provide } from 'vue';
import { formContextKey } from './types';
defineOptions({
  name:'YdForm'
})
const props = defineProps<FormProps>()
console.log(props)
provide(formContextKey,props)
</script>
<template>
  <div class="yd-Form">
    <slot>
    </slot>
  </div>
</template>
<style scoped>
</style>
