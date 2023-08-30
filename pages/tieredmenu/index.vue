<template>
    <DocComponent
        title="Vue TieredMenu Component"
        header="TieredMenu"
        description="TieredMenu displays submenus in nested overlays."
        :componentDocs="docs"
        :apiDocs="['TieredMenu', 'MenuItem']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/tieredmenu/AccessibilityDoc';
import BasicDoc from '@/doc/tieredmenu/BasicDoc';
import ImportDoc from '@/doc/tieredmenu/ImportDoc';
import PopupDoc from '@/doc/tieredmenu/PopupDoc';
import RouterDoc from '@/doc/tieredmenu/RouterDoc';
import PTComponent from '@/doc/tieredmenu/pt/index.vue';
import ThemingDoc from '@/doc/tieredmenu/theming/index.vue';

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
