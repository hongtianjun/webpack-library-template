import { version } from '../package.json'
import Hello from './components/Hello.vue'

var components = {
  Hello
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    var component = components[key]
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  version: version,
  install,
  Hello
}
