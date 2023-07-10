
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevue.svg)](https://badge.fury.io/js/primevue)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)

[![PrimeVue Hero](https://user-images.githubusercontent.com/686247/138925407-2a7e916d-c674-4fb5-b721-1dd41a8eeebc.jpg)](https://primevue.org/)

# PrimeVue

PrimeVue is a rich set of open source UI Components for Vue. See [PrimeVue homepage](https://primevue.org/) for live showcase and documentation.

## Download

PrimeVue is available at [npm](https://www.npmjs.com/package/primevue).

````
// with npm
npm install primevue

// with yarn
yarn add primevue
````

## Plugin

PrimeVue plugin is required to be installed with the **use** function to set up the default [configuration](https://primevue.org/theming).

```javascript
import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue);
```

## Theming
PrimeVue has two theming has modes; styled or unstyled.

**Styled Mode**

Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the [Themes](https://primevue.org/theming) section for the complete list of available themes to choose from.

```javascript
// theme
import 'primevue/resources/themes/lara-light-blue/theme.css';
```

Each PrimeVue theme has its own font family so it is suggested to apply it to your application for a unified look.

```
body {
    font-family: var(--font-family);
}
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the PrimeVue plugin during installation, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://primevue.org/unstyled) documentation for more information and examples.

```javascript
import { createApp } from "vue";
import PrimeVue from "primevue/config";
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from "primevue/button"

const app = createApp(App);
app.component('Button', Button);
```


## Prop Cases

Component prop names are described as camel case throughout the documentation however kebap-case is also fully supported. Events on the other hand should always be kebap-case.

```vue
<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>
```


## Nuxt Integration

PrimeVue can easily be used with Nuxt 3 using a custom plugin.

**nuxt.config.js**

Open the nuxt configuration file and add the css dependencies.

```javascript
export default defineNuxtConfig({
    css: [
        "primevue/resources/themes/lara-light-blue/theme.css"
    ],
    build: {
      transpile: ["primevue"]
    }
})
```

**primevue.js**

Create a file like **primevue.js** under the plugins directory for the configuration.

```javascript
import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('Button', Button);
    //other components that you need
});
```

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [primevue-examples](https://github.com/primefaces/primevue-examples) repository for the samples.

### Vite
<a href="https://github.com/primefaces/primevue-examples/tree/main/vite-quickstart">
  <img src="https://primefaces.org/cdn/primevue/images/logos/vite.svg" alt="vite" width="112" height="112">
</a>

### Nuxt
<a href="https://github.com/primefaces/primevue-examples/tree/main/nuxt3-quickstart">
  <img src="https://primefaces.org/cdn/primevue/images/logos/nuxt.svg" alt="nuxt" width="112" height="112">
</a>

### Vue-CLI
<a href="https://github.com/primefaces/primevue-quickstart">
  <img src="https://primefaces.org/cdn/primevue/images/logos/vue.svg" alt="vue-cli" width="112" height="112">
</a>

### Astro
<a href="https://github.com/primefaces/primevue-examples/tree/main/astro-quickstart">
  <img src="https://primefaces.org/cdn/primevue/images/logos/astro.svg" alt="astro" width="112" height="112">
</a>

## Contributors

<a href="https://github.com/primefaces/primevue/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primevue" />
</a>
