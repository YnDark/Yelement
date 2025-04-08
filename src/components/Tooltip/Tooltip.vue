<script setup lang='ts'>
import { reactive, ref, watch } from 'vue';
import { createPopper, type Instance } from '@popperjs/core'
import type { TooltipProps, TooltipEmits } from './types';
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover'
})
let events: Record<string,any> = reactive({})
let outterEvents: Record<string,any> = reactive({})
const attachEvents = () => {
  if(props.trigger === 'hover'){
    outterEvents['mouseenter'] = open
    outterEvents['mouseleave'] = close
  }
  else if(props.trigger === 'click'){
    outterEvents['click'] = togglePopper
  }
}
const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const togglePopper = () => {
  isOpen.value = !isOpen.value
  emits('visible-change', isOpen.value)
}
const open = ()=>{
  isOpen.value = true
  emits('visible-change', true)
}
const close = ()=>{
  isOpen.value = false
  emits('visible-change', false)
}
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
attachEvents()
watch(()=>props.trigger,(newTrigger,oldTrigger)=>{
  if(newTrigger !== oldTrigger){
    events = {}
    outterEvents = {}
    attachEvents()
  }
})
watch(isOpen, (newValue) => {
  if (newValue) {
    if (popperNode.value && triggerNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, {
        placement: props.placement
      })
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })
</script>
<template>
  <div class="yd-tooltip" v-on="outterEvents">
    <div class="yd-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <div class="yd-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name = 'content'>
        {{ content }}
      </slot>
    </div>
  </div>
</template>
