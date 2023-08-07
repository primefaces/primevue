<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <NuxtLink to="/tailwind">Tailwind Customization</NuxtLink> section for an example.
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
export default {
    progressspinner: {
        root: {
            class: ['relative mx-auto w-28 h-28 inline-block', 'before:block before:pt-full']
        },
        spinner: 'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin',
        circle: 'text-red-500 progress-spinner-circle'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-content-center">
        <ProgressSpinner />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
