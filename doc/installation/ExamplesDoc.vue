<template>
    <DocSectionText v-bind="$attrs">
        <p>We've created various samples for the popular options in the Vue ecosystem. Visit the <a href="https://github.com/primefaces/primevue-examples">primevue-examples</a> repository for the samples.</p>
    </DocSectionText>
    <div class="flex flex-wrap card justify-content-between align-items-center gap-3">
        <a href="https://github.com/primefaces/primevue-examples/tree/main/vite-quickstart" class="flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/vite.svg" alt="Vite" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Vite</span>
        </a>
        <a href="https://github.com/primefaces/primevue-examples/tree/main/nuxt3-quickstart" class="flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/nuxt.svg" alt="Nuxt.JS" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Nuxt</span>
        </a>
        <a href="https://github.com/primefaces/primevue-examples/tree/main/astro-quickstart" class="text-800 flex flex-column align-items-center">
            <img src="https://primefaces.org/cdn/primevue/images/logos/astro.svg" alt="Astro" class="w-8rem h-8rem mb-3" />
            <span class="font-bold text-xl text-900">Astro</span>
        </a>
    </div>
</template>
