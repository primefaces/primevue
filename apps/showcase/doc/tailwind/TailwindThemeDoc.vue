<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeTek offers the Tailwind CSS version of the entire PrimeVue UI suite in <NuxtLink to="/theming/unstyled" class="doc-link">unstyled mode</NuxtLink> based on the <i>@apply</i> directive with IntelliSense support. Visit the
            <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer">Tailwind version of PrimeVue</a> for the documentation, demos and additional resources.
        </p>
    </DocSectionText>
    <div class="doc-notification">
        Tailwind version of PrimeVue instead of the default styled mode is not tested with Tailwind v4. For the next-gen version of this project, we are building a new UI Component library based on the code ownership model where components are
        located inside your project source instead of imported from npm. This new library is powered by Unstyled PrimeVue Core and Tailwind v4.
    </div>
</template>

<script></script>
