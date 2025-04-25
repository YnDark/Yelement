<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import Button from './components/Button/Button.vue'
import type { ButtonInstance } from './components/Button/types.ts';
import Collapse from './components/Collapse/Collapse.vue';
import Icon from './components/Icon/Icon.vue';
import CollapseItem from './components/Collapse/CollapseItem.vue';
import Alert from './components/Alert/Alert.vue';
import type { AlertInstance } from './components/Alert/types';
import { createPopper } from '@popperjs/core';
import ToolTip from './components/Tooltip/Tooltip.vue'
import type { Options } from '@popperjs/core'
import type { ToolTipInstance } from './components/Tooltip/types';
import Dropdown from './components/Dropdown/Dropdown.vue';
import type { MenuOption } from './components/Dropdown/types';
import { h } from 'vue'
import { createMessage } from './components/Message/method';
import Input from './components/Input/Input.vue';
import Switch from './components/Switch/Switch.vue';
import Select from './components/Select/Select.vue';
import Form from './components/Form/Form.vue';
import FormItem from './components/Form/FormItem.vue';
const buttoni = ref<ButtonInstance | null>(null)
const alertInstance = ref<AlertInstance | null>(null)
const openValue = ref([])
const tooltipRef = ref<ToolTipInstance | null>(null)
const overlayNode = ref<HTMLElement>()
const triggerNode = ref<HTMLAnchorElement>()
const options: Partial<Options> = {
  strategy: 'absolute'
}
const dropdownOptions: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]
const model = reactive({
  email:'',
  password:'',
  confirmPwd:''
})
const rules = {
  email: [{type: 'string', required:'true',trigger:'blur'}],
  password: [{type: 'string', required:'true',trigger:'blur'}],
  confirmPwd: [{type: 'string', required:'true',trigger:'blur'},{
    validator:(rule:any, value:any) => value === model.password,trigger:'blur',message:'两个密码必须相同'
  }],
}
onMounted(() => {
  if (buttoni.value) {
    console.log(buttoni.value.ref)
  }
  if (alertInstance.value) {
    console.log(alertInstance.value.close)
  }
  if (overlayNode.value && triggerNode.value) {
    createPopper(triggerNode.value, overlayNode.value, { placement: 'right' })
  }
  console.log(tooltipRef)
  if (tooltipRef.value) {
    console.log(tooltipRef)
  }
  const instance = createMessage({ message: 'success', duration: 0, type: 'success', offset: 10 })
  createMessage({ message: 'danger', duration: 3000, type: 'danger', offset: 10 })
  createMessage({ message: 'info', duration: 0, type: 'info', offset: 10 })
  createMessage({ message: 'warning', duration: 0, type: 'warning', offset: 10 })
  createMessage({ message: 'success', duration: 0, type: 'success', offset: 10 })
  setTimeout(() => {
    instance.destroy()
  }, 1000);
})
const innerValue = ref('right')
import type { SelectOption } from './components/Select/types';

const test = ref('1')
const options2: SelectOption[] = [
  { label: 'hello', value: "1" },
  { label: 'hello2', value: "2" },
  { label: 'hello3', value: "3" },
  { label: 'hello4', value: "4" },
  { label: 'hello5', value: "5", disabled: true }
]
const customRender = (option: SelectOption) => {
  return h('div', { className: 'xyz' }, [h('b', option.label), h('span', option.value)])
}
const handleFetch = (query: any) => {
  if (!query) return Promise.resolve([])
  return fetch(`https://api.github.com/search/repositories?q=${query}`).then((res) => res.json()).then(({ items }) => {
    return items.slice(0, 10).map((item: any) => ({ label: item.name, value: item.node_id }))
  })
}
const formRef = ref()
const submit = async()=>{
  try{
    await formRef.value.validate()
  }
  catch(e){
    console.log(e)
  }
}
</script>

<template>
  <div>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div ref="triggerNode">
      <h1>Hello Vue</h1>
    </div>
  </div>
  <Icon icon="arrow-up" size="xl" type="danger" spin color="blue" />
  <div>
    <Button ref="buttoni">test button</Button>
    <Button loading>test button</Button>
    <Button round>test button</Button>
    <Button>test button</Button>
    <Button size="large">test button</Button>
    <Button size="small" disabled>test button</Button>
  </div>
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
    <Alert icon="xmark" title="标题" type="primary" align="center" closable ref="alertInstance">
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
    <Alert title="标题" type="success" align="center">
      <template
        #header>11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</template>
      <div>
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </div>
    </Alert>
  </div>
  <div>
    <ToolTip placement="right" transition="fade" :open-delay="200" :close-delay="200" content="Hello Vue"
      trigger="hover" :popper-options="options" ref="tooltipRef">
      <img alt="Vue logo" style="border: 1px solid black;" class="logo" src="./assets/logo.svg" width="125"
        height="125" />
      <template #content>
        <div>Hello ToolTip</div>
      </template>
    </ToolTip>
  </div>
  <div>
    <Dropdown transition="fade" :menu-options="dropdownOptions">
      <img alt="Vue logo" style="border: 1px solid black;" class="logo" src="./assets/logo.svg" width="125"
        height="125" />
    </Dropdown>
  </div>
  <div>
    <Input :showPassword="true" :modelValue="innerValue" type="text" :clearable="true">
    <template #prepend>
      prepend
    </template>
    <template #append>
      append
    </template>
    </Input>
    <Input :showPassword="true" :modelValue="innerValue" type="textarea" :clearable="true">
    </Input>
  </div>
  <div>
    <Switch inactive-text="左" active-text="右" v-model="innerValue" active-value="right" inactive-value="wrong"></Switch>
  </div>
  <div>
    <Select clearable :disabled="false" :options="options2" placeholder="测试" :model-value="test"></Select>
    <Select :render-lable="customRender" clearable :disabled="false" :options="options2" placeholder="测试"
      :model-value="test"></Select>
    <Select :filterable="true" :render-lable="customRender" :clearable="false" :disabled="false" :options="options2"
      placeholder="测试" :model-value="test"></Select>
    <Select :remote="true" :remote-method="handleFetch" :filterable="true" :render-lable="customRender"
      :clearable="false" :disabled="false" placeholder="测试" :model-value="test"></Select>
  </div>
  <div>
    <Form ref="formRef" :model="model" :rules="rules" >
      <FormItem label="测试" prop="email">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
        <Input v-model="model.email" :clearable="true">
        </Input>
      </FormItem>
      <FormItem label="测试" prop="password">
        <Input v-model="model.password" :showPassword="true" :clearable="true">
        </Input>
      </FormItem>
      <FormItem label="测试" prop="confirmPwd">
        <Input v-model="model.confirmPwd" :showPassword="true" :clearable="true">
        </Input>
      </FormItem>
      <FormItem label="测试" prop="email">
        <template #default="{ validate }">
          <input type="text" v-model="model.email" @blur="validate('blur')">
        </template>
      </FormItem>
      <button @click.prevent="submit">提交</button>
      <button @click.prevent="formRef.clearValidate">清除</button>
      <button @click.prevent="formRef.resetFields">重置</button>
    </Form>
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
