<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The <a href="https://www.npmjs.com/package/tailwindcss-primeui" target="_blank" rel="noopener noreferrer">tailwindcss-primeui</a> is an official plugin by PrimeTek to provide first class integration between a Prime UI library like
            PrimeVue and Tailwind CSS. It is designed to work both in styled and unstyled modes. In styled mode, for instance the semantic colors such as primary and surfaces are provided as Tailwind utilities e.g. <i>bg-primary</i>,
            <i>text-surface-500</i>, <i>text-muted-color</i>.
        </p>
        <p>
            If you haven't already done so, start by integrating Tailwind into your project. Detailed steps for this process can be found in the Tailwind <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">documentation</a>.
            After successfully installing Tailwind, proceed with the installation of the PrimeUI plugin. This single npm package comes with two libraries: the CSS version is compatible with Tailwind v4, while the JS version is designed for Tailwind
            v3.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <h3>Tailwind v4</h3>
        <p>In the CSS file that contains the tailwindcss import, add the <i>tailwindcss-primeui</i> import as well.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <h3>Tailwind v3</h3>
        <p>Use the plugins option in your Tailwind config file to configure the plugin.</p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
npm i tailwindcss-primeui
`
            },
            code2: {
                basic: `
@import "tailwindcss";
@import "tailwindcss-primeui";
`
            },
            code3: {
                basic: `
// tailwind.config.js
import PrimeUI from 'tailwindcss-primeui';

export default {
    // ...
    plugins: [PrimeUI]
};
`
            }
        };
    }
};
</script>
