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
xport default {
    contextmenu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-none shadow-md rounded-lg w-52',
        menu: {
            class: ['m-0 p-0 list-none', 'outline-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            class: [
                'transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: {
            class: ['cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 dark:text-white/80 py-3 px-5 select-none']
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        label: 'text-gray-600 dark:text-white/70',
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-250'
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <img alt="Logo" src="https://primefaces.org/cdn/primevue/images/nature/nature3.jpg" @contextmenu="onImageRightClick" class="w-full md:w-auto" aria-haspopup="true" />
        <ContextMenu ref="menu" :model="items" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const menu = ref();
const items = ref([
    { label: 'View', icon: 'pi pi-fw pi-search' },
    { label: 'Delete', icon: 'pi pi-fw pi-trash' }
]);

const onImageRightClick = (event) => {
    menu.value.show(event);
};

<\/script>`
            }
        };
    }
};
</script>
