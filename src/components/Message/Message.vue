<script setup lang='ts'>
import type { MessageProps } from './types';
import RenderVnode from '../Common/RenderVnode';
import Icon from '../Icon/Icon.vue';
import { computed, onMounted, type Ref, ref } from 'vue';
import { watch } from 'vue';
import { getLastInstance,getLastBottomOffset } from './method';
import { nextTick } from 'vue';
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
    top: topOffset.value + 'px'
  }
})
function startTimer() {
  if (props.duration === 0) {
    return
  }
  setTimeout(() => {
    visible.value = false
  }, props.duration);
}
onMounted(async () => {
  visible.value = true
  startTimer()
  await nextTick()
  height.value = messageRef.value!.getBoundingClientRect().height
})
watch(visible, (newValue) => {
  if (!newValue) {
    props.onDestroy()
  }
})
defineExpose({bottomOffset})
</script>
<template>
  <div class="yd-message" v-show="visible" :class="{
    [`yd-message--${type}`]: type,
    'is-close': showClose
  }"
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
</template>
<style scoped>
.yd-message {
  width: max-content;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  border: 1px solid blue;
}
</style>
