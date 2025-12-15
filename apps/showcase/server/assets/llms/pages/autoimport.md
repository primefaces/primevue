# Auto Import

On-demand PrimeVue components with auto imports and tree-shaking.

## Example

A complete example using PrimeVue with auto imports is available at the playground .

## Overview

PrimeVue components need to be imported and configured individually. In the next section, we'll cleanup the code using auto imports.

```vue
import { createApp } from "vue"; import PrimeVue from "primevue/config"; import InputText from 'primevue/inputtext'; import Button from 'primevue/button'; import App from './App.vue' const app = createApp(App); app.use(PrimeVue);
app.component('InputText', InputText); app.component('Button', Button);
```

## Unplugin

The unplugin-vue-components library can automatically import and register PrimeVue components with the help of @primevue/auto-import-resolver . Begin with installing the packages as dev dependencies. Next step would be adding the PrimeVueResolver at vite.config using the Components plugin. That's it, now the initialization code can be refactored as the following. For configuration like namespacing, visit the official documentation .
