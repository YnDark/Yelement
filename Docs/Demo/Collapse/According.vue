<script setup lang='ts'>
import Collapse from '../../../src/components/Collapse/Collapse.vue'
import CollapseItem from '../../../src/components/Collapse/CollapseItem.vue'
const openValue = []
</script>
<template>
      <Collapse :according="true" v-model="openValue" >
      <CollapseItem name="a">
        <template #title>
          <h1>title1</h1>
        </template>
        <div>
          内容1
        </div>
      </CollapseItem>
      <CollapseItem name="b">
        <template #title>
          <h1>title2</h1>
        </template>
        <h1>title2</h1>
        <div>
          内容2
        </div>
      </CollapseItem>
      <CollapseItem name="c" title="标题三">
        <template #title>
          <h1>title3</h1>
        </template>
        <div>
          内容3
        </div>
      </CollapseItem>
    </Collapse>
</template>
