import type { InjectionKey } from "vue"
import type { RuleItem,ValidateError,ValidateFieldsError } from 'async-validator'
export interface FromItemProps{
  label:string,
  prop?: string
}
export interface FormProps{
  model: Record<string,any>,
  rules: Record<string,any>,
}
export interface FrmItemRule extends RuleItem{
  trigger?: string
}
export type FormRules = Record<string,RuleItem[]>
export interface FormContext extends FormProps{
  addFiled: (field: FormItemContext) => void,
  removeFiled: (field: FormItemContext) => void,
}
export interface FormValidateFailure{
  errors: ValidateError[] | null,
  fields: ValidateFieldsError
}
export const formContextKey:InjectionKey<FormContext> = Symbol('formContextKey')
export const itemContextKey:InjectionKey<FormItemContext> = Symbol('itemContextKey')

export interface FormItemContext{
  validate:(trigger?:string) => Promise<any>,
  prop: string,
  resetField(): void,
  clearValidate(): void
}
export interface FormItemInstance{
  validate:(trigger?:string) => Promise<any>,
  resetField(): void,
  clearValidate(): void,
  validateStatus:ValidateStatus
}
export interface ValidateStatus{
  state:'init' | 'success' | 'error' | 'loading',
  loading:boolean,
  errorMessage:string
}
export interface FormInstance {
  validate: () => Promise<any>,
  clearValidate:(props?:string[])=>void,
  resetFields:(props?:string[])=>void,
}

