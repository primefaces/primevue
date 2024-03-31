<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Unstyled mode is disabled by default for all components. Set <i>unstyled</i> as true to enable it globally using a module configuration. Visit the <NuxtLink to="/unstyled">Unstyled mode</NuxtLink> documentation for more information and
            examples.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>In unstyled mode, you'd need to style the components on your end. If you are using Tailwind CSS, see the <a href="https://tailwind.primevue.org/nuxt/">Tailwind CSS Presets</a> project to get you started.</p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        options: {
            unstyled: true
        }
    }
})
`
            },
            code2: {
                basic: `
import path from 'path';

export default defineNuxtConfig({
    modules: [
        'nuxt-primevue'
    ],
    primevue: {
        unstyled: true,
        importPT: { from: path.resolve(__dirname, './presets/lara/') }      //import and apply preset
    }
})
`
            }
        };
    }
};
</script>
