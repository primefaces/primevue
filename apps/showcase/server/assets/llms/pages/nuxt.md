# Install PrimeVue with Nuxt

Setting up PrimeVue in a Nuxt project.

## autoImport

The auto import feature registers components automatically with tree shaking support. Defaults to true , when disabled use include/exclude options of components and directives for manual registration. Use the prefix in components and directives to add a prefix for registration.

## Download

PrimeVue is available for download on npm registry along with the official @primevue/nuxt-module .

```vue
# Using npm npm install primevue @primeuix/themes npm install --save-dev @primevue/nuxt-module # Using yarn yarn add primevue @primeuix/themes yarn add --dev @primevue/nuxt-module # Using pnpm pnpm add primevue @primeuix/themes pnpm add -D
@primevue/nuxt-module
```

## Examples

Nuxt based samples with different options are available at PrimeVue examples repository.

## Module

In nuxt.config file, add the @primevue/nuxt-module to the modules section and define primevue object for the configuration of the module.

## Next Steps

Welcome to the Prime UI Ecosystem! Once you have PrimeVue up and running, we recommend exploring the following resources to gain a deeper understanding of the library. Global configuration Customization of styles Pass through attributes Getting support

## Styled Mode

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the styled mode documentation for details. Install the @primeuix/themes add-on package as the themes are not included in PrimeVue by default. Configure the module to use a theme like Aura.

## Theme

Configure the module to use a theme like Aura.

```vue
import Aura from '@primeuix/themes/aura'; export default defineNuxtConfig({ modules: [ '@primevue/nuxt-module' ], primevue: { options: { theme: { preset: Aura } } } })
```

## Unstyled Mode

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end, this is especially useful when building your own UI library on top of PrimeVue. Visit the Unstyled mode documentation for more information and examples.

## Verify

The nuxt-primevue module registers the components automatically with tree-shaking support so you may start using them instantly.

```vue
<Button label="Verify" />
```

## Video

A video tutorial that goes through steps of setting up PrimeVue with the nuxt-primevue module.

## components

When autoImport is disabled, use the include and exclude for manual registration. The components to import and register are defined with the include option using a string array. When the value is ignored or set using the \* alias, all of the components are registered. In case all components are imported, particular components can still be excluded with the exclude option. By default, for compatibility reasons, Chart and Editor components are excluded. To include them simply set the exclude option to an empty list. Use the prefix option to give a prefix to the registered component names. Component registration can be customized further by implementing the name function that gets an object representing the import metadata. name is the label of the component, as is the default export name and from is the import path.

## composables

Determines the composables to use, when default value is ignored or set as \* all composables are imported.

## directives

When autoImport is disabled, use the include and exclude for manual registration. The names of the directives to import and register are provided using the include property. When the value is ignored or set using the \* alias, all of the directives are registered. Similar to components, certain directives can be excluded and name registration can be customized.

## importPT

Configures the global pass through import path. mycustompt.js file defines the configuration and exports it.

## importTheme

Configures the theme configuration path for the customizations of a theme in styled mode. The mytheme.js file contains the theme configuration.

## options

Main configuration settings of PrimeVue, refer to the configuration documentation for details.

```vue
import Aura from '@primeuix/themes/aura'; export default defineNuxtConfig({ modules: [ '@primevue/nuxt-module' ], primevue: { options: { ripple: true, inputVariant: 'filled', theme: { preset: Aura, options: { prefix: 'p', darkModeSelector: 'system',
cssLayer: false } } } } })
```

## usePrimeVue

The module installs the PrimeVue plugin by default. Disable this option if you prefer to configure PrimeVue manually e.g. with a Nuxt plugin.

```vue
primevue: { usePrimeVue: true | false }
```
