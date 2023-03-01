<template>
    <DocComponent title="Vue Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." :componentDocs="docs" :apiDocs="['Avatar', 'AvatarGroup']" />
</template>

<script>
import AccessibilityDoc from '@/doc/avatar/AccessibilityDoc';
import AvatarGroupDoc from '@/doc/avatar/AvatarGroupDoc';
import IconDoc from '@/doc/avatar/IconDoc';
import ImageDoc from '@/doc/avatar/ImageDoc';
import ImportDoc from '@/doc/avatar/ImportDoc';
import LabelDoc from '@/doc/avatar/LabelDoc';
import StylingAvatarDoc from '@/doc/avatar/StylingAvatarDoc';
import StylingAvatarGroupDoc from '@/doc/avatar/StylingAvatarGroupDoc';

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
                    id: 'stylingofavatar',
                    label: 'Styling of Avatar',
                    component: StylingAvatarDoc
                },
                {
                    id: 'stylingofavatargroup',
                    label: 'Styling of Avatar Group',
                    component: StylingAvatarGroupDoc
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
