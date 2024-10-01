<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>AutoComplete Pass Through</h1>
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
                    id: 'pt.doc.autocomplete',
                    label: 'AutoComplete PT Options',
                    component: DocApiTable,
                    data: getPTOptions('AutoComplete')
                }
            ]
        };
    }
};
</script>
