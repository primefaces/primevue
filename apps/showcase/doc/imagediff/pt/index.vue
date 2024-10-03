<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>ImageDiff Pass Through</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getPTOptions } from '@/components/doc/helpers';
import PTViewer from './PTViewer.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'pt.viewer',
                    label: 'Viewer',
                    component: PTViewer
                },
                {
                    id: 'pt.doc.image',
                    label: 'ImageDiff PT Options',
                    component: DocApiTable,
                    data: getPTOptions('ImageDiff')
                }
            ]
        };
    }
};
</script>
