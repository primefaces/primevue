# Install PrimeVue with Laravel

Setting up PrimeVue in a Laravel project.

## Download

PrimeVue is available for download on npm registry .

```vue
# Using npm npm install primevue @primeuix/themes # Using yarn yarn add primevue @primeuix/themes # Using pnpm pnpm add primevue @primeuix/themes
```

## Examples

We've created various samples for the popular options in the Vue ecosystem. Visit the primevue-examples repository for more samples including laravel-quickstart and inertia-quickstart .

## Next Steps

Welcome to the Prime UI Ecosystem! Once you have PrimeVue up and running, we recommend exploring the following resources to gain a deeper understanding of the library. Global configuration Auto imports with tree-shaking Customization of styles Pass through attributes Getting support

## Plugin

PrimeVue plugin is required to be installed as an application plugin to set up the default configuration . The plugin is lightweight, and only utilized for configuration purposes.

```vue
import { createApp } from 'vue'; import PrimeVue from 'primevue/config'; const app = createApp(App); app.use(PrimeVue);
```

## Plugin

Configure PrimeVue to use a theme like Aura.

```vue
import { createApp } from 'vue'; import PrimeVue from 'primevue/config'; import Aura from '@primeuix/themes/aura'; const app = createApp(App); app.use(PrimeVue, { theme: { preset: Aura } });
```

## Verify

Verify your setup by adding a component such as Button . Each component can be imported and registered individually so that you only include what you use for bundle optimization. Import path is available in the documentation of the corresponding component.

```vue
import Button from "primevue/button" const app = createApp(App); app.component('Button', Button);
```

<details>
<summary>Composition API Example</summary>

```vue
<template>
    <div class="card flex justify-center">
        <Button label="Verify" />
    </div>
</template>

<script setup>
<\/script>
```

</details>
