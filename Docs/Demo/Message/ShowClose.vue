<script setup>
import { createMessage } from '../../../src/components/Message/method'
import Button from '../../../src/components/Button/Button.vue'
const open = ()=>{
  createMessage({ message: '可关闭', duration: 0, type: 'success', offset: 10 ,showClose:true})
  createMessage({ message: '不可关闭', duration: 0, type: 'danger', offset: 10 ,showClose:false})
}
</script>
<template>
  <Button @click="open">打开消息</Button>
</template>
