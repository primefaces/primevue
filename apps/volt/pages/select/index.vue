<template>
    <DocComponent title="Vue Select Component" header="Select" description="Select is used to choose an item from a collection of options." :componentDocs="docs" />
</template>

<script setup>
import BasicDoc from '@/doc/select/BasicDoc.vue';
import CheckmarkDoc from '@/doc/select/CheckmarkDoc.vue';
import ClearIconDoc from '@/doc/select/ClearIconDoc.vue';
import DisabledDoc from '@/doc/select/DisabledDoc.vue';
import DownloadDoc from '@/doc/select/DownloadDoc.vue';
import EditableDoc from '@/doc/select/EditableDoc.vue';
import FilledDoc from '@/doc/select/FilledDoc.vue';
import FilterDoc from '@/doc/select/FilterDoc.vue';
import GroupDoc from '@/doc/select/GroupDoc.vue';
import ImportDoc from '@/doc/select/ImportDoc.vue';
import InvalidDoc from '@/doc/select/InvalidDoc.vue';
import LoadingStateDoc from '@/doc/select/LoadingStateDoc.vue';
import SizesDoc from '@/doc/select/SizesDoc.vue';
import TemplateDoc from '@/doc/select/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/select/VirtualScrollDoc.vue';
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
        id: 'checkmark',
        label: 'Checkmark',
        component: CheckmarkDoc
    },
    {
        id: 'editable',
        label: 'Editable',
        component: EditableDoc
    },
    {
        id: 'group',
        label: 'Group',
        component: GroupDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'filter',
        label: 'Filter',
        component: FilterDoc
    },
    {
        id: 'clearicon',
        label: 'Clear Icon',
        component: ClearIconDoc
    },
    {
        id: 'loadingstate',
        label: 'Loading State',
        component: LoadingStateDoc
    },
    {
        id: 'virtualscroll',
        label: 'Virtual Scroll',
        component: VirtualScrollDoc
    },
    {
        id: 'filled',
        label: 'Filled',
        component: FilledDoc
    },
    {
        id: 'sizes',
        label: 'Sizes',
        component: SizesDoc
    },
    {
        id: 'invalid',
        label: 'Invalid',
        component: InvalidDoc
    },
    {
        id: 'disabled',
        label: 'Disabled',
        component: DisabledDoc
    }
]);
</script>
