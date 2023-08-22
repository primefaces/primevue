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
    tabmenu: {
        root: 'overflow-x-auto',
        menu: {
            class: ['flex m-0 p-0 list-none flex-nowrap', 'bg-white border-solid border-gray-300 border-b-2', 'outline-none no-underline text-base list-none']
        },
        menuitem: 'mr-0',
        action: ({ context, state }) => ({
            class: [
                'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
                'border-b-2 p-5 font-bold rounded-t-lg ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80': state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': state.d_activeIndex === context.index // Condition-based active styles.
                }
            ],
            style: 'top:2px'
        }),
        icon: 'mr-2'
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card">
        <TabMenu :model="items" />
        <router-view />
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Calendar',
        icon: 'pi pi-fw pi-calendar',
        to: '/calendar'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        to: '/edit'
    },
    {
        label: 'Documentation',
        icon: 'pi pi-fw pi-file',
        to: '/documentation'
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    }
]);

<\/script>`,
                pages: [
                    {
                        tabName: 'HomeDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Home Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'CalendarDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Calendar Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'EditDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Edit Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'DocumentationDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Documentation Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>
`
                    },
                    {
                        tabName: 'SettingsDemo',
                        content: `
<template>
    <div class="p-4">
        <h5>Settings Component Content</h5>
    </div>
</template>

<script>
export default {

}
<\/script>`
                    }
                ]
            }
        };
    }
};
</script>
