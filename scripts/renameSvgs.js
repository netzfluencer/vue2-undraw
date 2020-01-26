/* eslint-disable no-console */
const illustrationDir = require('./_scripts.config.js').dir
const fs = require('fs')

const oldNames = fs.readdirSync(illustrationDir)

function camelize(str) {
  str = str.replace(/_/g, ' ').replace(/\s\w+\.svg/g, '')
  return 'Undraw' + str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) {
    return word.toUpperCase()
  }).replace(/\s+/g, '') + '.svg'
}

oldNames.forEach(name => {
  fs.rename(`${illustrationDir}/${name}`, `${illustrationDir}/${camelize(name)}`, () => {})
})
