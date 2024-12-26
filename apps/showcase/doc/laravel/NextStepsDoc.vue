<template>
    <DocSectionText v-bind="$attrs">
        <p>Welcome to the Prime UI Ecosystem! Once you have PrimeVue up and running, we recommend exploring the following resources to gain a deeper understanding of the library.</p>
        <ul class="leading-relaxed">
            <li><NuxtLink to="/configuration" class="doc-link">Global configuration</NuxtLink></li>
            <li><NuxtLink to="/autoimport" class="doc-link">Auto imports with tree-shaking</NuxtLink></li>
            <li><NuxtLink to="/theming/styled" class="doc-link">Customization of styles</NuxtLink></li>
            <li><NuxtLink to="/passthrough" class="doc-link">Pass through attributes</NuxtLink></li>
            <li><NuxtLink to="/support" class="doc-link">Getting support</NuxtLink></li>
        </ul>
    </DocSectionText>
</template>
