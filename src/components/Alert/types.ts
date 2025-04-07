export interface alertProps{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info',
  title?: string,
  icon?: string,
  description?: string,
  align?: 'center' | 'left' | 'right',
  closable?: boolean
}
export interface ColseEmits{
  (e:'close'):void
}

export interface AlertInstance{
  close:()=>void
}
