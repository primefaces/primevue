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
    rating: {
        root: ({ props }) => ({
            class: [
                'relative flex items-center',
                'gap-2',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        cancelitem: ({ context }) => ({
            class: [
                'inline-flex items-center cursor-pointer',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        cancelicon: {
            class: ['text-red-500', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        item: ({ props, context }) => ({
            class: [
                'inline-flex items-center',
                {
                    'cursor-pointer': !props.readonly,
                    'cursor-default': props.readonly
                },
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        officon: {
            class: ['text-gray-700 hover:text-blue-400', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        onicon: {
            class: ['text-blue-500', 'w-5 h-5', 'transition duration-200 ease-in']
        }
    },
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <Rating v-model="value" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(null);
<\/script>`
            }
        };
    }
};
</script>
