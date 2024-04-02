<template>
    <DocSectionText v-bind="$attrs">
        <p class="notification">
            <strong>Note</strong>: PrimeVue v4 has a brand new styled mode implementation, visit the <a href="https://v4.primevue.org/theming/styled" target="_blank" rel="noopener noreferrer">v4 documentation</a> for more information.
        </p>
        <p>
            PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The core resides
            inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors and spacing.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/architecture.jpg" class="w-full" />
    </DocSectionText>
</template>
