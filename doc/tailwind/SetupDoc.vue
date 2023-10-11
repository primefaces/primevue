<template>
    <DocSectionText v-bind="$attrs">
        <p>
            This section assumes that Tailwind is already available in your application, if not visit the Tailwind CSS <a href="https://tailwindcss.com/docs/installation/framework-guides">framework guides</a> like Vite for the installation and make
            sure to apply the CSS layer configuration above when including the styles of Tailwind as well.
        </p>
        <p class="flex align-items-start gap-2">
            <Badge value="1"></Badge>
            <span
                >Tailwind uses PurgeCSS internally to remove unused classes, as PrimeVue components are loaded from <i>node_modules</i> the <i>content</i> property at <i>tailwind.config.js</i> needs to be aware of PrimeVue, otherwise the classes
                utilized in the theme will be removed as well.</span
            >
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p class="flex align-items-start gap-2">
            <Badge value="2"></Badge>
            <span
                >Next step is enabling the <i>unstyled</i> option to remove the default style classes from the components and adding an empty <i>pt</i> so that they can be styled with Tailwind in the next section. Note that if you run your
                application at this stage, functionality and accessibility of the components will still work but everything will be transparent as there is no style.</span
            >
        </p>
        <DocSectionCode :code="code2" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p class="flex align-items-start gap-2">
            <Badge value="3"></Badge>
            <span
                >At the final step, component styles are provided via a pass through configuration that utilizes Tailwind CSS. The default preset of each component is available at the Tailwind part under theming section of each component so you'll
                able to copy paste instead of starting from scratch. Example below styles, inputtext and panel components;
            </span>
        </p>
        <DocSectionCode :code="code3" hideToggleCode importCode hideCodeSandbox hideStackBlitz />

        <p>Voilà 💚, you now have access to 80+ awesome Vue UI components styled with Tailwind that will work in harmony with the rest of your application.</p>
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    ...
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
    ],
    ...
}
`
            },
            code2: {
                basic: `
import {createApp} from "vue";
import PrimeVue from "primevue/config";

const app = createApp(App);

app.use(PrimeVue, { unstyled: true, pt: {} });
`
            },
            code3: {
                basic: `
import {createApp} from "vue";
import PrimeVue from "primevue/config";

const app = createApp(App);

//My Design System with Tailwind
const MyDesignSystem = {
    inputtext: {
        root: ({ props: InputTextProps, context: InputTextContext }) => ({
            class: [
                'm-0',
                'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                {
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                },
                {
                    'text-lg px-4 py-4': props.size == 'large',
                    'text-xs px-2 py-2': props.size == 'small',
                    'p-3 text-base': props.size == null
                }
            ]
        })
    },
    panel: {
        header: ({ props: PanelProps }) => ({
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
    }
}

app.use(PrimeVue, { unstyled: true, pt: MyDesignSystem });
`
            }
        };
    }
};
</script>
