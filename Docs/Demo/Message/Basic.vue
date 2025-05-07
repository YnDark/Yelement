<script setup>
import { createMessage } from '../../../src/components/Message/method'
import Button from '../../../src/components/Button/Button.vue'
const showDangerMessage = ()=>{
  createMessage({ message: 'danger', duration: 3000, type: 'danger', offset: 10 })
}
const showInfoMessage = ()=>{
  createMessage({ message: 'info', duration: 3000, type: 'info', offset: 10 })
}
const showWarningMessage = ()=>{
  createMessage({ message: 'warning', duration: 3000, type: 'warning', offset: 10 })
}
const showSuccessMessage = ()=>{
  createMessage({ message: 'success', duration: 3000, type: 'success', offset: 10 })
}
</script>
<template>
  <Button @click="showDangerMessage" type="danger">显示danger消息</Button>
  <Button @click="showInfoMessage" type="info">显示info消息</Button>
  <Button @click="showWarningMessage" type="warning">显示warning消息</Button>
  <Button @click="showSuccessMessage" type="success">显示success消息</Button>
</template>
