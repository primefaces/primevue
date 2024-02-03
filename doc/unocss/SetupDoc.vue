<template>
    <DocSectionText v-bind="$attrs">
        <p>
            To get started, UnoCSS should already be available in your application, if not visit the UnoCSS <a href="https://unocss.dev/integrations/">documentation</a> for the installation in various environments. Theming of PrimeVue components with
            UnoCSS is mainly achieved with unstyled mode either using global setting or for a particular component only. Visit the <NuxtLink to="/unstyled">unstyled</NuxtLink> mode documentation for more information.
        </p>
        <p>
            UnoCSS adds the utilities on demand so it needs to be aware of PrimeVue components path otherwise the classes used will not be included in the page, sample below configures UnoCSS with Vite. For other environments like Nuxt, visit the
            <a href="https://unocss.dev/integrations/">integrations documentation</a>.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS({
    presets: [
      presetUno(),
      presetAttributify()
    ],
    include: ["./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"]
  })]
})
`
            }
        };
    }
};
</script>
