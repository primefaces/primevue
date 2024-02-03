<template>
    <DocSectionText v-bind="$attrs">
        <p>An existing pass through configuration is customized with the <i>usePassThrough</i> utility. The first parameter is the object to customize, the second parameter is the customizations and the final parameter is the merge strategy.</p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
        <p>
            The <i>mergeSections</i> defines whether the sections from the main configuration gets added and the <i>mergeProps</i> controls whether to override or merge the defined props. Defaults are <i>true</i> for <i>mergeSections</i> and
            <i>false</i> for <i>mergeProps</i>.
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code3" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code4" hideToggleCode importCode hideStackBlitz />
        <DocSectionCode :code="code5" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import BasePreset from "./basepreset";

const app = createApp(App);

const CustomPreset = usePassThrough(
    BasePreset,
    {
        panel: {
            title: {
                class: ['leading-none font-light text-2xl']
            }
        }
    },
    {
        mergeSections: true,
        mergeProps: false
    }
);

app.use(PrimeVue, { unstyled: true, pt: CustomPreset });
`
            },
            code2: {
                basic: `
const CustomPreset = usePassThrough(
    BasePreset,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: false }
);

// Output:
// panel.header.class => 'my_panel_header'
// panel.title.class => Tailwind.panel.title.class
`
            },
            code3: {
                basic: `
const CustomPreset = usePassThrough(
    BasePreset,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: true, mergeProps: true }
);

// Output:
// panel.header.class => [Tailwind.panel.header.class, 'my_panel_header']
// panel.title.class => Tailwind.panel.title.class
`
            },
            code4: {
                basic: `
const CustomPreset = usePassThrough(
    BasePreset,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: true }
);

// Output:
// panel.header.class => [Tailwind.panel.header.class, 'my_panel_header']
// panel.title.class => undefined
`
            },
            code5: {
                basic: `
const CustomPreset = usePassThrough(
    BasePreset,
    {
        panel: {
            header: 'my_panel_header'
        }
    },
    { mergeSections: false, mergeProps: false }
);

// Output:
// panel.header.class => 'my_panel_header'
// panel.title.class => undefined
`
            }
        };
    }
};
</script>
