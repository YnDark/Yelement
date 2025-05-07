<script setup>
import { ref } from 'vue';
import Tooltip from '../../../src/components/Tooltip/Tooltip.vue'
import Button from '../../../src/components/Button/Button.vue'
const options = {
  strategy: 'absolute'
}
const tooltipRef = ref()
const tooltipRef2 = ref()
</script>
<template>
  <div>
    <Tooltip placement="right" transition="fade" :open-delay="200" :close-delay="200" content="Hello Vue"
        trigger="hover" :popper-options="options" ref="tooltipRef">
        <img alt="Vue logo" style="border: 1px solid black;" class="logo" src="../../assets/logo.svg" width="125"
          height="125" />
        <template #content>
          <div>悬浮显示/隐藏</div>
        </template>
    </Tooltip>
    <Button @click="tooltipRef.show()">手动显示</Button>
    <Button @click="tooltipRef.hide()">手动关闭</Button>
  </div>
  <div>
    <Tooltip placement="right" transition="fade" :open-delay="200" :close-delay="200" content="Hello Vue"
      trigger="click" :popper-options="options" ref="tooltipRef2">
      <img alt="Vue logo" style="border: 1px solid black;" class="logo" src="../../assets/logo.svg" width="125"
        height="125" />
      <template #content>
        <div>点击显示/隐藏</div>
      </template>
  </Tooltip>
  <Button @click="tooltipRef2.show()">手动显示</Button>
  <Button @click="tooltipRef2.hide()">手动关闭</Button>
  </div>
</template>
