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
                    id: 'pt.doc.splitter',
                    label: 'Splitter PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Splitter')
                },
                {
                    id: 'pt.doc.splitterpanel',
                    label: 'SplitterPanel PT Options',
                    component: DocApiTable,
                    data: getPTOptions('SplitterPanel')
                }
            ]
        };
    }
};
</script>
