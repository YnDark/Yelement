<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types.ts';
const buttoni = ref<ButtonInstance | null>(null)
onMounted(() => {
  if (buttoni.value) {
    console.log(buttoni.value.ref)
  }
})
</script>

<template>
  <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  <Button type='warning' plain ref="buttoni">test button</Button>
  <Button type="primary" plain ref="buttoni">test button</Button>
  <a href="">123</a>
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
