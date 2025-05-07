<script setup>
import { ref } from 'vue'
import Select from '../../../src/components/Select/Select.vue'
const test = ref('')
const handleFetch = (query) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`).then((res) => res.json()).then(({ items }) => {
    return items.slice(0, 10).map((item) => ({ label: item.name, value: item.node_id }))
  })
}
</script>
<template>
  <Select :remote="true" :remote-method="handleFetch" :filterable="true"
  :clearable="false" :disabled="false" placeholder="远程搜索自动填充内容" v-model="test"></Select>
  <span>{{ test }}</span>
</template>
