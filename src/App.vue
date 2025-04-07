<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types.ts';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Alert from './components/Alert/Alert.vue';
import type { AlertInstance } from './components/Alert/types';
const buttoni = ref<ButtonInstance | null>(null)
const alertInstance = ref<AlertInstance | null>(null)
const openValue = ref([])
onMounted(() => {
  if (buttoni.value) {
    console.log(buttoni.value.ref)
  }
  if(alertInstance.value){
    console.log(alertInstance.value.close)
  }
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  <Icon icon="arrow-up" size="xl" type="danger" spin color="blue" />
  <div>
    <Button icon="arrow-up" type='warning' plain ref="buttoni">test button</Button>
    <Button loading type="primary" plain>test button</Button>
    <Button type="primary" plain round>test button</Button>
    <Button type="danger" plain>test button</Button>
    <Button type="info" size="large" plain>test button</Button>
    <Button type="info" size="small" plain disabled>test button</Button>
  </div>
  <div>
    <Button type='warning' ref="buttoni">test button</Button>
    <Button type="primary">test button</Button>
    <Button type="primary" round>test button</Button>
    <Button type="danger">test button</Button>
    <Button type="info" size="large">test button</Button>
    <Button type="info" size="small" disabled>test button</Button>
  </div>
  <div>
    <Collapse v-model="openValue">
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
  </div>
  <div>
    <Alert title="标题" type="primary" align="center" closable ref="alertInstance">
      <template #header>标题1</template>
      <div>
        <h1>描述</h1>
      </div>
    </Alert>
    <Alert title="标题" type="warning" align="left" closable>
      <template #header>标题2</template>
      <div>
        描述
      </div>
    </Alert>
    <Alert title="标题" type="danger" align="right" closable>
      <template #header>标题3</template>
      <div>
        描述
      </div>
    </Alert>
    <Alert title="标题" type="info" align="center">
      <template #header>标题4</template>
      <div>
        描述
      </div>
    </Alert>
    <Alert title="标题" type="success" align="center">
      <template #header>标题5</template>
      <div>
        描述
      </div>
    </Alert>
  </div>
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
