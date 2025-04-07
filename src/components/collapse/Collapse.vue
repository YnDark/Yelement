
<template>
  <div class="yd-collapse">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { NameType,CollapseProps,CollapseEmits } from './types';
import { collapseContextKey } from './types'
import { ref,provide, warn,watch } from 'vue'
defineOptions({
  name:'Collapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
watch(()=> props.modelValue,()=>{
  activeNames.value = props.modelValue
})
if(props.according && activeNames.value.length > 1){
  console.log(warn("为手风琴模式，只能有一个激活的选项"))
}
const handleItemClick = (item: NameType) => {
  console.log(props.according)
  if(props.according){
    activeNames.value = [activeNames.value[0] === item ? '' : item]
  }
  else {
    const index = activeNames.value.indexOf(item)
    if (index > -1){
      activeNames.value.splice(index,1)
    }
    else{
      activeNames.value.push(item)
    }
  }
  emits('update:modelValue',activeNames.value)
  emits('change',activeNames.value)
}
provide(collapseContextKey,{
  activeNames,
  handleItemClick
})
</script>

