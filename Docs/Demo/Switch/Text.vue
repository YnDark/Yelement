<script setup>
import { ref } from 'vue'
import Switch from '../../../src/components/Switch/Switch.vue'
const test = ref(false)
</script>
<template>
  <Switch v-model="test" activeText="ON" inactiveText="OFF"/>
</template>
