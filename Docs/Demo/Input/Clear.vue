<script setup>
import { ref } from 'vue'
import Input from '../../../src/components/Input/Input.vue'
const test = ref('')
</script>
<template>
  <Input v-model="test" clearable placeholder="输入字符以后可以点击清空"/>
</template>
