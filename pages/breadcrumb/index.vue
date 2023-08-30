<template>
    <DocComponent
        title="Vue Breadcrumb Component"
        header="Breadcrumb"
        description="Breadcrumb provides contextual information about page hierarchy."
        :componentDocs="docs"
        :apiDocs="['Breadcrumb', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/breadcrumb/AccessibilityDoc';
import BasicDoc from '@/doc/breadcrumb/BasicDoc';
import ImportDoc from '@/doc/breadcrumb/ImportDoc';
import RouterDoc from '@/doc/breadcrumb/RouterDoc';
import TemplateDoc from '@/doc/breadcrumb/TemplateDoc';
import PTComponent from '@/doc/breadcrumb/pt/index.vue';
import ThemingDoc from '@/doc/breadcrumb/theming/index.vue';

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
