<script setup lang='ts'>
import type { FromItemProps } from './types';
import { computed, inject, onMounted, onUnmounted, provide, reactive } from 'vue';
import { formContextKey, itemContextKey } from './types';
import {isNil} from 'lodash-es'
import Schema from 'async-validator';
import type { FormValidateFailure } from './types';
import type { FormItemContext,ValidateStatus,FormItemInstance } from './types'
defineOptions({
  name:'yd-form-item'
})

const props = defineProps<FromItemProps>()
const formContext = inject(formContextKey)
console.log(formContext)
let initialValue:any = null
const innerValue = computed(()=>{
  if(formContext?.model && props.prop && !isNil(formContext.model[props.prop])){
    return formContext.model[props.prop]
  }
  else{
    return null;
  }
})
const itemRules = computed(()=>{
  if(formContext?.rules && props.prop && !isNil(formContext.rules[props.prop])){
    return formContext.rules[props.prop]
  }
  else{
    return null;
  }
})
const validateStatus = reactive<ValidateStatus>({
  state: 'init',
  errorMessage: '',
  loading: false
})
const getTriggeredRules = (trigger?:string)=>{
  const rules = itemRules.value
  if(rules){
    return rules.filter((rule:any)=> {
      if(!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    })
  }
  else{
    return []
  }
}
const validate = async(trigger?:string)=>{
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if(triggeredRules.length === 0) return true
  console.log(props.prop,innerValue.value)
  if(modelName){
    const validator = new Schema({
      [modelName]: triggeredRules
    })
    validateStatus.loading = true
    return validator.validate({[modelName]:innerValue.value})
    .then(()=>{
      validateStatus.state = 'success'
      console.log('no err')
    })
    .catch((e: FormValidateFailure) => {
      const {errors} = e
      validateStatus.state = 'error'
      validateStatus.errorMessage = (errors && errors.length > 0) ? errors[0].message || "" : ""
      return Promise.reject(e)
    })
    .finally(()=>{
      validateStatus.loading = false
    })
  }
}
const clearValidate = ()=>{
  validateStatus.state = 'init'
  validateStatus.errorMessage = ''
  validateStatus.loading = false
}
const resetField = ()=>{
  clearValidate()
  if(formContext?.model && props.prop && !isNil(formContext.model[props.prop])){
    formContext.model[props.prop] = initialValue
  }
}
const context:FormItemContext = {
  validate,
  prop:props.prop || '',
  clearValidate,
  resetField
}
onMounted(()=>{
  if(props.prop){
    formContext?.addFiled(context)
    initialValue = innerValue.value
  }
})
onUnmounted(()=>{
  formContext?.removeFiled(context)
})
provide(itemContextKey,context)
const isRequired = computed(()=>{
  return itemRules.value ? itemRules.value.some((rule:any) => rule.required) : false
})
defineExpose<FormItemInstance>({
  validateStatus,
  validate,
  resetField,
  clearValidate
})
</script>
<template>
  <div class="yd-form-item"
  :class="{
    'is-error':validateStatus.state === 'error',
    'is-success':validateStatus.state === 'success',
    'is-loading':validateStatus.state === 'loading',
    'is-required': isRequired
  }">
    <label class="yd-form-item__label">
      <slot name="label" :label="label">{{ label }}</slot>
    </label>
    <div class="yd-form-item__content">
      <slot :validate="validate"></slot>
      <div class="yd-form-item__error-msg" v-if="validateStatus.state === 'error'">
        {{ validateStatus.errorMessage }}
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
