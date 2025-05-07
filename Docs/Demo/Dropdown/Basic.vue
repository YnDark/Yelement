<template>
  <Dropdown transition="fade" :menu-options="dropdownOptions">
    <img alt="Vue logo" style="border: 1px solid black;" class="logo" src="../../assets/logo.svg" width="125"
      height="125" />
  </Dropdown>
</template>
<script setup>
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue'
import { h } from 'vue';
const dropdownOptions = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
</script>
