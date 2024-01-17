<template>
    <div>
        <Head>
            <Title>Bulma - PrimeVue</Title>
            <Meta name="description" content="Bulma is a free, open source framework that provides ready-to-use frontend components and utilities.." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Bulma</h1>
                    <p><a href="https://bulma.io/">Bulma</a> is a free, open source framework that provides ready-to-use frontend components and utilities.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ExampleDoc from '@/doc/bulma/ExampleDoc.vue';
import SetupDoc from '@/doc/bulma/SetupDoc.vue';

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
