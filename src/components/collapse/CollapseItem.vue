<script setup lang='ts'>
import type { CollapseItemProps } from './types';
import { inject,computed } from 'vue';
import { collapseContextKey } from './types';
import './style.css'
import Icon from '../icon/Icon.vue'
defineOptions({
  name:'yd-collapse-item'
})
const props = defineProps<CollapseItemProps>()
const collapseContext = inject(collapseContextKey)
const isActive = computed(()=>collapseContext?.activeNames.value.includes(props.name))
const handleClick = ()=>{
  if(props.disabled){return}
  collapseContext?.handleItemClick(props.name)
}
const transitionEvents:Record<string,(el: HTMLElement)=>void> = {
  beforeEnter(el){
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el){
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el){
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el){
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  Leave(el){
    el.style.height = '0px'
  },
  afterLeave(el){
    el.style.height = ''
    el.style.overflow = ''
  }
}
</script>
<template>
  <div class="yd-collapse-item"
  :class="{
    'is-disabled':disabled
  }">
    <div class="yd-collapse-item__header"
    :id="`item-header-${name}`"
    @click="handleClick"
    :class="{
      'is-disabled':disabled,
      'is-active':isActive
    }">
      <slot name="title" >{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="yd-collapse-item__wrapper" v-show="isActive">
        <div class="yd-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
