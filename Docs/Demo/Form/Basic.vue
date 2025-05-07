<template>
  <Form ref="formRef" :model="model">
    <FormItem label="邮箱" prop="email">
      <Input v-model="model.email" :clearable="true">
      </Input>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input v-model="model.password" :showPassword="true" :clearable="true">
      </Input>
    </FormItem>
    <FormItem label="确认密码" prop="confirmPwd">
      <Input v-model="model.confirmPwd" :showPassword="true" :clearable="true">
      </Input>
    </FormItem>
  </Form>
</template>
<script setup>
import Form from '../../../src/components/Form/Form.vue'
import FormItem from '../../../src/components/Form/FormItem.vue'
import Input from '../../../src/components/Input/Input.vue'
import { reactive, ref } from 'vue'
const model = reactive({
  email: '',
  password: '',
  confirmPwd: ''
})
const formRef = ref()
</script>
<style>
.bottom{
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
.input{
  border: 1px solid black;
}
</style>

