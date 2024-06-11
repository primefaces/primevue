<template>
    <DocSectionText v-bind="$attrs">
        <p>
            In unstyled mode of PrimeVue, default styling elements like design tokens and css classes are turned off so that you have full control over the component styling with pass-through properties. This feature is quite useful when you'd like
            to build your own UI library based on a custom design by wrapping PrimeVue components or simply utilitze Tailwind CSS to style the PrimeVue components.
        </p>
        <p>
            The unstyled mode also use the <i>preset</i> concept just like the styled mode to define a theme. In styled mode a preset is a set of design tokens implemented with CSS variables whereas in unstyled mode a preset is a Pass-Through
            configuration object to inject Tailwind CSS classes into components. If you prefer to ignore the default styled mode theming api and use Tailwind CSS to style the PrimeVue UI components instead, learn more at the standalone
            <a href="https://tailwind.primevue.org/" target="_blank" rel="noopener noreferrer">Tailwind CSS Presets</a> project website.
        </p>
    </DocSectionText>
</template>

<script></script>
