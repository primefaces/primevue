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
                    <p>
                        The exclusive Tailwind integration of PrimeVue is a great choice for developers who want the flexibility of Tailwind with the convenience of a UI Component library. Tailwind simply fits perfectly to the unstyled mode of
                        PrimeVue to implement design systems. A <b>built-in Tailwind theme</b> based on <PrimeVueNuxtLink to="/uikit" class="text-primary hover:underline font-semibold">PrimeOne Design</PrimeVueNuxtLink> is even available to get
                        started in no time. In the upcoming iterations, PrimeVue will provide more presets to implement various design systems.
                    </p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
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
                }
            ]
        };
    }
};
</script>
