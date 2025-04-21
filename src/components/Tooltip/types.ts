import type { Placement, Options } from '@popperjs/core'
export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click'
  placement?: Placement,
  manual?: boolean,
  popperOptions?: Partial<Options>,
  transition?: string,
  openDelay?: number,
  closeDelay?:number
}

export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void
  (e: 'click-outside', value: boolean): void
}

export interface ToolTipInstance{
  show: ()=> void
  hide: ()=> void
}
