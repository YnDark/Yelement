<script setup lang='ts'>
import type { FormContext,FormItemContext, FormProps, FormValidateFailure } from './types';
import { provide } from 'vue';
import { formContextKey } from './types';
import type { ValidateFieldsError } from 'async-validator';
import type { FormInstance } from './types';
defineOptions({
  name:'YForm'
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
const validate = async()=>{
  let validationErors:ValidateFieldsError = {}
  for(const field of fields){
    try{
      await field.validate('')
    }catch(e){
      const error = e as FormValidateFailure
      validationErors = {
        ...validationErors,
        ...error.fields
      }
    }
  }
  if(Object.keys(validationErors).length === 0){
    return true
  }
  return Promise.reject(validationErors)
}
const resetFields = (keys: string[] = [])=>{
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(item => {
    item.resetField()
  })
}
const clearValidate = (keys: string[] = [])=>{
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(item => {
    item.clearValidate()
  })
}
defineExpose<FormInstance>({
  validate,
  resetFields,
  clearValidate,
})
</script>
<template>
  <form class="yd-Form">
    <slot>
    </slot>
  </form>
</template>
<style scoped>
</style>
