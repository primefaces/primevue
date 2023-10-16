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
    inlinemessage: {
        root: ({ props }) => ({
            class: [
                'inline-flex items-center justify-center align-top',
                'p-3 m-0 rounded-md',
                {
                    'bg-blue-100 border-0 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-0 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-0 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-0 text-red-700': props.severity == 'error'
                }
            ]
        }),
        icon: 'text-base mr-2'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex flex-wrap items-center justify-center gap-3">
        <InlineMessage severity="success">Success Content</InlineMessage>
        <InlineMessage severity="info">Info Content</InlineMessage>
        <InlineMessage severity="warn">Warning Content</InlineMessage>
        <InlineMessage severity="error">Error Content</InlineMessage>
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
