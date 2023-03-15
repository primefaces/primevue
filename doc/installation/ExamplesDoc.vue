<template>
    <DocSectionText v-bind="$attrs">
        <p>We've created various samples for the popular options in the Vue ecosystem.</p>
    </DocSectionText>
    <div class="flex flex-wrap card justify-content-between align-items-center gap-3">
        <a href="https://github.com/primefaces/primevue-quickstart-create-vue" class="flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/vite.svg" alt="Vite" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Vite</span>
        </a>
        <a href="https://github.com/primefaces/primevue-quickstart-nuxt3" class="flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/nuxt.svg" alt="Nuxt.JS" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Nuxt</span>
        </a>
        <a href="https://github.com/primefaces/primevue-quickstart" class="flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/vue.svg" alt="Vue CLI" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Vue-CLI</span>
        </a>
        <a href="https://github.com/primefaces/primevue-examples/tree/main/astro-quickstart" class="flex flex-column align-items-center">
            <img :src="astroHref" alt="Astro.JS" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Astro</span>
        </a>
    </div>
</template>

<script>
export default {
    computed: {
        astroHref() {
            const theme = this.$appState.darkTheme ? 'light' : 'dark';

            return `https://primefaces.org/cdn/primevue/images/logos/astro-icon-${theme}.svg`;
        }
    }
};
</script>
