<script setup lang='ts'>
import type { SelectProps, SelectOption, SelectEmits,SelectStates } from './types';
import Tooltip from '../Tooltip/Tooltip.vue';
import Input from '../Input/Input.vue';
import { computed, reactive, type Ref, ref, watch } from 'vue'
import type { ToolTipInstance } from '../Tooltip/types';
import type { InputInstance } from '../Input/types';
import Icon from '../Icon/Icon.vue';
import RenderVnode from '../Common/RenderVnode';
defineOptions({
  name: 'YdSelect'
})
const props = defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()
const toolTipRef = ref() as Ref<ToolTipInstance>
const inputInstance = ref() as Ref<InputInstance>
const isDropDownShow = ref(false)
const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}
const initOption = findOption(props.modelValue)
const states = reactive<SelectStates>({
  inputValue: initOption ? initOption.label : '',
  selectedOption: initOption,
  mouseHover: false
})

const controlDropdwon = (show: boolean) => {
  if (show) {
    toolTipRef.value.show()
  }
  else {
    toolTipRef.value.hide()
  }
  isDropDownShow.value = show
  emits('visible-change', show)
}
const toggleDropdown = () => {
  if (props.disabled) return
  if (isDropDownShow.value) {
    controlDropdwon(false)
  }
  else {
    controlDropdwon(true)
  }
}
const itemSelect = (e: SelectOption) => {
  if (e.disabled) return
  states.inputValue = e.label
  states.selectedOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  toggleDropdown()
  inputInstance.value.ref.focus()
}
const popperOptions:any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}
const showClearIcon = computed(()=>{
  return states.mouseHover && props.clearable && states.inputValue.trim() !== '' && states.selectedOption
})
const clear = () => {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change','')
  emits('update:modelValue','')
}
const NOOP = ()=>{}
</script>
<template>
  <div @mouseenter="states.mouseHover = true" @mouseleave="states.mouseHover = false" class="yd-select" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip @click-outside="controlDropdwon(false)" :popper-options="popperOptions" ref="toolTipRef" placement="bottom-start" :manual="true">
      <Input ref="inputInstance" readonly v-model="states.inputValue" :disabled="disabled" :placeholder="placeholder">
        <template #suffix>
          <Icon @click.stop = "clear" @mousedown.prevent = "NOOP" icon="circle-xmark" v-if="showClearIcon" class="yd-input__clear"></Icon>
          <Icon v-else icon="angle-down" class="header-angle" :class="{
            'is-active':isDropDownShow
          }"></Icon>
        </template>
      </Input>
      <template #content>
        <ul class="yd-select__menu">
          <template v-for="(item, index) in options" :key="index">
            <li @click.stop='itemSelect(item)' class="yd-select__menu-item" :class="{ 'is-disabled': item.disabled,'is-selected':states.selectedOption?.value === item.value }"
              :id="`select-item-${item.value}`">
              <RenderVnode :v-node="renderLable ? renderLable(item) : item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
