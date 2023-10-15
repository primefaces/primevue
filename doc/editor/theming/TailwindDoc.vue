<template>
    <DocSectionText v-bind="$attrs">
        <p>
            PrimeVue offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the
            <PrimeVueNuxtLink to="/tailwind">Tailwind Customization</PrimeVueNuxtLink> section for an example.
        </p>
        <DocSectionCode :code="code1" hideToggleCode importCode hideCodeSandbox hideStackBlitz scrollable />
        <p class="mt-4">A playground sample with the pre-built Tailwind theme.</p>
        <DocSectionCode :code="code2" :dependencies="{ quill: '1.3.7' }" component="Editor" embedded />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
export default {
    editor: {
        toolbar: {
            class: ['bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1']
        },
        formats: {
            class: ['inline-block align-middle', 'mr-4']
        },
        header: {
            class: ['text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600']
        }
    }
}
`
            },
            code2: {
                composition: `
<template>
    <div class="card">
        <Editor v-model="value" editorStyle="height: 320px" />
    </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref('');
<\/script>
`
            }
        };
    }
};
</script>
