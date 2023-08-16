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
    knob: {
        root: ({ props }) => ({
            class: [
                'focus:outline-none focus:outline-offset-0 focus:shadow-0',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        range: 'stroke-current transition duration-100 ease-in stroke-gray-200 dark:stroke-gray-700 fill-none',
        value: 'animate-dash-frame  stroke-blue-500 fill-none',
        label: 'text-center text-xl'
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card flex justify-center">
        <Knob v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(0);
<\/script>`
            }
        };
    }
};
</script>
