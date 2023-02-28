<template>
    <DocComponent title="Vue TieredMenu Component" header="TieredMenu" description="TieredMenu displays submenus in nested overlays." :componentDocs="docs" :apiDocs="['TieredMenu', 'MenuItem']" />
</template>

<script>
import AccessibilityDoc from '@/doc/tieredmenu/AccessibilityDoc';
import BasicDoc from '@/doc/tieredmenu/BasicDoc';
import ImportDoc from '@/doc/tieredmenu/ImportDoc';
import PopupDoc from '@/doc/tieredmenu/PopupDoc';
import StyleDoc from '@/doc/tieredmenu/StyleDoc';

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
                    id: 'popup',
                    label: 'Popup',
                    component: PopupDoc
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
