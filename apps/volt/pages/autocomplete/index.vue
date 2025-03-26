<template>
    <DocComponent title="Vue AutoComplete Component" header="AutoComplete" description="AutoComplete is an input component that provides real-time suggestions when being typed." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/autocomplete/BasicDoc.vue';
import DisabledDoc from '@/doc/autocomplete/DisabledDoc.vue';
import DownloadDoc from '@/doc/autocomplete/DownloadDoc.vue';
import DropdownDoc from '@/doc/autocomplete/DropdownDoc.vue';
import FilledDoc from '@/doc/autocomplete/FilledDoc.vue';
import ForceSelectionDoc from '@/doc/autocomplete/ForceSelectionDoc.vue';
import GroupDoc from '@/doc/autocomplete/GroupDoc.vue';
import ImportDoc from '@/doc/autocomplete/ImportDoc.vue';
import InvalidDoc from '@/doc/autocomplete/InvalidDoc.vue';
import MultipleDoc from '@/doc/autocomplete/MultipleDoc.vue';
import ObjectsDoc from '@/doc/autocomplete/ObjectsDoc.vue';
import SizesDoc from '@/doc/autocomplete/SizesDoc.vue';
import TemplateDoc from '@/doc/autocomplete/TemplateDoc.vue';
import VirtualScrollDoc from '@/doc/autocomplete/VirtualScrollDoc.vue';
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
        id: 'objects',
        label: 'Objects',
        component: ObjectsDoc
    },
    {
        id: 'dropdown',
        label: 'Dropdown',
        component: DropdownDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'group',
        label: 'Group',
        component: GroupDoc
    },
    {
        id: 'forceselection',
        label: 'Force Selection',
        component: ForceSelectionDoc
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
        id: 'multiple',
        label: 'Multiple',
        component: MultipleDoc
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
