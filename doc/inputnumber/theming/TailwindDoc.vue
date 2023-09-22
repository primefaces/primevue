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
    inputnumber: {
        root: 'w-full inline-flex',
        input: ({ props }) => ({
            class: [{ 'rounded-tr-none rounded-br-none': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        buttongroup: ({ props }) => ({
            class: [{ 'flex flex-col': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        incrementbutton: ({ props }) => ({
            class: [
                'flex !items-center !justify-center',
                {
                    'rounded-br-none rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        }),
        label: 'hidden',
        decrementbutton: ({ props }) => ({
            class: [
                'flex !items-center !justify-center',
                {
                    'rounded-tr-none rounded-tl-none rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
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
    <div class="card flex flex-wrap">
        <div class="flex-auto">
            <label for="integeronly" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Integer Only </label>
            <InputNumber v-model="value1" inputId="integeronly" />
        </div>
        <div class="flex-auto">
            <label for="withoutgrouping" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Without Grouping </label>
            <InputNumber v-model="value2" inputId="withoutgrouping" :useGrouping="false" />
        </div>
        <div class="flex-auto">
            <label for="minmaxfraction" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Fraction Digits </label>
            <InputNumber v-model="value3" inputId="minmaxfraction" :minFractionDigits="2" :maxFractionDigits="5" />
        </div>
        <div class="flex-auto">
            <label for="minmax" class="font-bold block mb-2 text-gray-700 dark:text-white/80"> Min-Max Boundaries </label>
            <InputNumber v-model="value4" inputId="minmax" :min="0" :max="100" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(42723);
const value2 = ref(58151);
const value3 = ref(2351.35);
const value4 = ref(50);
<\/script>`
            }
        };
    }
};
</script>
