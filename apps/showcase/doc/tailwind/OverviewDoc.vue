<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS is a popular CSS framework based on a utility-first design. The core provides flexible CSS classes with predefined CSS rules to build your own UI elements. For example, instead of an opinionated <i>btn</i> class as in
            Bootstrap, Tailwind offers primitive classes like <i>bg-blue-500</i>, <i>rounded</i> and <i>p-4</i> to apply a button. A set of reusable classes can also be grouped as a Tailwind CSS component and there are even a couple of libraries that
            take this approach to build components specifically for Tailwind.
        </p>
        <p>
            Tailwind is an outstanding CSS library, however it lacks a true comprehensive UI suite when combined with Vue.js, this is where PrimeVue comes in by providing a wide range of highly accessible and feature rich UI component library. The
            core of PrimeVue does not depend on Tailwind CSS, instead we provide the necessary integration points such as the primeui tailwind plugin and the Tailwind version for the unstyled mode.
        </p>
    </DocSectionText>
    <div class="doc-notification">
        Tailwind CSS and PrimeVue can be used together via two main approaches. Simple approach is using Tailwind CSS <b>around</b> PrimeVue components for layout purposes as demonstrated in the samples section below, the advanced approach takes the
        integration a step further by allowing Tailwind CSS <b>within</b> the component internals to style the entire UI suite in <NuxtLink to="/theming/unstyled" class="doc-link">unstyled mode</NuxtLink>.
    </div>
</template>

<script></script>
