<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Stepper Pass Through</h1>
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
                    id: 'pt.doc.stepper',
                    label: 'Stepper PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Stepper')
                },
                {
                    id: 'pt.doc.steplist',
                    label: 'StepList PT Options',
                    component: DocApiTable,
                    data: getPTOptions('StepList')
                },
                {
                    id: 'pt.doc.steppanels',
                    label: 'StepPanels PT Options',
                    component: DocApiTable,
                    data: getPTOptions('StepPanels')
                },
                {
                    id: 'pt.doc.stepitem',
                    label: 'StepItem PT Options',
                    component: DocApiTable,
                    data: getPTOptions('StepItem')
                },
                {
                    id: 'pt.doc.step',
                    label: 'Step PT Options',
                    component: DocApiTable,
                    data: getPTOptions('Step')
                },
                {
                    id: 'pt.doc.steppanel',
                    label: 'StepPanel PT Options',
                    component: DocApiTable,
                    data: getPTOptions('StepPanel')
                }
            ]
        };
    }
};
</script>
