<template>
    <Head>
        <Title>Setup - PrimeVue</Title>
        <Meta name="description" content="Setup guides for popular development environments." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Setup</h1>
                <p>Installation guides for popular development environments.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import GuidesDoc from '@/doc/setup/GuidesDoc.vue';

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
