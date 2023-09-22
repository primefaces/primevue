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
    inputswitch: {
        root: ({ props }) => ({
            class: [
                'inline-block relative',
                'w-12 h-7',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        slider: ({ props }) => ({
            class: [
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                "before:absolute before:content-'' before:top-1/2 before:bg-white before:dark:bg-gray-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                {
                    'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700 ': !props.modelValue,
                    'bg-blue-500 before:transform before:translate-x-5': props.modelValue
                }
            ]
        })
    },
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card flex justify-center">
        <InputSwitch v-model="checked" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`
            }
        };
    }
};
</script>
