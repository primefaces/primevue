<template>
    <Head>
        <Title>Setting up Volt in a Nuxt project with PrimeVue and Tailwind.</Title>
        <Meta name="description" content="Setting up Volt in a Nuxt project with PrimeVue and Tailwind." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation with Nuxt</h1>
                <p>Setting up Volt in a Nuxt project with PrimeVue and Tailwind.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script setup lang="ts">
import CSSVariablesDoc from '@/doc/nuxt/CSSVariablesDoc.vue';
import ExampleDoc from '@/doc/nuxt/ExampleDoc.vue';
import PrimeVueDoc from '@/doc/nuxt/PrimeVueDoc.vue';
import RegisterDoc from '@/doc/nuxt/RegisterDoc.vue';
import TailwindDoc from '@/doc/nuxt/TailwindDoc.vue';
import DownloadDoc from '@/doc/vite/DownloadDoc.vue';
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
        id: 'download',
        label: 'Download',
        component: DownloadDoc
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
