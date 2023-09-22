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
    tag: {
        root: ({ props }) => ({
            class: [
                'inline-flex items-center justify-center',
                'bg-blue-500 text-white text-xs font-semibold px-2 py-1 ',
                {
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'rounded-md': !props.rounded,
                    'rounded-full': props.rounded
                }
            ]
        }),
        value: 'leading-6',
        icon: 'mr-1 text-sm'
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-2">
        <Tag value="Primary"></Tag>
        <Tag severity="success" value="Success"></Tag>
        <Tag severity="info" value="Info"></Tag>
        <Tag severity="warning" value="Warning"></Tag>
        <Tag severity="danger" value="Danger"></Tag>
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
