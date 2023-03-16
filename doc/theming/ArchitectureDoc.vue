<template>
    <DocSectionText v-bind="$attrs">
        <p class="line-height-3 bg-indigo-600 text-white p-3 text-lg" style="border-radius: 10px">
            <strong>Note</strong>: In upcoming versions, theming architecture will be redesigned to utilize CSS variables instead of SCSS variables in a backward compatible way for a dynamic approach. In addition, a new <strong>Unstyled</strong> mode
            will be provided as an alternative to the default styling so that CSS libraries like Tailwind or Bootstrap can be used to style the components. This work is planned to be completed by the end of Q2 2023.
        </p>
        <p>
            PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The core resides
            inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors and spacing.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/architecture.jpg" class="w-full" />
    </DocSectionText>
</template>
