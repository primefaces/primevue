# nuxt



## autoImport

The auto import feature registers components automatically with tree shaking support. Defaults to true , when disabled use include/exclude options of components and directives for manual registration. Use the prefix in components and directives to add a prefix for registration.

## Download

PrimeVue is available for download on npm registry along with the official @primevue/nuxt-module .

```vue
# Using npm
npm install primevue @primeuix/themes
npm install --save-dev @primevue/nuxt-module

# Using yarn
yarn add primevue @primeuix/themes
yarn add --dev @primevue/nuxt-module

# Using pnpm
pnpm add primevue @primeuix/themes
pnpm add -D @primevue/nuxt-module
```

## ExamplesDoc

Nuxt based samples with different options are available at PrimeVue examples repository.

## Module

In nuxt.config file, add the @primevue/nuxt-module to the modules section and define primevue object for the configuration of the module.

## NextStepsDoc

Welcome to the Prime UI Ecosystem! Once you have PrimeVue up and running, we recommend exploring the following resources to gain a deeper understanding of the library. Global configuration Customization of styles Pass through attributes Getting support

## StyledModeDoc

Styled mode provides pre-skinned components, default theme is Aura with emerald as the primary color. See the styled mode documentation for details. Install the @primeuix/themes add-on package as the themes are not included in PrimeVue by default. Configure the module to use a theme like Aura.

## Theme

Configure the module to use a theme like Aura.

## UnstyledModeDoc

In unstyled mode, the components do not include any CSS so you'd need to style the components on your end, this is especially useful when building your own UI library on top of PrimeVue. Visit the Unstyled mode documentation for more information and examples.

## Verify

The nuxt-primevue module registers the components automatically with tree-shaking support so you may start using them instantly.

```vue
<Button label="Verify" />
```

## VideoDoc

A video tutorial that goes through steps of setting up PrimeVue with the nuxt-primevue module.

