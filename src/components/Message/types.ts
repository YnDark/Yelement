import type { ComponentInternalInstance, VNode } from "vue"

export interface MessageProps{
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info',
  message?: string | VNode,
  duration?: number,
  showClose?: boolean,
  onDestroy: ()=>void,
  offset?: number,
  id: string,
  zIndex: number
}
export interface MessageContext {
  id: string,
  vnode: VNode,
  props: MessageProps,
  vm:ComponentInternalInstance,
  destroy:()=>void
}
export type CreateMessageProp = Omit<MessageProps,'onDestroy' | 'id' | 'zIndex'>
