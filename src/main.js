/* eslint-disable no-console */
import * as illustrations from './components'

function installComponents (Vue, components) {
  Object.keys(components).forEach(name => {
    Vue.component(name, components[name])
  })
}

let installed = false

export function install (Vue, {color, noGlobalInstall}) {
  if (installed) {
    console.error('vue-undraw is already installed.')
    return
  }
  installed = true

  Vue.prototype.$vueUndrawColor = color ? color : null

  if (!noGlobalInstall) {
    installComponents(Vue, illustrations, {})
  }
}

export * from './components'
