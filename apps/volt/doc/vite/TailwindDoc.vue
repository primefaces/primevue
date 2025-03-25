<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Volt requires Tailwind CSS v4+ for theming. The prerequisite steps are covered by the <a href="https://tailwindcss.com/docs/guides/vite#vue" target="_blank" rel="noopener noreferrer">Install Tailwind CSS with Vite</a> guide. If you have
            Vite and Tailwind configured successfully, follow the next steps.
        </p>
        <p>
            After successfully installing Tailwind, proceed with the installation of the <a href="https://primevue.org/tailwind/#extensions" target="_blank" rel="noopener noreferrer">tailwindcss-primeui</a> plugin. This plugin extends Tailwind with
            new utility classes such as <i>text-primary</i>, <i>bg-surface-500</i>, and adds new variants with the <i>p-</i> prefix including <i>p-selected</i>.
        </p>
        <DocSectionCode :code="code1" />

        <p>In the CSS file that contains the tailwindcss import, add the <i>tailwindcss-primeui</i> import as well.</p>
        <DocSectionCode :code="code2" lang="script" />
    </DocSectionText>
</template>

<script setup>
import { ref } from 'vue';

const code1 = ref(`
npm i tailwindcss-primeui
`);

const code2 = ref(`@import "tailwindcss";
@import "tailwindcss-primeui";
`);
</script>
