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
import { getPTOption } from '@/layouts/doc/helpers/PTHelper.js';
import PtDoc from './PTDoc.vue';
import PTImage from './PTImage.vue';
import DocApiTable from '@/layouts/doc/DocApiTable.vue';
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
                    id: 'pt.doc',
                    label: 'Panel PT Options',
                    description: 'Pass Through Doc',
                    component: DocApiTable,
                    data: getPTOption('Panel')
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
