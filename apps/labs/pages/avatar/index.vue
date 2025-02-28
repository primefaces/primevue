<template>
    <DocComponent title="Vue Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." :componentDocs="docs" :presetDoc="presetDoc" apiLink="/avatar/#api" ptLink="/avatar/#pt" />
</template>

<script>
import AccessibilityDoc from '@/doc/avatar/AccessibilityDoc';
import AvatarGroupDoc from '@/doc/avatar/AvatarGroupDoc.vue';
import IconDoc from '@/doc/avatar/IconDoc.vue';
import ImageDoc from '@/doc/avatar/ImageDoc.vue';
import ImportDoc from '@/doc/avatar/ImportDoc.vue';
import LabelDoc from '@/doc/avatar/LabelDoc.vue';

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
            presetDoc: {
                key: 'avatar'
            }
        };
    }
};
</script>
