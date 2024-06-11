<template>
    <DocSectionText v-bind="$attrs">
        <p>The nuxt-primevue module registers the components automatically so you may start using them instantly. See the <NuxtLink to="/nuxt/#components">Components</NuxtLink> section to customize how the components are loaded and named.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Check" icon="pi pi-check" />
    </div>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<Button label="Check" icon="pi pi-check" />
`
            }
        };
    }
};
</script>
