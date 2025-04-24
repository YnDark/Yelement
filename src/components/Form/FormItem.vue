<script setup lang='ts'>
import type { FromItemProps } from './types';
import { computed, inject, provide, reactive } from 'vue';
import { formContextKey, itemContextKey } from './types';
import {isNil} from 'lodash-es'
import Schema from 'async-validator';
import type { FormValidateFailure } from './types';
import type { FormItemContext } from './types'
defineOptions({
  name:'yd-form-item'
})
const props = defineProps<FromItemProps>()
const formContext = inject(formContextKey)
console.log(formContext)
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
const validateStatus = reactive({
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
const validate = (trigger?:string)=>{
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if(triggeredRules.length === 0) return true
  console.log(props.prop,innerValue.value)
  if(modelName){
    const validator = new Schema({
      [modelName]: triggeredRules
    })
    validateStatus.loading = true
    validator.validate({[modelName]:innerValue.value})
    .then(()=>{
      validateStatus.state = 'success'
      console.log('no err')
    })
    .catch((e: FormValidateFailure) => {
      const {errors} = e
      validateStatus.state = 'error'
      validateStatus.errorMessage = (errors && errors.length > 0) ? errors[0].message || "" : ""
      console.log(e.errors)
    })
    .finally(()=>{
      validateStatus.loading = false
    })
  }

}
const context:FormItemContext = {
  validate
}
provide(itemContextKey,context)
</script>
<template>
  <div class="yd-form-item"
  :class="{
    'is-error':validateStatus.state === 'error',
    'is-success':validateStatus.state === 'success',
    'is-loading':validateStatus.state === 'loading',
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
