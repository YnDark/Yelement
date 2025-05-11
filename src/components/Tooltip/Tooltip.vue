<script setup lang='ts'>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue';
import { createPopper, type Instance } from '@popperjs/core'
import type { TooltipProps, TooltipEmits, ToolTipInstance } from './types';
import useClickOutside from '@/hooks/useClickOutSide';
import { debounce } from 'lodash-es'
defineOptions({
  name:'YdTooltip'
})
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  openDelay: 0,
  closeDelay: 0,
  transition: 'fade',
})
let events: Record<string, any> = reactive({})
let outterEvents: Record<string, any> = reactive({})
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9]
        }
      }
    ],
    ...props.popperOptions
  }
})
const attachEvents = () => {
  if (props.trigger === 'hover') {
    outterEvents['mouseenter'] = openOnceDebouce
    outterEvents['mouseleave'] = closeOnceDebouce
  }
  else if (props.trigger === 'click') {
    outterEvents['click'] = togglePopper
  }
}

const emits = defineEmits<TooltipEmits>()
const isOpen = ref(false)
const open = () => {
  console.log(props.openDelay)
  isOpen.value = true
  emits('visible-change', true)
}
const close = () => {
  console.log(props.closeDelay)
  isOpen.value = false
  emits('visible-change', false)

}
const togglePopper = () => {
  if(isOpen.value === true){
    closeOnceDebouce()
  }
  else{
    openOnceDebouce()
  }
}
const openDebouce = debounce(open,props.openDelay)
const closeDebouce = debounce(close,props.closeDelay)
const openOnceDebouce = ()=>{
  openDebouce.cancel()
  openDebouce()
}
const closeOnceDebouce = ()=>{
  closeDebouce.cancel()
  closeDebouce()
}
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
if (!props.manual) {
  attachEvents()
}
watch(() => props.manual, () => {
  if (props.manual) {
    events = {}
    outterEvents = {}
  }
  else {
    attachEvents()
  }
})
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    close()
  }
  if(isOpen.value === true){
    emits('click-outside',true)
  }
})
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    events = {}
    outterEvents = {}
    attachEvents()
  }
})
watch(isOpen, (newValue) => {
  if (newValue) {
    if (popperNode.value && triggerNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post' })
onBeforeUnmount(() => {
  popperInstance?.destroy()
})
defineExpose<ToolTipInstance>({
  'show': openOnceDebouce,
  'hide': closeOnceDebouce
})
</script>
<template>
  <div class="yd-tooltip" v-on="outterEvents" ref="popperContainerNode">
    <div class="yd-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <transition :name="transition">
      <div class="yd-tooltip__popper" ref="popperNode" v-if="isOpen">
        <slot name='content'>
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>
