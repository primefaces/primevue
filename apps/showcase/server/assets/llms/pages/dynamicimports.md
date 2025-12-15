# Dynamic Imports

Dynamic imports enable the loading of multiple items as needed, streamlining the import process.

## Overview

With @primevue/icons for icons and primevue for components (except Editor and Chart), multiple items can be imported together.

```vue
import { Button, InputText } from 'primevue'; import { SearchIcon, BellIcon } from '@primevue/icons';

<script setup>
import * as PrimeVue from 'primevue';

const items = [
    { as: 'Button', class: 'my-button-class' },
    { as: 'InputText', class: 'my-inputtext-class' }
};
</script>

<template>
    <component v-for="item of items" :is="PrimeVue[item.as]" :class="item.class" />
</template>
```
