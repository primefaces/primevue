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
    <div class="card flex justify-center">
        <TieredMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";
            
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-plus',
                items: [
                    {
                        label: 'Bookmark',
                        icon: 'pi pi-fw pi-bookmark'
                    },
                    {
                        label: 'Video',
                        icon: 'pi pi-fw pi-video'
                    }
                ]
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash'
            },
            {
                separator: true
            },
            {
                label: 'Export',
                icon: 'pi pi-fw pi-external-link'
            }
        ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
            {
                label: 'Left',
                icon: 'pi pi-fw pi-align-left'
            },
            {
                label: 'Right',
                icon: 'pi pi-fw pi-align-right'
            },
            {
                label: 'Center',
                icon: 'pi pi-fw pi-align-center'
            },
            {
                label: 'Justify',
                icon: 'pi pi-fw pi-align-justify'
            }
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'New',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-user-minus'
            },
            {
                label: 'Search',
                icon: 'pi pi-fw pi-users',
                items: [
                    {
                        label: 'Filter',
                        icon: 'pi pi-fw pi-filter',
                        items: [
                            {
                                label: 'Print',
                                icon: 'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon: 'pi pi-fw pi-bars',
                        label: 'List'
                    }
                ]
            }
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {
                        label: 'Save',
                        icon: 'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            },
            {
                label: 'Archieve',
                icon: 'pi pi-fw pi-calendar-times',
                items: [
                    {
                        label: 'Remove',
                        icon: 'pi pi-fw pi-calendar-minus'
                    }
                ]
            }
        ]
    },
    {
        separator: true
    },
    {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
    }
]);
<\/script>`
            }
        };
    }
};
</script>
