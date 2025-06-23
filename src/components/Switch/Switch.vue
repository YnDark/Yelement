<script setup lang='ts'>
import { computed, onMounted, ref, watch } from 'vue';
import type { SwtichProps,SwtichEmits } from './types'
defineOptions({
  name:'YSwitch',
  inheritAttrs:false
})
const props = withDefaults(defineProps<SwtichProps>(),{
  activeValue:true,
  inactiveValue:false
})
const emits = defineEmits<SwtichEmits>()
const innerValue = ref(props.modelValue)
const check = computed(()=>innerValue.value === props.activeValue)
const input = ref<HTMLInputElement>()
onMounted(()=>{
  input.value!.checked = Boolean(check.value)
})
watch(check,(val)=>{
  input.value!.checked = Boolean(val)
})
watch(()=>props.modelValue,(newValue)=>{
  innerValue.value = newValue
})
const switchValue = ()=>{
  if(props.disabled){
    return
  }
  const newValue = check.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue',newValue)
  emits('change',newValue)
}
</script>
<template>
  <div class="yd-switch"
  @click = switchValue
  :class="{
    [`yd-switch--${size}`]:size,
    'is-disabled':disabled,
    'is-checked':check
  }"
  >
    <div class="yd-switch__core">
      <div class="yd-switch__core-inner">
        <span v-if="activeText || inactiveText" class="yd-switch__core-inner-text">
          {{ check ? activeText : inactiveText }}
        </span>
      </div>
      <div class="yd-switch__core-action">
      </div>
    </div>
    <input
    ref="input"
    class="yd-switch__input"
    type="checkbox"
    role="switch"
    :name="name"
    focus-visible
    :disabled="disabled"
    @keydown.enter="switchValue">
  </div>
</template>
