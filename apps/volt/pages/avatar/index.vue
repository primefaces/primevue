<template>
    <DocComponent title="Vue Avatar Component" header="Avatar" description="Avatar represents people using icons, labels and images." :componentDocs="docs" />
</template>

<script setup>
import AvatarGroupDoc from '@/doc/avatar/AvatarGroupDoc.vue';
import IconDoc from '@/doc/avatar/IconDoc.vue';
import ImageDoc from '@/doc/avatar/ImageDoc.vue';
import ImportDoc from '@/doc/avatar/ImportDoc.vue';
import LabelDoc from '@/doc/avatar/LabelDoc.vue';
import { ref } from 'vue';

const docs = ref([
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
    }
]);
</script>
