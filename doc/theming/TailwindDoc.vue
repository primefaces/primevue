<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS can be used with styled or unstyled modes of PrimeVue. For unstyled mode, visit the exclusive <PrimeVueNuxtLink to="/tailwind">Tailwind</PrimeVueNuxtLink> documentation. In styled mode, preflight mode may override the default
            styles of the components so <i>@layer</i> configuration in your style file that includes tailwind styles is necesssary for compatibility. Note that, this is only required when you are using PrimeVue in styled mode.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
@layer tailwind-base, primevue, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind utilities;
  @tailwind variants;
} `
            }
        };
    }
};
</script>
