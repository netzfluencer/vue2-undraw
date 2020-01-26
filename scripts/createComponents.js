/* eslint-disable no-console */
const fs = require('fs')
const { dir, componentsDir, color } = require('./_scripts.config.js')
const cheerio = require('cheerio')

const template = (name, {innerSvg, viewBox}) => `
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" viewBox="${viewBox}" :class="classes">
    ${innerSvg}
  </svg>
</template>

<script>
import { undrawMixin } from './undraw.mixin'

export default {
  mixins: [undrawMixin('${name}')]
}
</script>
`


const files = fs.readdirSync(dir)

let indexJs = {
  import: '',
  exports: ''
}

files.forEach((file, i) => {
  fs.readFile(dir + '/' + file, (e, data) => {
    let $ = cheerio.load(data)

    let innerSvg = $('svg').html()
    let viewBox = $('svg').attr('viewBox')

    file = file.substr(0, file.lastIndexOf('.')) || file

    let content = template(file, {innerSvg, viewBox})
    content = content.replace(new RegExp(`(fill="${color}"|stroke="${color}")`, 'g'), ':style="style"')

    fs.writeFile(componentsDir + '/' + file + '.vue', content, (e) => {
      if (e) console.error(e)
    })
  })

  file = (file.substr(0, file.lastIndexOf('.')) || file)

  indexJs.imports += `import ${file} from './${file}'\n`
  indexJs.exports += (i > 0) ? `,\n${file}` : file
})



fs.writeFile(componentsDir + '/' + 'index.js', `
${indexJs.imports}

export {
${indexJs.exports}
}
`, (e) => {
  if (e) console.error(e)
})
