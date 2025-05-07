<script setup>
import { ref } from 'vue'
import Select from '../../../src/components/Select/Select.vue'
const test = ref('1')
const options = [
  { label: 'hello', value: '1' },
  { label: 'xyz', value: '2' },
  { label: 'testing', value: '3' },
  { label: 'check', value: '4', disabled: true }
]
</script>
<template>
  <Select :filterable="true" :clearable="false" :disabled="false" :options="options"
  placeholder="可输入文本过滤" v-model="test"></Select>
  <span>{{ test }}</span>
</template>
