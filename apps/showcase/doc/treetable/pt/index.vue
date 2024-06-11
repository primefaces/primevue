<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>TreeTable Pass Through</h1>
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
                    id: 'pt.doc.treetable',
                    label: 'TreeTable PT Options',
                    component: DocApiTable,
                    data: getPTOptions('TreeTable')
                },
                {
                    id: 'pt.doc.column',
                    label: 'Column PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Column')
                }
            ]
        };
    }
};
</script>
