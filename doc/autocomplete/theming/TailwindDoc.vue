<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    autocomplete: {
        root: ({ props }) => ({
            class: [
                'relative inline-flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                },
                { 'w-full': props.multiple }
            ]
        }),
        container: {
            class: [
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40  transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        inputtoken: {
            class: ['py-0.375rem px-0', 'flex-1 inline-flex']
        },
        input: ({ props }) => ({
            class: [
                'm-0',
                ' transition-colors duration-200 appearance-none rounded-lg',
                { 'rounded-tr-none rounded-br-none': props.dropdown },
                {
                    'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-blue-500 focus:outline-none':
                        !props.multiple,
                    'font-sans text-base text-gray-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                }
            ]
        }),
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        dropdownbutton: {
            root: 'rounded-tl-none rounded-bl-none'
        },
        panel: {
            class: ['bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            class: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            class: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        transition: TRANSITIONS.overlay
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const items = ref([]);

const search = (event) => {
    items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
}
<\/script>`
            }
        };
    }
};
</script>
