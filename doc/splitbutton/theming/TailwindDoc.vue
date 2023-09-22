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
                basic: `export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    splitbutton: {
        root: ({ props }) => ({
            class: ['inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised }]
        }),
        button: {
            root: ({ parent }) => ({
                class: ['rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }]
            }),
            icon: 'mr-2'
        },
        menubutton: {
            root: ({ parent }) => ({
                class: ['rounded-l-none', { 'rounded-r-full': parent.props.rounded }]
            }),
            label: 'hidden'
        }
    },
    button: {
        root: ({ props, context }) => ({
            class: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]', // Primary button focus
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            class: [
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    },
    tieredmenu: {
        root: {
            class: ['py-1 bg-white border border-gray-300 rounded-lg w-[12.5rem]', 'dark:border-blue-900/40 dark:bg-gray-900']
        },
        menu: {
            class: ['outline-none', 'm-0 p-0 list-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            class: [
                'transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80', //Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: ({ context }) => ({
            class: [
                'py-3 px-5 select-none',
                'flex items-center cursor-pointer no-underline relative overflow-hidden',
                {
                    'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'text-blue-600 bg-blue-100': context.active
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: 'ml-auto',
        separator: 'border-t border-gray-300 my-1 dark:border-blue-900/40',
        submenu: {
            class: ['py-1 bg-white dark:bg-gray-900 border-0 shadow-md min-w-full', 'absolute z-10', 'left-full top-0']
        },
        transition: TRANSITIONS.overlay
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center flex-wrap">
        <Toast />
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="secondary" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="success" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="info" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="warning" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="help" class="mb-2"></SplitButton>
        <SplitButton label="Save" :model="items" icon="pi pi-plus" @click="save" severity="danger" class="mb-2"></SplitButton>
    </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const items = [
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
            toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/';
        }
    },
    { label: 'Upload', icon: 'pi pi-upload', to: '/fileupload' }
];

const save = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Data Saved', life: 3000 });
};
<\/script>`
            }
        };
    }
};
</script>
