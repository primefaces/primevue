<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" :service="['NodeService']" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    treetable: {
        root: ({ props }) => ({
            class: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            class: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: 'w-8 h-8',
        header: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        wrapper: ({ props }) => ({
            class: [
                {
                    'relative overflow-auto': props.scrollable,
                    'overflow-x-auto': props.resizableColumns
                }
            ]
        }),
        footer: {
            class: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        table: 'border-collapse table-fixed w-full',
        thead: ({ props }) => ({
            class: [
                {
                    'block sticky top-0 z-[1]': props.scrollable
                }
            ]
        }),
        tbody: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        tfoot: ({ props }) => ({
            class: [
                {
                    block: props.scrollable
                }
            ]
        }),
        headerrow: ({ props }) => ({
            class: [
                {
                    'flex flex-nowrap w-full': props.scrollable
                }
            ]
        }),
        row: ({ context }) => ({
            class: [
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            ]
        }),
        column: {
            headercell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200',
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': context.resizable && !context.frozen
                    }
                ]
            }),
            bodycell: ({ context }) => ({
                class: [
                    'text-left border-gray-300 border',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        sticky: context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                ]
            }),
            rowtoggler: ({ context }) => ({
                class: [
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    context.selected ? 'text-blue-700' : 'text-gray-500',
                    'dark:text-white/70' //Dark Mode
                ]
            }),
            sorticon: ({ context }) => ({
                class: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                class: [
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                ]
            },
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            checkboxwrapper: {
                class: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2']
            },
            checkbox: ({ context }) => ({
                class: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                ]
            }),
            checkboxicon: ({ context }) => ({
                class: [
                    'w-4 h-4 transition-all duration-200 text-base dark:text-gray-900',
                    {
                        'text-white': context.checked
                    }
                ]
            })
        },
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <TreeTable :value="nodes">
            <Column field="name" header="Name" sortable expander></Column>
            <Column field="size" header="Size" sortable></Column>
            <Column field="type" header="Type" sortable></Column>
        </TreeTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from '@/service/NodeService';

onMounted(() => {
    NodeService.getTreeTableNodes().then((data) => (nodes.value = data));
});

const nodes = ref();
<\/script>
`
            }
        };
    }
};
</script>
