<template>
    <DocSectionText v-bind="$attrs">
        <p class="notification"><strong>Note</strong>: By the end of Q1 2024, PrimeVue v4 will be introduced with a modern theming architecture based on design tokens and css variables.</p>
        <p>
            PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The core resides
            inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors and spacing.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/architecture.jpg" class="w-full" />
    </DocSectionText>
</template>
