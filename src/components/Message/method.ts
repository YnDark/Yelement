import type { CreateMessageProp } from "./types"
import { render,h, shallowReactive } from "vue"
import MessageConstructor from './Message.vue'
import type { MessageContext } from "./types"
let seed = 1;
const instances:MessageContext[] = shallowReactive([])
export const createMessage = (props:CreateMessageProp) => {
  const id = `message_${seed++}`
  const container = document.createElement('div')
  const destroy = ()=>{
    render(null,container)
    const index = instances.findIndex(instance => instance.id === id)
    if(index === -1){
      return
    }
    instances.splice(index,1)
  }
  const newProps = {
    ...props,
    onDestroy:destroy,
    id
  }
  const vNode = h(MessageConstructor,newProps)
  render(vNode,container)
  document.body.appendChild(container.firstElementChild!)
  const vm = vNode.component!
  const instance = {
    id,
    vnode:vNode,
    props: newProps,
    vm
  }
  instances.push(instance)
  return instance
}
export const getLastInstance = () => {
  return instances.at(-1)
}
export const getLastBottomOffset = (id:string) => {
  const index = instances.findIndex(instance => instance.id === id)
  if(index<=0){
    return 0;
  }
  else{
    const pre = instances[index-1]
    return pre.vm.exposed!.bottomOffset.value
  }
}
