<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator
            <span class="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary"><span class="pi pi-cog"></span></span> at the topbar to switch themes.
        </p>
    </DocSectionText>
    <div class="h-20rem overflow-auto">
        <DocSectionCode :code="code" hideToggleCode importCode hideCodeSandbox hideStackBlitz codeClassName="h-20rem overflow-auto" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `primevue/resources/themes/bootstrap4-light-blue/theme.css
primevue/resources/themes/bootstrap4-light-purple/theme.css
primevue/resources/themes/bootstrap4-dark-blue/theme.css
primevue/resources/themes/bootstrap4-dark-purple/theme.css
primevue/resources/themes/md-light-indigo/theme.css
primevue/resources/themes/md-light-deeppurple/theme.css
primevue/resources/themes/md-dark-indigo/theme.css
primevue/resources/themes/md-dark-deeppurple/theme.css
primevue/resources/themes/mdc-light-indigo/theme.css
primevue/resources/themes/mdc-light-deeppurple/theme.css
primevue/resources/themes/mdc-dark-indigo/theme.css
primevue/resources/themes/mdc-dark-deeppurple/theme.css
primevue/resources/themes/tailwind-light/theme.css
primevue/resources/themes/fluent-light/theme.css
primevue/resources/themes/lara-light-blue/theme.css
primevue/resources/themes/lara-light-indigo/theme.css
primevue/resources/themes/lara-light-purple/theme.css
primevue/resources/themes/lara-light-teal/theme.css
primevue/resources/themes/lara-dark-blue/theme.css
primevue/resources/themes/lara-dark-indigo/theme.css
primevue/resources/themes/lara-dark-purple/theme.css
primevue/resources/themes/lara-dark-teal/theme.css
primevue/resources/themes/soho-light/theme.css
primevue/resources/themes/soho-dark/theme.css
primevue/resources/themes/viva-light/theme.css
primevue/resources/themes/viva-dark/theme.css
primevue/resources/themes/mira/theme.css
primevue/resources/themes/nano/theme.css
primevue/resources/themes/saga-blue/theme.css
primevue/resources/themes/saga-green/theme.css
primevue/resources/themes/saga-orange/theme.css
primevue/resources/themes/saga-purple/theme.css
primevue/resources/themes/vela-blue/theme.css
primevue/resources/themes/vela-green/theme.css
primevue/resources/themes/vela-orange/theme.css
primevue/resources/themes/vela-purple/theme.css
primevue/resources/themes/arya-blue/theme.css
primevue/resources/themes/arya-green/theme.css
primevue/resources/themes/arya-orange/theme.css
primevue/resources/themes/arya-purple/theme.css`
            }
        };
    }
};
</script>
