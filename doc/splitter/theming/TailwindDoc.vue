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
    splitter: {
        root: ({ context }) => ({
            class: [
                'bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-white/80',
                {
                    'border border-solid border-gray-300 dark:border-blue-900/40': !context.nested
                }
            ]
        }),

        gutter: ({ props }) => ({
            class: [
                'flex items-center justify-center shrink-0',
                'transition-all duration-200 bg-gray-100 dark:bg-gray-800',
                {
                    'cursor-col-resize': props.layout == 'horizontal',
                    'cursor-row-resize': props.layout !== 'horizontal'
                }
            ]
        }),
        gutterhandler: ({ props }) => ({
            class: [
                'bg-gray-300 dark:bg-gray-600 transition-all duration-200',
                {
                    'h-7': props.layout == 'horizontal',
                    'w-7 h-2': props.layout !== 'horizontal'
                }
            ]
        })
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <Splitter style="height: 300px" class="mb-5">
            <SplitterPanel class="flex items-center justify-center"> Panel 1 </SplitterPanel>
            <SplitterPanel class="flex items-center justify-center"> Panel 2 </SplitterPanel>
        </Splitter>
    </div>
</template>

<script setup>
<\/script>
`
            }
        };
    }
};
</script>
