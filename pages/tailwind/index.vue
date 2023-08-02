<template>
    <div>
        <Head>
            <Title>Tailwind - PrimeVue</Title>
            <Meta name="description" content="Tailwind UI Components for Vue" />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Tailwind CSS</h1>
                    <p>Tailwind is a popular utility-first CSS library that fits perfectly to the unstyled mode of PrimeVue. A built-in Tailwind theme is even available to get started in no time.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import ApiDoc from '@/doc/tailwind/ApiDoc';
import CustomizationDoc from '@/doc/tailwind/CustomizationDoc.vue';
import ExampleDoc from '@/doc/tailwind/ExampleDoc';
import SetupDoc from '@/doc/tailwind/SetupDoc';

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
                    id: 'customization',
                    label: 'Customization',
                    component: CustomizationDoc
                },
                {
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                },
                {
                    id: 'api',
                    label: 'Theme API',
                    component: ApiDoc
                }
            ]
        };
    }
};
</script>
