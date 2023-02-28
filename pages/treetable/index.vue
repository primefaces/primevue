<template>
    <DocComponent title="Vue TreeTable Component" header="TreeTable" description="TreeTable is used to display hierarchical data in tabular format." :componentDocs="docs" :apiDocs="['TreeTable', 'Column']" />
</template>

<script>
import AccessibilityDoc from '@/doc/treetable/AccessibilityDoc';
import BasicDoc from '@/doc/treetable/BasicDoc';
import ColumnToggleDoc from '@/doc/treetable/ColumnToggleDoc';
import ControlledDoc from '@/doc/treetable/ControlledDoc';
import DynamicColumnsDoc from '@/doc/treetable/DynamicColumnsDoc';
import FilterDoc from '@/doc/treetable/FilterDoc';
import ImportDoc from '@/doc/treetable/ImportDoc';
import LazyLoadDoc from '@/doc/treetable/LazyLoadDoc';
import PaginatorBasicDoc from '@/doc/treetable/paginator/PaginatorBasicDoc';
import PaginatorTemplateDoc from '@/doc/treetable/paginator/PaginatorTemplateDoc';
import ExpandModeDoc from '@/doc/treetable/resize/ExpandModeDoc';
import FitModeDoc from '@/doc/treetable/resize/FitModeDoc';
import ResponsiveDoc from '@/doc/treetable/ResponsiveDoc';
import FlexibleScrollDoc from '@/doc/treetable/scroll/FlexibleScrollDoc';
import FrozenColumnsDoc from '@/doc/treetable/scroll/FrozenColumnsDoc';
import HorizontalScrollDoc from '@/doc/treetable/scroll/HorizontalScrollDoc';
import VerticalScrollDoc from '@/doc/treetable/scroll/VerticalScrollDoc';
import CheckboxRowSelectionDoc from '@/doc/treetable/selection/CheckboxRowSelectionDoc';
import MultipleRowsSelectionDoc from '@/doc/treetable/selection/MultipleRowsSelectionDoc';
import RowSelectionEventsDoc from '@/doc/treetable/selection/RowSelectionEventsDoc';
import SingleRowSelectionDoc from '@/doc/treetable/selection/SingleRowSelectionDoc';
import SizeDoc from '@/doc/treetable/SizeDoc';
import MultipleColumnsDoc from '@/doc/treetable/sort/MultipleColumnsDoc';
import RemovableSortDoc from '@/doc/treetable/sort/RemovableSortDoc';
import SingleColumnDoc from '@/doc/treetable/sort/SingleColumnDoc';
import StyleDoc from '@/doc/treetable/StyleDoc';
import TemplateDoc from '@/doc/treetable/TemplateDoc';

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
                    id: 'paginator',
                    label: 'Paginator',
                    children: [
                        {
                            id: 'paginator_basic',
                            label: 'Basic',
                            component: PaginatorBasicDoc
                        },
                        {
                            id: 'paginator_template',
                            label: 'Template',
                            component: PaginatorTemplateDoc
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
                    id: 'responsive',
                    label: 'Responsive',
                    component: ResponsiveDoc
                },
                {
                    id: 'style',
                    label: 'Style',
                    component: StyleDoc
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
