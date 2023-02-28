<template>
    <DocComponent title="Vue Menu Component" header="Menu" description="Menu is a navigation/command component that supports dynamic and static positioning." :componentDocs="docs" :apiDocs="['Menu', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/menu/AccessibilityDoc';
import BasicDoc from '@/doc/menu/BasicDoc';
import GroupDoc from '@/doc/menu/GroupDoc';
import ImportDoc from '@/doc/menu/ImportDoc';
import PopupDoc from '@/doc/menu/PopupDoc';
import StyleDoc from '@/doc/menu/StyleDoc';
import TemplateDoc from '@/doc/menu/TemplateDoc';

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
                    id: 'group',
                    label: 'Group',
                    component: GroupDoc
                },
                {
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
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
