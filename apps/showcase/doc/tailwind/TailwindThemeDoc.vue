<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeTek offers the Tailwind CSS version of the entire PrimeVue UI suite in <NuxtLink to="/theming/unstyled" class="doc-link">unstyled mode</NuxtLink> based on the <i>@apply</i> directive with IntelliSense support. Visit the
            <a href="https://tailwind.primevue.org" target="_blank" rel="noopener noreferrer">Tailwind version of PrimeVue</a> for the documentation, demos and additional resources.
        </p>
    </DocSectionText>
    <div class="doc-notification">
        Tailwind version of PrimeVue instead of the default styled mode is not tested with Tailwind v4. For the next-gen version with Tailwind v4, we aim to drop @apply based version in favor of a simplified pass-through approach where Tailwind
        utilities are injected directly into PrimeVue component dom elements.
    </div>
</template>

<script></script>
