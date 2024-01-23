<template>
    <Head>
        <Title>Installation - PrimeVue</Title>
        <Meta name="description" content="Installation guides for popular development environments." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Installation</h1>
                <p>Installation guides for popular development environments.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import GuidesDoc from '@/doc/installation/GuidesDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'guides',
                    label: 'Guides',
                    component: GuidesDoc
                }
            ]
        };
    }
};
</script>
