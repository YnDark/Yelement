export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type nativeType = 'button' | 'submit' | 'reset'
export interface ButtonInstance {
  ref: HTMLButtonElement
}
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  nativeType?: nativeType
  autofocus?: boolean
  icon?: string,
  loading? : boolean
}
