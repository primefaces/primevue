<template>
    <DocComponent title="Vue Dialog Component" header="Dialog" description="Dialog is a container to display content in an overlay window." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/dialog/BasicDoc.vue';
import DownloadDoc from '@/doc/dialog/DownloadDoc.vue';
import HeadlessDoc from '@/doc/dialog/HeadlessDoc.vue';
import ImportDoc from '@/doc/dialog/ImportDoc.vue';
import LongContentDoc from '@/doc/dialog/LongContentDoc.vue';
import MaximizableDoc from '@/doc/dialog/MaximizableDoc.vue';
import NoticeDoc from '@/doc/dialog/NoticeDoc.vue';
import ResponsiveDoc from '@/doc/dialog/ResponsiveDoc.vue';
import TemplateDoc from '@/doc/dialog/TemplateDoc.vue';
import WithoutModalDoc from '@/doc/dialog/WithoutModalDoc.vue';
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
        id: 'maximizable',
        label: 'Maximizable',
        component: MaximizableDoc
    },
    {
        id: 'longcontent',
        label: 'Long Content',
        component: LongContentDoc
    },
    {
        id: 'modal',
        label: 'Without Modal',
        component: WithoutModalDoc
    },
    {
        id: 'responsive',
        label: 'Responsive',
        component: ResponsiveDoc
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
