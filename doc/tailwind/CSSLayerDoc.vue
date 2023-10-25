<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Tailwind CSS can be used with styled or unstyled modes of PrimeVue. In both cases, <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">preflight</a> mode may break styling of the core functionality
            so <i>@layer</i> configuration in your style file that includes tailwind styles is necessary for compatibility.
        </p>
        <p>
            If you are using <strong>Nuxt</strong> modules of <NuxtLink to="/nuxt">PrimeVue</NuxtLink> and <a href="https://tailwindcss.nuxtjs.org/" target="_blank" rel="noopener noreferrer">Tailwind</a>, the layer order is required to be configured
            with the <NuxtLink to="/nuxt/#layerorder">cssLayerOrder</NuxtLink>.
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
  @tailwind components;
  @tailwind utilities;
}
`
            }
        };
    }
};
</script>
