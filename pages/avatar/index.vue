<template>
    <DocComponent
        title="Vue Avatar Component"
        header="Avatar"
        description="Avatar represents people using icons, labels and images."
        :componentDocs="docs"
        :apiDocs="['Avatar', 'AvatarGroup']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import ThemingDoc from '@/doc/Avatar/theming/index.vue';
import AccessibilityDoc from '@/doc/avatar/AccessibilityDoc';
import AvatarGroupDoc from '@/doc/avatar/AvatarGroupDoc';
import IconDoc from '@/doc/avatar/IconDoc';
import ImageDoc from '@/doc/avatar/ImageDoc';
import ImportDoc from '@/doc/avatar/ImportDoc';
import LabelDoc from '@/doc/avatar/LabelDoc';
import PTComponent from '@/doc/avatar/pt/index.vue';

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
                    id: 'label',
                    label: 'Label',
                    component: LabelDoc
                },
                {
                    id: 'icon',
                    label: 'Icon',
                    component: IconDoc
                },
                {
                    id: 'image',
                    label: 'Image',
                    component: ImageDoc
                },
                {
                    id: 'avatargroup',
                    label: 'AvatarGroup',
                    component: AvatarGroupDoc
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
