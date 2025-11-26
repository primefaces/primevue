<template>
    <div>
        <Head>
            <Title>Vue Icon Library - PrimeVue</Title>
            <Meta name="description" content="PrimeVue components can be used with any icon library using the templating features." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Custom Icons</h1>
                            <p>PrimeVue components can be used with any icon library using the templating features.</p>
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
import FontAwesomeDoc from '@/doc/customicons/FontAwesomeDoc.vue';
import ImageDoc from '@/doc/customicons/ImageDoc.vue';
import MaterialDoc from '@/doc/customicons/MaterialDoc.vue';
import SVGDoc from '@/doc/customicons/SVGDoc.vue';
import VideoDoc from '@/doc/customicons/VideoDoc.vue';

export default {
    components: { DocCopyMarkdown },
    data() {
        return {
            docs: [
                {
                    id: 'material',
                    label: 'Material',
                    component: MaterialDoc
                },
                {
                    id: 'fontawesome',
                    label: 'FontAwesome',
                    component: FontAwesomeDoc
                },
                {
                    id: 'svg',
                    label: 'SVG',
                    component: SVGDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'video',
                    label: 'Video Tutorial',
                    component: VideoDoc
                }
            ]
        };
    }
};
</script>
