
<template>
  <div class="yd-collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { NameType } from './types';
import { collapseContextKey } from './types'
import { ref,provide } from 'vue'
defineOptions({
  name:'Collapse'
})
const activeNames = ref<NameType[]>([])
const handleItemClick = (item: NameType) => {
  const index = activeNames.value.indexOf(item)
  if (index > -1){
    activeNames.value.splice(index,1)
  }
  else{
    activeNames.value.push(item)
  }
}
provide(collapseContextKey,{
  activeNames,
  handleItemClick
})
</script>

