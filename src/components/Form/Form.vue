<script setup lang='ts'>
import type { FormContext,FormItemContext, FormProps } from './types';
import { provide } from 'vue';
import { formContextKey } from './types';
defineOptions({
  name:'YdForm'
})
const props = defineProps<FormProps>()
const fields:FormItemContext[] = []
const addFiled: FormContext['addFiled'] = (field)=>{
  fields.push(field)
}
const removeFiled: FormContext['removeFiled'] = (field)=>{
    if(field.prop){
      fields.splice(fields.indexOf(field),1)
    }
}
provide(formContextKey,{
  ...props,
  addFiled,
  removeFiled
})
const validate = ()=>{
  console.log(fields)
}
</script>
<template>
  <form class="yd-Form">
    <slot>
    </slot>
    <button @click.prevent="validate">validate</button>
  </form>
</template>
<style scoped>
</style>
