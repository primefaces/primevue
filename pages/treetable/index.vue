<template>
    <DocComponent
        title="Vue TreeTable Component"
        header="TreeTable"
        description="TreeTable is used to display hierarchical data in tabular format."
        :componentDocs="docs"
        :apiDocs="['TreeTable', 'Column', 'TreeNode']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/treetable/AccessibilityDoc.vue';
import BasicDoc from '@/doc/treetable/BasicDoc.vue';
import ColumnToggleDoc from '@/doc/treetable/ColumnToggleDoc.vue';
import ControlledDoc from '@/doc/treetable/ControlledDoc.vue';
import DynamicColumnsDoc from '@/doc/treetable/DynamicColumnsDoc.vue';
import FilterDoc from '@/doc/treetable/FilterDoc.vue';
import ImportDoc from '@/doc/treetable/ImportDoc.vue';
import LazyLoadDoc from '@/doc/treetable/LazyLoadDoc.vue';
import SizeDoc from '@/doc/treetable/SizeDoc.vue';
import TemplateDoc from '@/doc/treetable/TemplateDoc.vue';
import PaginationBasicDoc from '@/doc/treetable/pagination/PaginationBasicDoc.vue';
import PaginationTemplateDoc from '@/doc/treetable/pagination/PaginationTemplateDoc.vue';
import PTComponent from '@/doc/treetable/pt/index.vue';
import ExpandModeDoc from '@/doc/treetable/resize/ExpandModeDoc.vue';
import FitModeDoc from '@/doc/treetable/resize/FitModeDoc.vue';
import FlexibleScrollDoc from '@/doc/treetable/scroll/FlexibleScrollDoc.vue';
import FrozenColumnsDoc from '@/doc/treetable/scroll/FrozenColumnsDoc.vue';
import HorizontalScrollDoc from '@/doc/treetable/scroll/HorizontalScrollDoc.vue';
import VerticalScrollDoc from '@/doc/treetable/scroll/VerticalScrollDoc.vue';
import CheckboxRowSelectionDoc from '@/doc/treetable/selection/CheckboxRowSelectionDoc.vue';
import MultipleRowsSelectionDoc from '@/doc/treetable/selection/MultipleRowsSelectionDoc.vue';
import RowSelectionEventsDoc from '@/doc/treetable/selection/RowSelectionEventsDoc.vue';
import SingleRowSelectionDoc from '@/doc/treetable/selection/SingleRowSelectionDoc.vue';
import MultipleColumnsDoc from '@/doc/treetable/sort/MultipleColumnsDoc.vue';
import RemovableSortDoc from '@/doc/treetable/sort/RemovableSortDoc.vue';
import SingleColumnDoc from '@/doc/treetable/sort/SingleColumnDoc.vue';
import ThemingDoc from '@/doc/treetable/theming/index.vue';

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
                    id: 'basic',
                    label: 'Basic',
                    component: BasicDoc
                },
                {
                    id: 'dynamic_columns',
                    label: 'Dynamic Columns',
                    component: DynamicColumnsDoc
                },
                {
                    id: 'controlled',
                    label: 'Controlled',
                    component: ControlledDoc
                },
                {
                    id: 'template',
                    label: 'Template',
                    component: TemplateDoc
                },
                {
                    id: 'size',
                    label: 'Size',
                    component: SizeDoc
                },
                {
                    id: 'pagination',
                    label: 'Pagination',
                    children: [
                        {
                            id: 'paginator_basic',
                            label: 'Basic',
                            component: PaginationBasicDoc
                        },
                        {
                            id: 'paginator_template',
                            label: 'Template',
                            component: PaginationTemplateDoc
                        }
                    ]
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
                            id: 'removable_sort',
                            label: 'Removable Sort',
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
                    id: 'selection',
                    label: 'Selection',
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
                            id: 'checkbox_row_selection',
                            label: 'Checkbox',
                            component: CheckboxRowSelectionDoc
                        },
                        {
                            id: 'row_selection_events',
                            label: 'Events',
                            component: RowSelectionEventsDoc
                        }
                    ]
                },
                {
                    id: 'lazy_load',
                    label: 'Lazy Load',
                    component: LazyLoadDoc
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
                            id: 'frozen_columns',
                            label: 'Frozen Columns',
                            component: FrozenColumnsDoc
                        }
                    ]
                },
                {
                    id: 'column_resize',
                    label: 'Column Resize',
                    children: [
                        {
                            id: 'resize_fitmode',
                            label: 'Fit Mode',
                            component: FitModeDoc
                        },
                        {
                            id: 'resize_expandmode',
                            label: 'Expand Mode',
                            component: ExpandModeDoc
                        }
                    ]
                },
                {
                    id: 'column_toggle',
                    label: 'Column Toggle',
                    component: ColumnToggleDoc
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
