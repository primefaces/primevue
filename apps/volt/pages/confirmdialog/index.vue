<template>
    <DocComponent title="Vue Confirmation Dialog Component" header="ConfirmDialog" description="ConfirmDialog uses a Dialog UI that is integrated with the Confirmation API." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/confirmdialog/BasicDoc.vue';
import ConfirmationServiceDoc from '@/doc/confirmdialog/ConfirmationServiceDoc.vue';
import DownloadDoc from '@/doc/confirmdialog/DownloadDoc.vue';
import HeadlessDoc from '@/doc/confirmdialog/HeadlessDoc.vue';
import ImportDoc from '@/doc/confirmdialog/ImportDoc.vue';
import NoticeDoc from '@/doc/confirmdialog/NoticeDoc.vue';
import { ref } from 'vue';

const docs = ref([
    {
        id: 'dowload',
        label: 'Download',
        component: DownloadDoc
    },
    {
        id: 'import',
        label: 'Import',
        component: ImportDoc
    },
    {
        id: 'confirmation-service',
        label: 'Service',
        component: ConfirmationServiceDoc
    },
    {
        id: 'basic',
        label: 'Basic',
        component: BasicDoc
    },
    {
        id: 'headless',
        label: 'Headless',
        component: HeadlessDoc
    },
    {
        id: 'notice',
        label: 'Notice',
        component: NoticeDoc
    }
]);
</script>
