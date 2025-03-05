/* eslint-disable no-console */
import * as illustrations from './components'

function installComponents(app, components) {
  Object.keys(components).forEach(name => {
    app.component(name, components[name])
  })
}

let installed = false

export function install(app, options = {}) {
  if (installed) {
    console.error('vue-undraw is already installed.')
    return
  }
  installed = true

  // Provide the color globally using Vue 3's provide/inject
  app.provide('$vueUndrawColor', options.color || null)

  if (!options.noGlobalInstall) {
    installComponents(app, illustrations)
  }
}

export * from './components'
