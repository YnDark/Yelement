# 开始
本节将介绍如何快速使用Yelement
## 完整引入
::: code-group

```js [config.js]
import { createApp } from 'vue'
import App from './App.vue'
import Yelement from 'yndarksy-element'
import 'yndarksy-element/dist/index.css'

createApp(App).use(Yelement).mount('#app')
```

```ts [config.ts]
import { createApp } from 'vue'
import App from './App.vue'
import Yelement from 'yndarksy-element'
import 'yndarksy-element/dist/index.css'

createApp(App).use(Yelement).mount('#app')
```

:::
## 按需引入
::: code-group

```vue [component.vue]
<script setup>
import { Button } from 'yndarksy-element'
import 'yndarksy-element/dist/index.css'
</script>

<template>
  <Button type="danger">测试</Button>
</template>
```

:::