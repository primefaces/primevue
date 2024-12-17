<template>
    <DocSectionText v-bind="$attrs">
        <p>With <i>@primevue/icons</i> for icons and <i>primevue</i> for components (except Editor and Chart), multiple items can be imported together.</p>
    </DocSectionText>
    <pre v-code.script><code>
import { Button, InputText } from 'primevue';
import { SearchIcon, BellIcon } from '@primevue/icons';

</code></pre>
    <div class="doc-section-description mt-4">
        <p>On the other hand, they enable the loading of multiple items from a specific structure as needed, making code management easier.</p>
    </div>
    <pre v-code><code>
&lt;script setup&gt;
import * as PrimeVue from 'primevue';

const items = [
    { as: 'Button', class: 'my-button-class' },
    { as: 'InputText', class: 'my-inputtext-class' }
};
&lt;/script&gt;

&lt;template&gt;
    &lt;component v-for="item of items" :is="PrimeVue[item.as]" :class="item.class" /&gt;
&lt;/template&gt;

</code></pre>
</template>
