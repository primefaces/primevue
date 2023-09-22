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
    chip: {
        root: {
            class: ['inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3 dark:text-white/80 dark:bg-gray-900']
        },
        label: 'leading-6 mt-1.5 mb-1.5',
        icon: 'leading-6 mr-2',
        image: {
            class: ['w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full']
        },
        removeIcon: {
            class: ['ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6']
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" />
        <Chip label="Facebook" icon="pi pi-facebook" />
        <Chip label="Google" icon="pi pi-google" />
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
    </div>
</template>
<script setup>

<\/script>`
            }
        };
    }
};
</script>
