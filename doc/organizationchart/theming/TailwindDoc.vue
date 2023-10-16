<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
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
    organizationchart: {
        table: 'mx-auto my-0 border-spacing-0 border-separate',
        cell: 'text-center align-top py-0 px-3',
        node: {
            class: [
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        linecell: 'text-center align-top py-0 px-3',
        linedown: {
            class: [
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            ]
        },
        lineleft: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t': context.lineTop
                }
            ]
        }),
        lineright: ({ context }) => ({
            class: [
                'text-center align-top py-0 px-3 rounded-none',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t border-gray-300': context.lineTop
                }
            ]
        }),
        nodecell: 'text-center align-top py-0 px-3',
        nodetoggler: {
            class: [
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            ]
        },
        nodetogglericon: 'relative inline-block w-4 h-4'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #country="slotProps">
                <div class="flex flex-col items-center">
                    <img :alt="slotProps.node.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="\`w-8 shadow-md flag flag-\${slotProps.node.data}\`" />
                    <div class="mt-3 font-medium text-lg">{{ slotProps.node.label }}</div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{slotProps.node.data.label}}</span>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'country',
    label: 'Argentina',
    data: 'ar',
    children: [
        {
            key: '0_0',
            type: 'country',
            label: 'Argentina',
            data: 'ar',
            children: [
                {
                    key: '0_0_0',
                    type: 'country',
                    label: 'Argentina',
                    data: 'ar'
                },
                {
                    key: '0_0_1',
                    type: 'country',
                    label: 'Croatia',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1',
            type: 'country',
            label: 'France',
            data: 'fr',
            children: [
                {
                    key: '0_1_0',
                    type: 'country',
                    label: 'France',
                    data: 'fr'
                },
                {
                    key: '0_1_1',
                    type: 'country',
                    label: 'Morocco',
                    data: 'ma'
                }
            ]
        }
    ]
});
<\/script>
`
            }
        };
    }
};
</script>
