<template>
  <Form ref="formRef" :model="model" :rules="rules">
      <FormItem label="邮箱" prop="email">
        <template #label="{ label }">
          <Button>{{ label }}</Button>
        </template>
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
      <FormItem label="邮箱" prop="email">
        <template #default="{ validate }">
          <input class="input" type="text" v-model="model.email" @blur="validate('blur')">
        </template>
      </FormItem>
      <div style="display: flex; justify-content: center;">
        <button class="bottom" @click.prevent="submit">提交</button>
        <button class="bottom" @click.prevent="formRef.clearValidate">清除</button>
        <button class="bottom" @click.prevent="formRef.resetFields">重置</button>
      </div>
    </Form>
</template>
<script setup>
import Form from '../../../src/components/Form/Form.vue'
import FormItem from '../../../src/components/Form/FormItem.vue'
import Input from '../../../src/components/Input/Input.vue'
import Button from '../../../src/components/Button/Button.vue'
import { reactive, ref } from 'vue'
const model = reactive({
  email: '',
  password: '',
  confirmPwd: ''
})
const formRef = ref()
const rules = {
  email: [{ type: 'string', required: 'true', trigger: 'blur' }],
  password: [{ type: 'string', required: 'true', trigger: 'blur' }],
  confirmPwd: [{ type: 'string', required: 'true', trigger: 'blur' }, {
    validator: (rule, value) => value === model.password, trigger: 'blur', message: '两个密码必须相同'
  }],
}
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

