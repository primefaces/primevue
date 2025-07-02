<template>
    <DocSectionText v-bind="$attrs">
        <div class="doc-notification">
            Volt is ideal for developers who prefer customizing component styles using Tailwind CSS rather than the default design token-based styling. If you do not have this use case and prefer the default styled mode for PrimeVue, while using
            Tailwind CSS only for other requirements such as layout, you can proceed to the next section.
        </div>
        <p>
            <a href="https://volt.primevue.org" target="_blank" rel="noopener noreferrer">Volt</a> is an open source UI component library implemented with the Unstyled PrimeVue components and Tailwind CSS. Volt follows the Code Ownership model where
            the components live in your application code base as your own UI library rather than imported from node_modules as a 3rd party. Main benefit of this approach is full control over styling and ease of customization. Internally a Volt
            component wraps its PrimeVue counterpart, removes the default design token based theming and applies Tailwind utility classes via the pass through attributes feature. Volt components are designed to be customized with Tailwind CSS and do
            not require separate updates. They serve as wrappers around PrimeVue components, so maintenance is handled simply by updating the PrimeVue version.
        </p>
        <img alt="Architecture" src="https://primefaces.org/cdn/primevue/images/volt-architecture.png" class="w-full mb-4" />
    </DocSectionText>
</template>

<script></script>
