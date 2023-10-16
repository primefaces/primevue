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
    megamenu: {
        root: ({ props }) => ({
            class: ['bg-gray-100 dark:bg-gray-900  border border-gray-300 dark:border-blue-900/40  rounded-md', 'flex relative', { 'p-2 items-center': props.orientation == 'horizontal', 'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal' }]
        }),
        menu: {
            class: ['m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto']
        },
        menuitem: ({ props }) => ({
            class: [
                'relative',
                {
                    'w-auto': props.horizontal,
                    'w-full': !props.horizontal
                }
            ]
        }),
        content: ({ props, context }) => ({
            class: [
                'transition-shadow duration-200',
                { 'rounded-md': props.level < 1 && props.horizontal },
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
        action: {
            class: ['select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none']
        },
        icon: {
            class: 'mr-2'
        },
        submenuicon: ({ props }) => ({
            class: [
                {
                    'ml-2': props.horizontal,
                    'ml-auto': !props.horizontal
                }
            ]
        }),
        panel: ({ props }) => ({
            class: [
                'py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-auto',
                'absolute z-10',
                {
                    'left-full top-0': !props.horizontal
                }
            ]
        }),
        grid: 'flex',
        column: 'w-1/2',
        submenu: {
            class: ['m-0 list-none', 'py-1 w-48']
        },
        submenuheader: {
            class: ['m-0 py-3 px-5 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold rounded-tr-md rounded-tl-md']
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <MegaMenu :model="items" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
        items: [
            [
                {
                    label: 'Video 1',
                    items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
                },
                {
                    label: 'Video 2',
                    items: [{ label: 'Video 2.1' }, { label: 'Video 2.2' }]
                }
            ],
            [
                {
                    label: 'Video 3',
                    items: [{ label: 'Video 3.1' }, { label: 'Video 3.2' }]
                },
                {
                    label: 'Video 4',
                    items: [{ label: 'Video 4.1' }, { label: 'Video 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        items: [
            [
                {
                    label: 'User 1',
                    items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
                },
                {
                    label: 'User 2',
                    items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
                }
            ],
            [
                {
                    label: 'User 3',
                    items: [{ label: 'User 3.1' }, { label: 'User 3.2' }]
                },
                {
                    label: 'User 4',
                    items: [{ label: 'User 4.1' }, { label: 'User 4.2' }]
                }
            ],
            [
                {
                    label: 'User 5',
                    items: [{ label: 'User 5.1' }, { label: 'User 5.2' }]
                },
                {
                    label: 'User 6',
                    items: [{ label: 'User 6.1' }, { label: 'User 6.2' }]
                }
            ]
        ]
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
            [
                {
                    label: 'Event 1',
                    items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
                },
                {
                    label: 'Event 2',
                    items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
                }
            ],
            [
                {
                    label: 'Event 3',
                    items: [{ label: 'Event 3.1' }, { label: 'Event 3.2' }]
                },
                {
                    label: 'Event 4',
                    items: [{ label: 'Event 4.1' }, { label: 'Event 4.2' }]
                }
            ]
        ]
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
            [
                {
                    label: 'Setting 1',
                    items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
                },
                {
                    label: 'Setting 2',
                    items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
                },
                {
                    label: 'Setting 3',
                    items: [{ label: 'Setting 3.1' }, { label: 'Setting 3.2' }]
                }
            ],
            [
                {
                    label: 'Technology 4',
                    items: [{ label: 'Setting 4.1' }, { label: 'Setting 4.2' }]
                }
            ]
        ]
    }
]);
<\/script>
`
            }
        };
    }
};
</script>
