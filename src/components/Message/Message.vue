<script setup lang='ts'>
import type { MessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { computed, onMounted, type Ref, ref } from 'vue';

import { getLastInstance,getLastBottomOffset } from './method';
import { nextTick } from 'vue';
import useEventLisener from '@/hooks/useEventLinsener';
defineOptions({
  name:'Ydmessage'
})
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info',
  duration: 3000,
  offset: 0
})
const prevInstance = getLastInstance()
console.log(prevInstance)
const visible = ref(false)
const messageRef = ref() as Ref<HTMLDivElement>
//计算偏移高度
const height = ref(0)
const lastOffset = computed(() => {
  return getLastBottomOffset(props.id)
})
const topOffset = computed(()=>{
  return props.offset + lastOffset.value
})
const bottomOffset = computed(()=>{
  return height.value + topOffset.value
})
const cssStyle = computed(()=>{
  return {
    top: topOffset.value + 'px',
    "z-index":props.zIndex
  }
})
let timer:any;
function startTimer() {
  if (props.duration === 0) {
    return
  }
  timer = setTimeout(() => {
    visible.value = false
  }, props.duration);
}
function clearTimer(){
  clearTimeout(timer)
}
onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
})
function keydown(e:Event){
  const event = e as KeyboardEvent
  if(event.code === 'Escape'){
    visible.value = false
  }
}
useEventLisener(document,'keydown',keydown)
function destroyComponent(){
  props.onDestroy()
}
function updateHeight(){
  height.value = messageRef.value!.getBoundingClientRect().height
}
defineExpose({bottomOffset,visible})
</script>
<template>
  <Transition name="fade"
  @afterLeave="destroyComponent"
  @enter="updateHeight">
    <div class="yd-message" v-show="visible" :class="{
      [`yd-message--${type}`]: type,
      'is-close': showClose
    }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    :style="cssStyle"
    ref="messageRef">
      <div class="yd-message__content">
        <slot>
          <RenderVnode :vNode="message" v-if="message"></RenderVnode>
        </slot>
      </div>
      <div class="yd-message__close">
        <Icon icon='xmark' @click.stop="visible = false" />
      </div>
    </div>
  </Transition>
</template>
