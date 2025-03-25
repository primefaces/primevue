<template>
    <Head>
        <Title>Setting up Volt in a Vite project with PrimeVue and Tailwind.</Title>
        <Meta name="description" content="Setting up Volt in a Vite project with PrimeVue and Tailwind." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Vite</h1>
                <p>Setting up Volt in a Vite project with PrimeVue and Tailwind.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script setup>
import CSSVariablesDoc from '@/doc/vite/CSSVariablesDoc.vue';
import ExampleDoc from '@/doc/vite/ExampleDoc.vue';
import PrimeVueDoc from '@/doc/vite/PrimeVueDoc.vue';
import RegisterDoc from '@/doc/vite/RegisterDoc.vue';
import TailwindDoc from '@/doc/vite/TailwindDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'tailwind',
        label: 'Tailwind CSS',
        component: TailwindDoc
    },
    {
        id: 'primevue',
        label: 'PrimeVue',
        component: PrimeVueDoc
    },
    {
        id: 'css-variables',
        label: 'CSS Variables',
        component: CSSVariablesDoc
    },
    {
        id: 'register',
        label: 'Register',
        component: RegisterDoc
    },
    {
        id: 'example',
        label: 'Example',
        component: ExampleDoc
    }
]);
</script>
