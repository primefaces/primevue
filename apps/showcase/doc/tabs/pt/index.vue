<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Tabs Pass Through</h1>
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
                    id: 'pt.doc.tabs',
                    label: 'Tabs PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Tabs')
                },
                {
                    id: 'pt.doc.tablist',
                    label: 'TabList PT Options',
                    component: DocApiTable,
                    data: getPTOptions('TabList')
                },
                {
                    id: 'pt.doc.tab',
                    label: 'Tab PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Tab')
                },
                {
                    id: 'pt.doc.tabpanels',
                    label: 'TabPanels PT Options',
                    component: DocApiTable,
                    data: getPTOptions('TabPanels')
                },
                {
                    id: 'pt.doc.tabpanel',
                    label: 'TabPanel PT Options',
                    component: DocApiTable,
                    data: getPTOptions('TabPanel')
                }
            ]
        };
    }
};
</script>
