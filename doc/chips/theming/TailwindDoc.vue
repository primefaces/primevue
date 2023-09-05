<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    chips: {
        root: ({ props }) => ({
            class: [
                'flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        container: {
            class: [
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'font-sans text-base text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },

        inputtoken: {
            class: ['py-1.5 px-0', 'flex flex-1 inline-flex']
        },
        input: {
            class: ['font-sans text-base text-gray-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full']
        },
        token: {
            class: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: 'ml-2'
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card">
        <Chips v-model="value" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref();
<\/script>`
            }
        };
    }
};
</script>
