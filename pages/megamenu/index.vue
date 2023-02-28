<template>
    <DocComponent title="Vue MegaMenu Component" header="MegaMenu" description="MegaMenu is navigation component that displays submenus together." :componentDocs="docs" :apiDocs="['MegaMenu', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/megamenu/AccessibilityDoc';
import BasicDoc from '@/doc/megamenu/BasicDoc';
import ImportDoc from '@/doc/megamenu/ImportDoc';
import StyleDoc from '@/doc/megamenu/StyleDoc';
import TemplateDoc from '@/doc/megamenu/TemplateDoc';
import VerticalDoc from '@/doc/megamenu/VerticalDoc';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'import',
                    label: 'Import',
                    component: ImportDoc
                },
                {
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'Vertical',
                    label: 'Vertical',
                    component: VerticalDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ]
        };
    }
};
</script>
