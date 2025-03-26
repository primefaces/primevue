<template>
    <DocComponent title="Vue Table Component" header="DataTable" description="DataTable displays data in tabular format." :componentDocs="docs" />
</template>

<script setup lang="ts">
import BasicDoc from '@/doc/datatable/BasicDoc.vue';
import ColumnGroupDoc from '@/doc/datatable/ColumnGroupDoc.vue';
import ColumnToggleDoc from '@/doc/datatable/ColumnToggleDoc.vue';
import ConditionalStyleDoc from '@/doc/datatable/ConditionalStyleDoc.vue';
import DownloadDoc from '@/doc/datatable/DownloadDoc.vue';
import DynamicDoc from '@/doc/datatable/DynamicDoc.vue';
import ExportDoc from '@/doc/datatable/ExportDoc.vue';
import FilterDoc from '@/doc/datatable/FilterDoc.vue';
import ImportDoc from '@/doc/datatable/ImportDoc.vue';
import NoticeDoc from '@/doc/datatable/NoticeDoc.vue';
import PaginationDoc from '@/doc/datatable/PaginationDoc.vue';
import RowExpansionDoc from '@/doc/datatable/RowExpansionDoc.vue';
import CheckboxRowSelectionDoc from '@/doc/datatable/rowselection/CheckboxRowSelectionDoc.vue';
import ColumnRowSelectionDoc from '@/doc/datatable/rowselection/ColumnRowSelectionDoc.vue';
import MultipleRowsSelectionDoc from '@/doc/datatable/rowselection/MultipleRowsSelectionDoc.vue';
import RadioButtonRowSelectionDoc from '@/doc/datatable/rowselection/RadioButtonRowSelectionDoc.vue';
import RowSelectEventsDoc from '@/doc/datatable/rowselection/RowSelectEventsDoc.vue';
import SingleRowSelectionDoc from '@/doc/datatable/rowselection/SingleRowSelectionDoc.vue';
import FlexibleScrollDoc from '@/doc/datatable/scroll/FlexibleScrollDoc.vue';
import FrozenColumnsDoc from '@/doc/datatable/scroll/FrozenColumnsDoc.vue';
import FrozenRowsDoc from '@/doc/datatable/scroll/FrozenRowsDoc.vue';
import HorizontalScrollDoc from '@/doc/datatable/scroll/HorizontalScrollDoc.vue';
import VerticalScrollDoc from '@/doc/datatable/scroll/VerticalScrollDoc.vue';
import MultipleColumnsDoc from '@/doc/datatable/sort/MultipleColumnsDoc.vue';
import PreSortDoc from '@/doc/datatable/sort/PreSortDoc.vue';
import RemovableSortDoc from '@/doc/datatable/sort/RemovableSortDoc.vue';
import SingleColumnDoc from '@/doc/datatable/sort/SingleColumnDoc.vue';
import TemplateDoc from '@/doc/datatable/TemplateDoc.vue';
import LazyVirtualScrollDoc from '@/doc/datatable/virtualscroll/LazyVirtualScrollDoc.vue';
import PreloadVirtualScrollDoc from '@/doc/datatable/virtualscroll/PreloadVirtualScrollDoc.vue';

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
        id: 'dynamic',
        label: 'Dynamic',
        component: DynamicDoc
    },
    {
        id: 'template',
        label: 'Template',
        component: TemplateDoc
    },
    {
        id: 'pagination',
        label: 'Pagination',
        component: PaginationDoc
    },
    {
        id: 'sort',
        label: 'Sort',
        children: [
            {
                id: 'single_sort',
                label: 'Single Column',
                component: SingleColumnDoc
            },
            {
                id: 'multiple_sort',
                label: 'Multiple Columns',
                component: MultipleColumnsDoc
            },
            {
                id: 'pre_sort',
                label: 'PreSort',
                component: PreSortDoc
            },
            {
                id: 'removable_sort',
                label: 'Removable',
                component: RemovableSortDoc
            }
        ]
    },
    {
        id: 'filter',
        label: 'Filter',
        component: FilterDoc
    },
    {
        id: 'row_selection',
        label: 'Row Selection',
        children: [
            {
                id: 'single_row_selection',
                label: 'Single',
                component: SingleRowSelectionDoc
            },
            {
                id: 'multiple_rows_selection',
                label: 'Multiple',
                component: MultipleRowsSelectionDoc
            },
            {
                id: 'radiobutton_row_selection',
                label: 'RadioButton',
                component: RadioButtonRowSelectionDoc
            },
            {
                id: 'checkbox_row_selection',
                label: 'Checkbox',
                component: CheckboxRowSelectionDoc
            },
            {
                id: 'column_row_selection',
                label: 'Column',
                component: ColumnRowSelectionDoc
            },
            {
                id: 'row_selection_events',
                label: 'Events',
                component: RowSelectEventsDoc
            }
        ]
    },
    {
        id: 'row_expansion',
        label: 'Row Expansion',
        component: RowExpansionDoc
    },
    {
        id: 'scroll',
        label: 'Scroll',
        children: [
            {
                id: 'vertical_scroll',
                label: 'Vertical',
                component: VerticalScrollDoc
            },
            {
                id: 'flex_scroll',
                label: 'Flexible',
                component: FlexibleScrollDoc
            },
            {
                id: 'horizontal_scroll',
                label: 'Horizontal',
                component: HorizontalScrollDoc
            },
            {
                id: 'frozen_rows',
                label: 'Frozen Rows',
                component: FrozenRowsDoc
            },
            {
                id: 'frozen_columns',
                label: 'Frozen Columns',
                component: FrozenColumnsDoc
            }
        ]
    },
    {
        id: 'virtualscroll',
        label: 'Virtual Scroll',
        children: [
            {
                id: 'preload_virtualscroll',
                label: 'Preload',
                component: PreloadVirtualScrollDoc
            },
            {
                id: 'lazy_virtualscroll',
                label: 'Lazy',
                component: LazyVirtualScrollDoc
            }
        ]
    },
    {
        id: 'column_toggle',
        label: 'Column Toggle',
        component: ColumnToggleDoc
    },
    {
        id: 'column_group',
        label: 'Column Group',
        component: ColumnGroupDoc
    },
    {
        id: 'conditional_style',
        label: 'Conditional Style',
        component: ConditionalStyleDoc
    },
    {
        id: 'export',
        label: 'Export',
        component: ExportDoc
    },
    {
        id: 'notice',
        label: 'Notice',
        component: NoticeDoc
    }
]);
</script>
