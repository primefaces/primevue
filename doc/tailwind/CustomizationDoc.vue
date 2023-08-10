<template>
    <DocSectionText v-bind="$attrs">
        <p>
            The built-in theme provides a strong base that can be extended further for your requirements. For customization, the pass through values need to be overriden. The unstyled section of the theming documentation for each component
            demonstrates the theme with an editable example. For instance, the panel component has the following default configuration.
        </p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
    <p>Let's assume the <i>title</i> section should be lighter and bigger.</p>
    <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `panel: {
    header: ({ props }) => ({
        class: [
            'flex items-center justify-between', // flex and alignments
            'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
        ]
    }),
    title: {
        class: ['leading-none font-bold']
    },
    toggler: {
        class: [
            'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
            'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
            'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
        ]
    },
    togglerIcon: {
        class: ['inline-block']
    },
    content: {
        class: [
            'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
            'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
        ] // padding, borders, and colors
    }
},`
            },
            code2: {
                basic: `import {createApp} from "vue";
import PrimeVue from "primevue/config";
import { usePassThrough } from "primevue/passthrough";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);

//Tailwind customization
const CustomTailwind = usePassThrough(
    Tailwind,
    {
        panel: {
            title: {
                class: ['leading-none font-light text-2xl']
            }
        }
    },
    {
        merge: true,             // Used to merge PT options. Default is true.
        useMergeProps: false,    // Whether to use Vue's 'mergeProps' method to merge PT options.
        ignoredKeysOnMerge: [],  // Defines keys to ignore during merge operation. For example; ['panel.title']
        customizer: undefined    // Defines the custom method to merge PT options.
    }
);

app.use(PrimeVue, { unstyled: true, pt: CustomTailwind });`
            }
        };
    }
};
</script>
