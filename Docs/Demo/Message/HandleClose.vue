<script setup>
import { createMessage } from '../../../src/components/Message/method'
import Button from '../../../src/components/Button/Button.vue'
let instance = []
const open = ()=>{
  instance.push(createMessage({ message: 'success', duration: 0, type: 'success', offset: 10 }))
}
const close = ()=>{
  instance.shift().destroy()
}

</script>
<template>
  <Button @click="open">打开消息</Button>
  <Button @click="close">手动销毁</Button>
</template>
