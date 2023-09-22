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
                basic: `export default {
    menubar: {
        root: {
            class: ['p-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md', 'flex items-center relative']
        },
        menu: ({ props }) => ({
            class: [
                'm-0 sm:p-0 list-none',
                'outline-none',
                'sm:flex items-center flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
                'flex-col top-full left-0',
                'absolute py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-full',
                {
                    'hidden ': !props?.mobileActive,
                    'flex ': props?.mobileActive
                }
            ]
        }),
        menuitem: 'sm:relative sm:w-auto w-full static',
        content: ({ props, context }) => ({
            class: [
                ' transition-shadow duration-200',
                '',
                { 'rounded-md': props.root },
                {
                    'text-gray-700 dark:text-white/80': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                },
                {
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'hover:bg-blue-200 dark:hover:bg-blue-500': context.active
                }
            ]
        }),
        action: ({ context }) => ({
            class: [
                'select-none',
                'cursor-pointer flex items-center no-underline overflow-hidden relative',
                'py-3 px-5 select-none',
                {
                    'max-[960px]:pl-9': context.level === 1,
                    'max-[960px]:pl-14': context.level === 2
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: ({ props }) => ({
            class: [
                'max-[960px]:ml-auto',
                {
                    'ml-2': props.root,
                    'ml-auto': !props.root
                }
            ]
        }),
        submenu: ({ props }) => ({
            class: [
                'py-1 bg-white dark:bg-gray-900 border-0  sm:shadow-md sm:w-48',
                'w-full static shadow-none',
                'sm:absolute z-10',
                'm-0 list-none',
                {
                    'sm:absolute sm:left-full sm:top-0': props.level > 1
                }
            ]
        }),
        separator: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
        button: {
            class: [
                'flex sm:hidden w-8 h-8 rounded-full text-gray-600 dark:text-white/80 transition duration-200 ease-in-out',
                'cursor-pointer flex items-center justify-center no-underline',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card relative z-2">
        <Menubar :model="items" />
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
