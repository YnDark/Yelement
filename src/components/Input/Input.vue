<script setup lang='ts'>
import type { InputEmits, InputProps } from './types';
import { computed, type Ref, ref, useAttrs, watch, nextTick, inject } from 'vue'
import Icon from '../Icon/Icon.vue';
import { itemContextKey } from '../Form/types';
defineOptions({
  name: 'YdInput',
  inheritAttrs: false
})
const itemContext = inject(itemContextKey)
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  autocomplete: 'off'
})
const runValidation = (trigger?:string)=>{
  itemContext?.validate(trigger).catch(e=>{
    console.log(e.errors)
  })
}
const attr = useAttrs()
const innerValue = ref(props.modelValue)
const emits = defineEmits<InputEmits>()
const isFocus = ref(false)
const passwordVisible = ref(false)
const inputRef = ref() as Ref<HTMLInputElement>
const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}
const showClear = computed(() => props.clearable && !props.disabled && !!innerValue.value && isFocus.value)
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})
const handleInput = () => {
  emits('update:modelValue', innerValue.value)
  emits('input', innerValue.value)
  runValidation('input')
}
const handleChange = () => {
  emits('change', innerValue.value)
  runValidation('change')
}
const handleClear = () => {
  console.log('clear')
  innerValue.value = ""
  emits('update:modelValue', '')
  emits('clear')
  emits('input', '')
  emits('change', '')
}
const handleFocus = (e: FocusEvent) => {
  isFocus.value = true
  emits('focus', e)
}
const handleBlur = (e: FocusEvent) => {
  isFocus.value = false
  emits('blur', e)
  runValidation('blur')
}
const handleShowPassword = () => {
  passwordVisible.value = true
}
const handleHiddenPassword = () => {
  passwordVisible.value = false
}
const showPasswordArea = computed(() => props.showPassword && !props.disabled && innerValue.value)
defineExpose({
  ref: inputRef
})
const NOOP = () => { }
</script>
<template>
  <div class="yd-input" :class="{
    [`yd-input--${type}`]: type,
    [`yd-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': $slots.prepend,
    'is-append': $slots.append,
    'is-prefix': $slots.prefix,
    'is-suffix': $slots.suffix,
    'is-focus':isFocus
  }">
    <!-- input -->
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <div v-if="$slots.prepend" class="yd-input__prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="yd-input__wrapper">
        <!-- prefix -->
        <span v-if="$slots.prefix" class="yd-input__prefix">
          <slot name="prefix"></slot>
        </span>
        <!-- input -->
        <input ref="inputRef" v-bind="attr" @change="handleChange" @blur="handleBlur" @focus="handleFocus"
          @input="handleInput" v-model="innerValue"
          :type="showPasswordArea ? (passwordVisible ? 'text' : 'password') : type" :class="`yd-input__inner`"
          :disabled="disabled" :readonly="readonly" :autocomplete="autocomplete" :placeholder="placeholder"
          :autofocus="autofocus" :form="form">
        <!-- suffix -->
        <span @click="keepFocus" v-if="$slots.suffix || showClear || showPasswordArea" class="yd-input__suffix">
          <slot name="suffix"></slot>
          <Icon @click="handleClear" @mousedown.prevent="NOOP" icon="circle-xmark" v-if="showClear"
            class="yd-input__clear"></Icon>
          <Icon @click="handleHiddenPassword" @mousedown.prevent="NOOP" icon="eye"
            v-if="showPasswordArea && passwordVisible" class="yd-input__password"></Icon>
          <Icon @click="handleShowPassword" @mousedown.prevent="NOOP" icon="eye-slash"
            v-if="showPasswordArea && !passwordVisible" class="yd-input__password"></Icon>
        </span>
      </div>
      <!-- append -->
      <div v-if="$slots.append" class="yd-input__append">
        <slot name="append"></slot>
      </div>
    </template>
    <!-- textarea -->
    <template v-else>
      <textarea class="yd-textarea__wrapper" ref="inputRef" v-bind="attr" :disabled="disabled" :readonly="readonly"
        :autocomplete="autocomplete" :placeholder="placeholder" :autofocus="autofocus" :form="form"
        @change="handleChange" @input="handleInput" v-model="innerValue" name="yd-textarea__wrapper">
    </textarea>
    </template>
  </div>
</template>
