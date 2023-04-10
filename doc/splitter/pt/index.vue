<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Splitter Pass Through</h1>
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
                    label: 'WireFrame',
                    component: PTImage
                },
                {
                    id: 'pt.doc.splitter',
                    label: 'Splitter PT Options',
                    description: 'Pass Through Splitter',
                    component: DocApiTable,
                    data: getPTOption('Splitter')
                },
                {
                    id: 'pt.doc.tab',
                    label: 'SplitterPanel PT Options',
                    description: 'Pass Through SplitterPanel',
                    component: DocApiTable,
                    data: getPTOption('SplitterPanel')
                },
                {
                    id: 'pt.demo',
                    label: 'Example',
                    component: PtDoc
                }
            ]
        };
    }
};
</script>
