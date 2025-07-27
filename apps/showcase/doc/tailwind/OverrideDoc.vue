<template>
    <DocSectionText v-bind="$attrs">
        <p>Tailwind utilities may not be able to override the default styling of components due to css specificity, there are two possible solutions; Important and CSS Layer.</p>
        <h3>Important</h3>
        <p>Use the <i>!</i> as a prefix to enforce the styling. This is not the recommend approach, and should be used as last resort to avoid adding unnecessary style classes to your bundle.</p>

        <h5>Tailwind v4</h5>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />

        <h5>Tailwind v3</h5>
        <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />

        <h3>CSS Layer</h3>
        <p>CSS Layer provides control over the css specificity so that Tailwind utilities can safely override components.</p>

        <h5>Tailwind v4</h5>
        <p>Ensure <i>primevue</i> layer is after <i>theme</i> and <i>base</i>, but before the other Tailwind layers such as <i>utilities</i>.</p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
        <p>No change in the CSS configuration is required.</p>
        <DocSectionCode :code="code4" importCode hideToggleCode hideStackBlitz />

        <h5>Tailwind v3</h5>
        <p>The <i>primevue</i> layer should be between base and utilities.</p>
        <DocSectionCode :code="code5" importCode hideToggleCode hideStackBlitz />
        <p>Tailwind v3 does not use native <i>layer</i> so needs to be defined with CSS.</p>
        <DocSectionCode :code="code6" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<InputText placeholder="Overridden" class="p-8!" />
`
            },
            code2: {
                basic: `
<InputText placeholder="Overridden" class="!p-8" />
`
            },
            code3: {
                basic: `
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }
 });
`
            },
            code4: {
                basic: `
@import "tailwindcss";
@import "tailwindcss-primeui";
`
            },
            code5: {
                basic: `
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'tailwind-base, primevue, tailwind-utilities'
            }
        }
    }
 });
`
            },
            code6: {
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
