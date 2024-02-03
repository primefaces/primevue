<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator
            <span class="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"><span class="pi pi-palette"></span></span> at the topbar to switch themes.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz scrollable />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/aura-light-blue/theme.css
primevue/resources/themes/aura-light-indigo/theme.css
primevue/resources/themes/aura-light-purple/theme.css
primevue/resources/themes/aura-light-teal/theme.css
primevue/resources/themes/aura-light-green/theme.css
primevue/resources/themes/aura-light-amber/theme.css
primevue/resources/themes/aura-light-cyan/theme.css
primevue/resources/themes/aura-light-pink/theme.css
primevue/resources/themes/aura-light-lime/theme.css
primevue/resources/themes/aura-light-noir/theme.css
primevue/resources/themes/aura-dark-blue/theme.css
primevue/resources/themes/aura-dark-indigo/theme.css
primevue/resources/themes/aura-dark-purple/theme.css
primevue/resources/themes/aura-dark-teal/theme.css
primevue/resources/themes/aura-dark-green/theme.css
primevue/resources/themes/aura-dark-amber/theme.css
primevue/resources/themes/aura-dark-cyan/theme.css
primevue/resources/themes/aura-dark-pink/theme.css
primevue/resources/themes/aura-dark-lime/theme.css
primevue/resources/themes/aura-dark-noir/theme.css
primevue/resources/themes/lara-light-blue/theme.css
primevue/resources/themes/lara-light-indigo/theme.css
primevue/resources/themes/lara-light-purple/theme.css
primevue/resources/themes/lara-light-teal/theme.css
primevue/resources/themes/lara-light-green/theme.css
primevue/resources/themes/lara-light-amber/theme.css
primevue/resources/themes/lara-light-cyan/theme.css
primevue/resources/themes/lara-light-pink/theme.css
primevue/resources/themes/lara-dark-blue/theme.css
primevue/resources/themes/lara-dark-indigo/theme.css
primevue/resources/themes/lara-dark-purple/theme.css
primevue/resources/themes/lara-dark-teal/theme.css
primevue/resources/themes/lara-dark-green/theme.css
primevue/resources/themes/lara-dark-amber/theme.css
primevue/resources/themes/lara-dark-cyan/theme.css
primevue/resources/themes/lara-dark-pink/theme.css
`
            }
        };
    }
};
</script>
