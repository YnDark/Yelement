<script setup lang='ts'>
import type { CollapseItemProps } from './types';
import { inject,computed } from 'vue';
import { collapseContextKey } from './types';
defineOptions({
  name:'yd-collapse-item'
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(()=>collapseContext?.activeNames.value.includes(props.name))
const handleClick = ()=>{
  if(props.disabled){return}
  collapseContext?.handleItemClick(props.name)
}
</script>
<template>
  <div class="yd-collapse-item"
  :class="{
    'is-disabled':disabled
  }">
    <div class="yd-collapse__header" :id="`item-header-${name}`"   @click="handleClick">
      <slot name="title" >{{ title }}</slot>
    </div>
    <div class="yd-collapse__content" :id="`item-content-${name}`" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>
<style>
.yd-collapse__header{
  font-size: 30px;
}
</style>
