<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue is a popular Vue UI library maintained by PrimeTek, a company renowned for its comprehensive set of UI components for various frameworks. PrimeTek is dedicated to providing high-quality, versatile, and accessible UI components
            that help developers build better applications faster.
        </p>
        <h3>Development Setup</h3>
        <p>To begin with, clone the PrimeVue repository from GitHub:</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />
        <p>Then run the showcase in your local environment at <i>http://localhost:3000/</i>.</p>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />
        <h3>Project Structure</h3>
        <p>PrimeVue utilizes a monorepo architecture, the libraries are located at <i>packages</i> folder and the website is at <i>apps/showcase</i>.</p>
        <DocSectionCode :code="code3" hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
git clone https://github.com/primefaces/primevue.git
cd primevue
`
            },
            code2: {
                basic: `
npm run setup
npm run dev
`
            },
            code3: {
                basic: `
- apps
  - showcase                // website
- packages
  - auto-import-resolver    // unplugin resolver
  - core                    // core api
  - icons                   // primeicons as sfc
  - metadata                // list of components and directives
  - nuxt-module             // module for nuxt    
  - primevue                // main package of components and directives
  - themes                  // presets of styled mode
`
            }
        };
    }
};
</script>
