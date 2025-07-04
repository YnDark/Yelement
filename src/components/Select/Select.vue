<script setup lang='ts'>
import Icon from '@/components/Icon/Icon.vue';
import { debounce, isFunction } from 'lodash-es';
import { computed, inject, reactive, type Ref, ref, watch } from 'vue';
import RenderVnode from '../Common/RenderVnode';
import { itemContextKey } from '../Form';
import Input from '../Input/Input.vue';
import type { InputInstance } from '../Input/types';
import Tooltip from '../Tooltip/Tooltip.vue';
import type { ToolTipInstance } from '../Tooltip/types';
import type { SelectEmits, SelectOption, SelectProps, SelectStates } from './types';
const itemContext = inject(itemContextKey)
defineOptions({
  name: 'YSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => []
})
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
  mouseHover: false,
  loading: false,
  hightLightIndex: -1
})
const filteredPlaceholder = computed(() => {
  return (props.filterable && states.selectedOption && isDropDownShow.value) ? states.selectedOption.label : props.placeholder
})
const runValidation = (trigger?:string)=>{
  itemContext?.validate(trigger).catch(e=>{
    console.log(e.errors)
  })
}
const controlDropdwon = (show: boolean) => {
  if (show) {
    if (props.filterable && states.selectedOption) {
      states.inputValue = ''
    }
    if (props.filterable) {
      generateFilterOptions(states.inputValue)
    }
    toolTipRef.value.show()
  }
  else {
    toolTipRef.value.hide()
    if (props.filterable) {
      states.inputValue = states.selectedOption ? states.selectedOption.label : ''
    }
    states.hightLightIndex = -1
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
    runValidation('select')
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
const popperOptions: any = {
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
const showClearIcon = computed(() => {
  return states.mouseHover && props.clearable && states.inputValue.trim() !== '' && states.selectedOption
})
const filteredOptions = ref(props.options)
watch(() => props.options, (newOptions) => {
  filteredOptions.value = newOptions
})
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filteredOptions.value = props.filterMethod(searchValue)
  }
  else if (props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      filteredOptions.value = await props.remoteMethod(searchValue)
    } catch (e) {
      console.log(e)
      filteredOptions.value = []
    } finally {
      states.loading = false
    }
  }
  else {
    filteredOptions.value = props.options.filter(option => option.label.includes(searchValue))
  }
  states.hightLightIndex = -1;
}
const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
const clear = () => {
  states.selectedOption = null
  states.inputValue = ''
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
const NOOP = () => { }
const timeOut = computed(() => {
  return props.remote ? 300 : 0
})
const debounceOnFilter = debounce(() => {
  onFilter()
}, timeOut.value)
const handelKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      if (!isDropDownShow.value) {
        toggleDropdown()
      }
      else {
        if (states.hightLightIndex > -1 && filteredOptions.value[states.hightLightIndex]) {
          itemSelect(filteredOptions.value[states.hightLightIndex])
        }
        else {
          controlDropdwon(false)
        }
      }
      break
    case 'Escape':
      if (isDropDownShow.value) {
        controlDropdwon(false)
      }
      break
    case 'ArrowUp':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.hightLightIndex === -1 || states.hightLightIndex === 0) {
          states.hightLightIndex = filteredOptions.value.length - 1
        }
        else {
          states.hightLightIndex--
        }
      }
      break
    case 'ArrowDown':
      e.preventDefault()
      if (filteredOptions.value.length > 0) {
        if (states.hightLightIndex === -1 || states.hightLightIndex === filteredOptions.value.length - 1) {
          states.hightLightIndex = 0
        }
        else {
          states.hightLightIndex++
        }
      }
      break
    default:
      break
  }
}
</script>
<template>
  <div @mouseenter="states.mouseHover = true" @mouseleave="states.mouseHover = false" class="yd-select"
    :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
    <Tooltip @click-outside="controlDropdwon(false)" :popper-options="popperOptions" ref="toolTipRef"
      placement="bottom-start" :manual="true">
      <Input @keydown="handelKeydown" @input="debounceOnFilter" ref="inputInstance"
        :readonly="!filterable || !isDropDownShow" v-model="states.inputValue" :disabled="disabled"
        :placeholder="filteredPlaceholder">
      <template #suffix>
        <Icon @click.stop="clear" @mousedown.prevent="NOOP" icon="circle-xmark" v-if="showClearIcon"
          class="yd-input__clear"></Icon>
        <Icon v-else icon="angle-down" class="header-angle" :class="{
          'is-active': isDropDownShow
        }"></Icon>
      </template>
      </Input>
      <template #content>
        <div class="yd-select__loading" v-if="states.loading">
          <Icon icon="spinner" spin></Icon>
        </div>
        <div class="yd-select__nodata" v-else-if="filterable && filteredOptions.length === 0">no matching data</div>
        <ul class="yd-select__menu" v-else>
          <template v-for="(item, index) in filteredOptions" :key="index">
            <li @click.stop='itemSelect(item)' class="yd-select__menu-item"
              :class="{ 'is-highted': states.hightLightIndex === index, 'is-disabled': item.disabled, 'is-selected': states.selectedOption?.value === item.value }"
              :id="`select-item-${item.value}`">
              <RenderVnode :v-node="renderLable ? renderLable(item) : item.label"></RenderVnode>
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>
