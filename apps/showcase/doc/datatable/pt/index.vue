<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>DataTable Pass Through</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getPTOptions } from '@/components/doc/helpers';
import PTImage from './PTImage.vue';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'pt.image',
                    label: 'Wireframe',
                    component: PTImage
                },
                {
                    id: 'pt.doc.datatable',
                    label: 'DataTable PT Options',
                    component: DocApiTable,
                    data: getPTOptions('DataTable')
                },
                {
                    id: 'pt.doc.column',
                    label: 'Column PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Column')
                },
                {
                    id: 'pt.doc.columngroup',
                    label: 'ColumnGroup PT Options',
                    component: DocApiTable,
                    data: getPTOptions('ColumnGroup')
                },
                {
                    id: 'pt.doc.row',
                    label: 'Row PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Row')
                }
            ]
        };
    }
};
</script>
