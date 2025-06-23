<script setup lang='ts'>
import type { DropdownEmits, DropdownProps, MenuOption, DropdownInstance } from './types';
import Tooltip from '../Tooltip/Tooltip.vue';
import { type Ref, ref } from 'vue';
import type{  ToolTipInstance } from '../Tooltip/types';
import RenderVnode from '../Common/RenderVnode';
defineOptions({
  name:'YDropdown'
})
const props = withDefaults(defineProps<DropdownProps>(),{
  hideAfterClick: true
})
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref() as Ref<ToolTipInstance>
const visibelChange = (e: boolean) => {
  emits('visible-change', e)
}
const itemClick = (e: MenuOption)=>{
  if(e.disabled){
    return
  }
  emits('select',e)
  if(props.hideAfterClick){
    tooltipRef.value.hide()
  }
}
defineExpose<DropdownInstance>({
  show:tooltipRef.value?.show,
  hide:tooltipRef.value?.hide,
})
</script>
<template>
  <div class="yd-Dropdown">
    <Tooltip :trigger="trigger" :placement="placement" :popper-options="popperOptions" :open-delay="openDelay"
      :close-delay="closeDelay" @visible-change="visibelChange" ref="tooltipRef">
      <slot></slot>
      <template #content>
        <ul class="yd-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided"
              role="separator"
              class="divided-placeholder"
              @click="itemClick(item)">
              {{ item.label }}
            </li>
            <li
            v-else
            @click="itemClick(item)"
            class="yd-dropdown__item"
            :class="{'is-disabled':item.disabled,'is-devided':item.divided}"
            :id="`dropdown-item-${item.key}`">
              <RenderVnode :vNode="item.label"/>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
