<script setup lang='ts'>
import type { alertProps } from './types';
import Icon from '../Icon/Icon.vue';
import { ref } from 'vue';
defineOptions({
  name: 'alert'
})
defineProps<alertProps>()
const isShow = ref(true)
const handleClose = () => {
  isShow.value = false
}
</script>
<template>
  <Transition name="fade">
    <div v-if="isShow" class="yd-alert" :class="{
      [`yd-alert--${type}`]: type,
      [`yd-alert--${align}`]: align,
      'closable': closable,
    }">
      <span class="yd-alert__container">
        <div class="yd-alert__header">
          <Icon v-if="icon" :icon="icon"></Icon>
          <slot name="header">
            {{ title }}
          </slot>
        </div>
        <div class="yd-alert__content">
          <slot>
            {{ description }}
          </slot>
        </div>
      </span>
      <span class="yd-alert__icon" v-if="closable" @click="handleClose">
        <Icon icon="xmark"></Icon>
      </span>
    </div>
  </Transition>
</template>
