<template>
    <div>
        <Head>
            <Title>Animations - PrimeVue</Title>
            <Meta name="description" content="PrimeVue animations guide." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Animations</h1>
                            <p>
                                Various PrimeVue Components utilize native CSS animations to provide an enhanced user experience. The default animations are based on the best practices recommended by the usability experts. In case you need to
                                customize the default animations, this documentation covers the entire set of built-in animations.
                            </p>
                        </div>
                        <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                    </div>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

<script>
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import AnchoredOverlaysDoc from '@/doc/guides/animations/AnchoredOverlaysDoc.vue';
import CollapsiblesDoc from '@/doc/guides/animations/CollapsiblesDoc.vue';
import DialogDoc from '@/doc/guides/animations/DialogDoc.vue';
import DisableDoc from '@/doc/guides/animations/DisableDoc.vue';
import IntroductionDoc from '@/doc/guides/animations/IntroductionDoc.vue';
import ReferenceDoc from '@/doc/guides/animations/ReferenceDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            checked: false,
            docs: [
                {
                    id: 'introduction',
                    label: 'Introduction',
                    component: IntroductionDoc
                },
                {
                    id: 'anchoredoverlays',
                    label: 'Anchored Overlays',
                    component: AnchoredOverlaysDoc
                },
                {
                    id: 'collapsibles',
                    label: 'Collapsibles',
                    component: CollapsiblesDoc
                },
                {
                    id: 'dialog',
                    label: 'Dialog',
                    component: DialogDoc
                },
                {
                    id: 'disable',
                    label: 'Disable',
                    component: DisableDoc
                },
                {
                    id: 'reference',
                    label: 'Reference',
                    component: ReferenceDoc
                }
            ]
        };
    }
};
</script>
