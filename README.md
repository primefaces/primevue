[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevue.svg)](https://badge.fury.io/js/primevue)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Prime Discussions](https://img.shields.io/github/discussions-search?query=org%3Aprimefaces&logo=github&label=Prime%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fprimefaces%2Fdiscussions)](https://github.com/orgs/primefaces/discussions)

[![PrimeVue Hero](https://www.primefaces.org/static/social/primevue-preview.jpg)](https://primevue.org/)

# PrimeVue

PrimeVue is a rich set of open source UI Components for Vue. See [PrimeVue homepage](https://primevue.org/) for live showcase and documentation.

## Download

PrimeVue is available at [npm](https://www.npmjs.com/package/primevue).

```
# Using npm
npm install primevue

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue
```

## Plugin

PrimeVue plugin is required to be installed with the **use** function to set up the default [configuration](https://primevue.org/configuration).

```javascript
import { createApp } from 'vue';
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
import 'primevue/resources/themes/aura-light-green/theme.css';
```

**Unstyled Mode**

Unstyled mode is disabled by default for all components. Using the PrimeVue plugin during installation, set `unstyled` as true to enable it globally. Visit the [Unstyled mode](https://primevue.org/unstyled) documentation for more information and examples.

```javascript
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue, { unstyled: true });
```

## Usage

Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.

```javascript
import Button from 'primevue/button';

const app = createApp(App);
app.component('Button', Button);
```

## Prop Cases

Component prop names are described as camel case throughout the documentation however kebab-case is also fully supported. Events on the other hand should always be kebab-case.

```vue
<Dialog :showHeader="false"></Dialog>

<!-- can be written as -->

<Dialog :show-header="false"></Dialog>
```

## Nuxt Integration

The [nuxt-primevue](https://www.npmjs.com/package/nuxt-primevue) package is the official module by PrimeTek.

```
# Using npm
npm install --save-dev nuxt-primevue

# Using yarn
yarn add --dev nuxt-primevue

# Using pnpm
pnpm add -D nuxt-primevue
```

The module is enabled by adding `nuxt-primevue` to the modules option. Configuration values are defined with the `primevue` property.

```javascript
export default defineNuxtConfig({
    modules: ['nuxt-primevue'],
    primevue: {
        /* Options */
    }
});
```

Whether to install the PrimeVue plugin, defaults to true. Disable this option if you prefer to configure PrimeVue manually e.g. with a Nuxt plugin.

```javascript
primevue: {
    usePrimeVue: true;
}
```

The names of the components, directives and composables to import and register are provided using the include property. When the value is ignored or set using the \* alias, all of the components, directives and composables are registered respectively.

```javascript
primevue: {
    components: {
        include: ['Button', 'DataTable']
    },
    directives: {
        include: ['Ripple', 'Tooltip']
    },
    composables: {
        include: ['useStyle']
    }
}
```

In styled mode, the theme can be defined at Nuxt configuration with the css property. Note that this only applies to styled mode, in unstyled mode a theme file is not required as styling is done externally.

```javascript
export default defineNuxtConfig({
    css: ['primevue/resources/themes/aura-dark-green/theme.css']
});
```

For detailed [information](https://primevue.org/nuxt)

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [primevue-examples](https://github.com/primefaces/primevue-examples) repository for the samples.

## Contributors

<a href="https://github.com/primefaces/primevue/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primevue" />
</a>
