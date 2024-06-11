[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/primevue.svg)](https://badge.fury.io/js/primevue)
[![Discord Chat](https://img.shields.io/discord/557940238991753223.svg?color=7289da&label=chat&logo=discord)](https://discord.gg/gzKFYnpmCY)
[![Prime Discussions](https://img.shields.io/github/discussions-search?query=org%3Aprimefaces&logo=github&label=Prime%20Discussions&link=https%3A%2F%2Fgithub.com%2Forgs%2Fprimefaces%2Fdiscussions)](https://github.com/orgs/primefaces/discussions)

[![PrimeVue Hero](https://www.primefaces.org/static/social/primevue-preview.jpg)](https://primevue.org/)

# PrimeVue

PrimeVue is a rich set of open source UI Components for Vue. See [PrimeVue homepage](https://primevue.org/) for live showcase and documentation.

## Download

PrimeVue is available at [npm](https://www.npmjs.com/package/primevue).

```bash
# Using npm
npm install primevue

# Using yarn
yarn add primevue

# Using pnpm
pnpm add primevue
```

## Plugin

PrimeVue plugin is required to be installed as an application plugin to set up the default [configuration](https://primevue.org/configuration). The plugin is lightweight, only sets up the configuration object without affecting your application. PrimeVue has two styling modes; Styled and Unstyled. If you are just getting started, we suggest to using the styled mode.

```javascript
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
const app = createApp(App);

app.use(PrimeVue);
```

## Theming

PrimeVue has two theming has modes; styled or unstyled.

**Styled Mode**

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color.

```javascript
import { createApp } from 'vue';
import PrimeVueStyled from 'primevue/config';
const app = createApp(App);

app.use(PrimeVueStyled);
```

**Unstyled Mode**

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end. If you are using Tailwind CSS, visit the [Tailwind Presets](https://tailwind.primevue.org) project to get you started with styling the components with Tailwind utility classes.

```javascript
import { createApp } from 'vue';
import PrimeVueUnstyled from 'primevue/config';
const app = createApp(App);

app.use(PrimeVueUnstyled);
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

The [nuxt-primevue](https://www.npmjs.com/package/nuxt-primevue) package is the official module by PrimeTek. See the nuxt documentation for details. [information](https://primevue.org/nuxt)

## Example

We've created various samples for the popular options in the Vue ecosystem. Visit the [primevue-examples](https://github.com/primefaces/primevue-examples) repository for the samples.

## Contributors

<a href="https://github.com/primefaces/primevue/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=primefaces/primevue" />
</a>
