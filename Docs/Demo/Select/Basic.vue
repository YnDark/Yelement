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
  <Select v-model="test" placeholder="基础选择器，请选择" :options="options" />
  <span>{{test}}</span>
</template>
