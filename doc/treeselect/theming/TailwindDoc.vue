<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <NuxtLink to="/tailwind">Tailwind Customization</NuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz />
        <p>A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" :service="['NodeService']" embedded />
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
    treeselect: {
        root: ({ props }) => ({
            class: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
            ]
        }),
        labelContainer: {
            class: ['overflow-hidden flex flex-auto cursor-pointer']
        },
        label: {
            class: ['block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200']
        },
        trigger: {
            class: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            class: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        wrapper: {
            class: ['max-h-[200px] overflow-auto', 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        transition: TRANSITIONS.overlay
    },
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <TreeSelect v-model="selectedValue" :options="nodes" placeholder="Select Item" class="md:w-20rem w-full" />
    </div> 
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { NodeService } from './service/NodeService';

const nodes = ref(null);
const selectedValue = ref(null);

onMounted(() => {
    NodeService.getTreeNodes().then((data) => (nodes.value = data));
});
<\/script>`
            }
        };
    }
};
</script>
