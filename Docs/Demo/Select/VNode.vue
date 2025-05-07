<script setup>
import { ref, h } from 'vue'
import Select from '../../../src/components/Select/Select.vue'
const test = ref('1')
const options = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'check', value: '4', disabled: true }
]
const customRender = (option) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', option.value)])
}
</script>
<template>
  <Select :render-lable="customRender" :disabled="false" :options="options" placeholder="自定义模板label+value"
    v-model="test"></Select>
  <span>{{ test }}</span>
</template>
