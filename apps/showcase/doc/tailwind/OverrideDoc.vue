<template>
    <DocSectionText v-bind="$attrs">
        <p>In styled mode, Tailwind utilities may not be able to override the default styling due to css specificity, there are two possible solutions.</p>
        <h3>Important</h3>
        <p>Use the <i>!</i> as a prefix to enforce the styling.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />

        <h3>CSS Layer</h3>
        <p>Enable PrimeVue CSS layer and configure the tailwind styles to have higher specificity with layering. This way, <i>!</i> prefix is not required.</p>
        <DocSectionCode :code="code2" importCode hideToggleCode hideStackBlitz />
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<InputText placeholder="Overriden" class="!p-8" />
`
            },
            code2: {
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
            code3: {
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
