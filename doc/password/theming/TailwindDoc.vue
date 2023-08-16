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
export const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default {
    password: {
        root: ({ props }) => ({
            class: [
                'inline-flex relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
        meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
        meterlabel: ({ instance, props }) => ({
            class: [
                'transition-width duration-1000 ease-in-out h-full',
                {
                    'bg-red-500': instance?.meter?.strength == 'weak',
                    'bg-orange-500': instance?.meter?.strength == 'medium',
                    'bg-green-500': instance?.meter?.strength == 'strong'
                },
                { 'pr-[2.5rem] ': props.toggleMask }
            ]
        }),
        showicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        hideicon: {
            class: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        transition: TRANSITIONS.overlay
    }
}
`
            },
            code2: {
                composition: `<template>
    <div class="card flex justify-center">
        <Password v-model="value" />
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
