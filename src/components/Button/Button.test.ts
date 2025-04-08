import { describe, test, expect } from "vitest";
import Button from "./Button.vue";
import { mount } from '@vue/test-utils'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Icon from "../Icon/Icon.vue";
describe('Button.vue',()=>{
  test('basic button',()=>{
    const wrapper = mount(Button,{
      props:{
        type:'primary'
      },
      slots: {
        default: 'button'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.classes()).toContain('yd-button--primary')
    expect(wrapper.get('button').text()).toBe('button')
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
  test('disabled button',()=>{
    const wrapper = mount(Button,{
      props:{
        type:'primary',
        disabled:true
      },
      slots: {
        default: 'disabled'
      }
    })
    console.log(wrapper.html())
    expect(wrapper.classes()).toContain('yd-button--primary')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.get('button').text()).toBe('disabled')
    wrapper.get('button').trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
  test('icon',()=>{
    const wrapper = mount(Button,{
      props: {
        icon:'arrow-up'
      },
      slots:{
        default:'icon'
      },
      global:{
        stubs: ['FontAwesomeIcon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(FontAwesomeIcon)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('icon')).toBe('arrow-up')
  })
  test('loading',()=>{
    const wrapper = mount(Button,{
      props: {
        loading:true
      },
      slots:{
        default:'loading'
      },
      global:{
        stubs: ['Icon']
      }
    })
    console.log(wrapper.html())
    const iconElement = wrapper.findComponent(Icon)
    expect(iconElement.exists()).toBe(true)
    expect(iconElement.attributes('icon')).toBe('spinner')
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
