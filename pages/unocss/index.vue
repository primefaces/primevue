<template>
    <div>
        <Head>
            <Title>UnoCSS - PrimeVue</Title>
            <Meta name="description" content="Styling PrimeVue with Boostrap." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>UnoCSS</h1>
                    <p><a href="https://unocss.dev">UnoCSS</a> is an instant atomic CSS engine designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ExampleDoc from '@/doc/unocss/ExampleDoc.vue';
import SetupDoc from '@/doc/unocss/SetupDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'setup',
                    label: 'Setup',
                    component: SetupDoc
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
