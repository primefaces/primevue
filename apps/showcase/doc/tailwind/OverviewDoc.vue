<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS is a popular CSS framework based on a utility-first design. The core provides flexible CSS classes with predefined CSS rules to build your own UI elements. For example, instead of an opinionated <i>btn</i> class as in
            Bootstrap, Tailwind offers primitive classes like <i>bg-blue-500</i>, <i>rounded</i> and <i>p-4</i> to apply a button.
        </p>
        <p>
            Tailwind is an outstanding CSS library, however it lacks a true comprehensive UI suite when combined with Vue.js, this is where PrimeVue comes in by providing a wide range of highly accessible and feature rich UI component library. The
            core of PrimeVue does not depend on Tailwind CSS, instead we provide the necessary integration points such as the primeui tailwind plugin or a spin-off UI library called Volt based on unstyled PrimeVue.
        </p>
        <p>
            Tailwind CSS and PrimeVue can be used together via <b>two main approaches</b> to choose from. First approach is using Tailwind CSS <b>around</b> the styled PrimeVue components as demonstrated in the samples section below. The second
            alternative approach takes the integration a step further by replacing the default design token based styled mode with the unstyled mode and utilizing Tailwind CSS <b>within</b> the component internals via pass-through feature. A spin-off
            library from the PrimeTek UI ecosystem has been created based on this advanced integration called <a href="https://volt.primevue.org">VOLT</a>.
        </p>
    </DocSectionText>
</template>

<script></script>
