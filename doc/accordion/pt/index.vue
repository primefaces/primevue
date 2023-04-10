<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Panel Pass Through</h1>
            <p>Description</p>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getPTOption } from '@/components/doc/helpers/PTHelper.js';
import PtDoc from './PTDoc.vue';
import PTImage from './PTImage.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'pt.image',
                    label: 'Image',
                    description: 'Pass Through Image',
                    component: PTImage
                },
                {
                    id: 'pt.doc.accordion',
                    label: 'Accordion PT Options',
                    description: 'Pass Through Accordion',
                    component: DocApiTable,
                    data: getPTOption('Accordion')
                },
                {
                    id: 'pt.doc.tab',
                    label: 'AccordionTab PT Options',
                    description: 'Pass Through AccordionTab',
                    component: DocApiTable,
                    data: getPTOption('AccordionTab')
                },
                {
                    id: 'pt.demo',
                    label: 'Demo',
                    description: 'Pass Through Demo',
                    component: PtDoc
                }
            ]
        };
    }
};
</script>
