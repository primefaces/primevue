<template>
    <div>
        <Head>
            <Title>Tailwind - PrimeVue</Title>
            <Meta name="description" content="Styling PrimeVue with Tailwind CSS." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <h1>Tailwind CSS</h1>
                    <p>Tailwind is a popular utility-first CSS library that fits perfectly to the unstyled mode of PrimeVue.</p>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
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
                    id: 'example',
                    label: 'Example',
                    component: ExampleDoc
                }
            ]
        };
    }
};
</script>
