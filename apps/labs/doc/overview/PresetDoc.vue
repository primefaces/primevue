<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A Tailwind CSS preset is a pass-through object to style PrimeVue, the components are not aware of Tailwind in core as the utility classes are injected via <i>pt</i>. This makes the architecture flexible as another CSS library like UnoCSS
            or Bootstrap can be used instead of Tailwind.
        </p>
        <p>
            The release bundle contains two built-in presets; <b>lara</b> and <b>aura</b>. In the future, more presets are planned e.g. for Material Design. The presets are implemented for you to use as a base to build your own, you may use them as
            they are or use them as reference when creating your own design. A preset can only for a single component or multiple, visit the Gallery to view the community driven presets. Releases of presets are not published to NPM as copy-paste
            approach is a more suitable strategy for easier customization instead of an imported module from node_modules.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>
            Presets are reactive, as a result changing the configuration reskins the entire UI suite. This allows switching the design system at runtime e.g. from Material Design from Google to Fluent of Microsoft with a single line instead of
            rewriting the application with another UI library.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
});
`
            },
            code2: {
                basic: `
import Lara from '@/presets/lara';
import Aura from '@/presets/aura';
import { usePrimeVue } from "primevue/config";

const primevue = usePrimeVue();

primevue.config.pt = Lara;
//or
primevue.config.pt = Aura;
`
            }
        };
    }
};
</script>
