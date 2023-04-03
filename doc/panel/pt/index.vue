<template>
    <div className="doc-main">
        <div className="doc-intro">
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
                    label: 'WireFrame',
                    component: PTImage
                },
                {
                    id: 'pt.doc',
                    label: 'Panel Elements',
                    component: DocApiTable,
                    data: getPTOption('Panel')
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
