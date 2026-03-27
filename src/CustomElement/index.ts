// 从vue中引入defineCustomElement
import { defineCustomElement } from 'vue'
// 引入Vue组件
import VueDarkModeSwitch from './index.ce.vue'
// 使用defineCustomElement包装VueDartModeSwitch，并导出
export const DarkModeSwitch = defineCustomElement(VueDarkModeSwitch)
// 导出register方法，方便自定义组件标签名
export function register (tagName: string = 'dark-mode-switch') {
  customElements.define(tagName, DarkModeSwitch)
}