<template>
    <Head>
        <Title>PrimeFlex - Dynamic Imports</Title>
        <Meta name="description" content="Dynamic imports enable the loading of multiple items as needed, streamlining the import process." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Dynamic Imports</h1>
                <p>Dynamic imports enable the loading of multiple items as needed, streamlining the import process.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import OverviewDoc from '@/doc/guides/dynamicimports/OverviewDoc.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'overview',
                    label: 'Overview',
                    component: OverviewDoc
                }
            ]
        };
    }
};
</script>
