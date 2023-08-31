<template>
    <DocComponent
        title="Vue MegaMenu Component"
        header="MegaMenu"
        description="MegaMenu is navigation component that displays submenus together."
        :componentDocs="docs"
        :apiDocs="['MegaMenu', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/megamenu/AccessibilityDoc';
import BasicDoc from '@/doc/megamenu/BasicDoc';
import ImportDoc from '@/doc/megamenu/ImportDoc';
import RouterDoc from '@/doc/megamenu/RouterDoc';
import TemplateDoc from '@/doc/megamenu/TemplateDoc';
import VerticalDoc from '@/doc/megamenu/VerticalDoc';
import PTComponent from '@/doc/megamenu/pt/index.vue';
import ThemingDoc from '@/doc/megamenu/theming/index.vue';

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
                    id: 'router',
                    label: 'Router',
                    component: RouterDoc
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility',
                    component: AccessibilityDoc
                }
            ],
            ptComponent: PTComponent,
            themingDoc: ThemingDoc
        };
    }
};
</script>
