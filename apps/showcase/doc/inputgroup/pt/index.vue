<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>InputGroup Pass Through</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import { getPTOptions } from '@/components/doc/helpers';
// import PtDoc from './PTDoc.vue';
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
                    id: 'pt.doc.inputgroup',
                    label: 'InputGroup PT Options',
                    component: DocApiTable,
                    data: getPTOptions('InputGroup')
                },
                {
                    id: 'pt.doc.inputgroupaddon',
                    label: 'InputGroupAddon PT Options',
                    component: DocApiTable,
                    data: getPTOptions('InputGroupAddon')
                }
                // {
                //     id: 'pt.demo',
                //     label: 'Demo',
                //     component: PtDoc
                // }
            ]
        };
    }
};
</script>
