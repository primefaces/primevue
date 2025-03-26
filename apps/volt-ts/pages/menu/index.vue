<template>
    <DocComponent title="Vue Menu Component" header="Menu" description="Menu displays a list of items in vertical orientation." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/menu/BasicDoc.vue';
import CommandDoc from '@/doc/menu/CommandDoc.vue';
import DownloadDoc from '@/doc/menu/DownloadDoc.vue';
import GroupDoc from '@/doc/menu/GroupDoc.vue';
import ImportDoc from '@/doc/menu/ImportDoc.vue';
import PopupDoc from '@/doc/menu/PopupDoc.vue';
import RouterDoc from '@/doc/menu/RouterDoc.vue';
import TemplateDoc from '@/doc/menu/TemplateDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'download',
        label: 'Download',
        component: DownloadDoc
    },
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
        id: 'command',
        label: 'Command',
        component: CommandDoc
    },
    {
        id: 'router',
        label: 'Router',
        component: RouterDoc
    }
]);
</script>
