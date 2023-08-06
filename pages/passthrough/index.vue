<template>
    <Head>
        <Title>PrimeVue - Pass Through</Title>
        <Meta name="description" content="The Pass Through props is an API to access the internal DOM Structure of the components." />
    </Head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <h1>Pass Through</h1>
                <p>The Pass Through props is an API to access the internal DOM Structure of the components.</p>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<script>
import BasicDoc from '@/doc/passthrough/BasicDoc';
import CustomCSSDoc from '@/doc/passthrough/CustomCSSDoc';
import GlobalDoc from '@/doc/passthrough/GlobalDoc';
import LifecycleDoc from '@/doc/passthrough/LifecycleDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'lifecycle',
                    label: 'Lifecycle',
                    component: LifecycleDoc
                },
                {
                    id: 'global',
                    label: 'Global',
                    component: GlobalDoc
                },
                {
                    id: 'customcss',
                    label: 'Custom CSS',
                    component: CustomCSSDoc
                }
            ]
        };
    }
};
</script>
