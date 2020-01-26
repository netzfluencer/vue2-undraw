# vue-undraw
Vue Illustration Components from https://undraw.co/
For any requests open an issue on https://github.com/netzfluencer/vue-undraw/issues

## Installation
`npm install vue-undraw`

## Setup
You can use the vue-undraw in multiple approaches. Keep in mind that the total size of all illustrations goes beyond 20mb. A global usage in vue projects is technical possible, but not generaly not recommended.

### 1. Register a component by referencing to the specific Source
This is the most simplest approach to keep depended projects as small as possible, by importing only the illustrations which are needed.
```
import UndrawAddColor from 'vue-undraw/src/components/UndrawAddColor'

export default {
  components: {
    UndrawAddColor
  }
}
```

### 2. Register a component-module from '@netzfluencer/vue-undraw'
Similar to first approach. Benefits compared to first:
1. shorter and clearer imports
2. consistent illustrationnames

Feel free to take this approach if treeshaking is no problem. https://webpack.js.org/guides/tree-shaking/
```
import { UndrawAbstract, UndrawAddColor } from '@netzfluencer/vue-undraw'

export default {
  components: {
    UndrawAbstract
    UndrawAddColor
  }
}
```

### 3. Global installation
If project size does not need to be considered as much (e.g. in a design systems documentation env.) it is also possible to use the illustrations globally.

Just add this in your entrypoints js-file:
```
import * as VueUndraw from 'vue-undraw'

Vue.use(VueUndraw)
```

## Color Setup
By default the svgs colors are inherting the svgs/parents text-color. You can overwrite this colors by using the `vue-undraw` css-class or by setting it up in the installations options. (If you don't want to install the components globally you need to add the `noGlobalInstall: true` key too)
```
import * as VueUndraw from 'vue-undraw'

Vue.use(VueUndraw, {color: '#777777', noGlobalInstall: true})
```

-----------

## Project Development
```
npm install
```

### Renaming svgs
Rename saved svgs from undraw.co in the _illustrations dir. Some manual adjustments need to get done (e.g. removing a handfull of '-').
```
npm run rename
```

### Component Creation
Create vue components from svgs. Some manual adjustments need to get done (e.g. syntax errors in components/index.js)
```
npm run create
```

### Compiles and minifies for production
```
npm run build
```
