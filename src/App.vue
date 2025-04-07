<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types.ts';
import Collapse from './components/collapse/collapse.vue';
import CollapseItem from './components/collapse/CollapseItem.vue';
const buttoni = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttoni.value) {
    console.log(buttoni.value.ref)
  }
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  <div>
    <Button type='warning' plain ref="buttoni">test button</Button>
    <Button type="primary" plain >test button</Button>
    <Button type="primary" plain round>test button</Button>
    <Button type="danger" plain >test button</Button>
    <Button type="info" size="large" plain>test button</Button>
    <Button type="info" size="small" plain disabled>test button</Button>
  </div>
  <div>
    <Button type='warning'  ref="buttoni">test button</Button>
    <Button type="primary"  >test button</Button>
    <Button type="primary"  round>test button</Button>
    <Button type="danger"  >test button</Button>
    <Button type="info" size="large" >test button</Button>
    <Button type="info" size="small" disabled>test button</Button>
  </div>
    <Collapse>
      <CollapseItem name="a">
        <template #title>
          <h1>title1</h1>
        </template>
        <div>
          内容1
        </div>
      </CollapseItem>
      <CollapseItem name="b" disabled>
        <template #title>
          <h1>title2</h1>
        </template>
        <div>
          内容2
        </div>
      </CollapseItem>
      <CollapseItem name="c" title="标题三">
        <div>
          内容3
        </div>
      </CollapseItem>
    </Collapse>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
