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
    radiobutton: {
        root: {
            class: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props }) => ({
            class: [
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': props.value !== props.modelValue,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.value == props.modelValue
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'transform rounded-full',
                'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900',
                {
                    'backface-hidden scale-10 invisible': props.value !== props.modelValue,
                    'transform scale-100 visible': props.value == props.modelValue
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
    <div class="card flex justify-center">
        <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1" class="text-gray-700 dark:text-white/80 ml-2">Cheese</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2" class="text-gray-700 dark:text-white/80 ml-2">Mushroom</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient3" name="pizza" value="Pepper" />
                <label for="ingredient3" class="text-gray-700 dark:text-white/80 ml-2">Pepper</label>
            </div>
            <div class="flex align-items-center">
                <RadioButton v-model="ingredient" inputId="ingredient4" name="pizza" value="Onion" />
                <label for="ingredient4" class="text-gray-700 dark:text-white/80 ml-2">Onion</label>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const ingredient = ref('');
<\/script>
`
            }
        };
    }
};
</script>
