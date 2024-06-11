<template>
    <Head>
        <Title>Install PrimeVue with CDN</Title>
        <Meta name="description" content="Setting up PrimeVue in a Vite project" />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Install PrimeVue with Vite</h1>
                <p>Setting up PrimeVue in a Vite project.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import CreateAppDoc from '@/doc/cdn/CreateAppDoc.vue';
import ExampleDoc from '@/doc/cdn/ExampleDoc.vue';
import PluginDoc from '@/doc/cdn/PluginDoc.vue';
import ScriptDoc from '@/doc/cdn/ScriptDoc.vue';
import ThemingDoc from '@/doc/cdn/ThemingDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'script',
                    label: 'Script',
                    component: ScriptDoc
                },
                {
                    id: 'createapp',
                    label: 'CreateApp',
                    component: CreateAppDoc
                },
                {
                    id: 'plugin',
                    label: 'Plugin',
                    component: PluginDoc
                },
                {
                    id: 'theming',
                    label: 'Theming',
                    component: ThemingDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>
