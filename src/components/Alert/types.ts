export interface alertProps{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info',
  title?: string,
  icon?: string,
  description?: string,
  align?: 'center' | 'left' | 'right',
  closable?: boolean
}
export interface ColseEmits{
  (e:MouseEvent):void
}
