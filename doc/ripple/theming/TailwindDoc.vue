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
    directives: {
        ripple: {
            root: {
                class: ['block absolute bg-white/50 rounded-full pointer-events-none'],
                style: 'transform: scale(0)'
            }
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Button label="Submit" />
    </div>
</template>

<script setup>
<\/script>`
            }
        };
    }
};
</script>
