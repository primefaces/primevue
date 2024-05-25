<template>
    <DocComponent
        title="Vue Table Component"
        header="DataTable"
        description="DataTable displays data in tabular format."
        :componentDocs="docs"
        :apiDocs="['DataTable', 'Column', 'ColumnGroup', 'Row']"
        :ptTabComponent="ptComponent"
        :themingDocs="themingDoc"
    />
</template>

<script>
import AccessibilityDoc from '@/doc/datatable/AccessibilityDoc.vue';
import BasicDoc from '@/doc/datatable/BasicDoc.vue';
import ColumnGroupDoc from '@/doc/datatable/ColumnGroupDoc.vue';
import ColumnToggleDoc from '@/doc/datatable/ColumnToggleDoc.vue';
import ConditionalStyleDoc from '@/doc/datatable/ConditionalStyleDoc.vue';
import ContextMenuDoc from '@/doc/datatable/ContextMenuDoc.vue';
import DynamicColumnsDoc from '@/doc/datatable/DynamicColumnsDoc.vue';
import ExportDoc from '@/doc/datatable/ExportDoc.vue';
import GridLinesDoc from '@/doc/datatable/GridLinesDoc.vue';
import ImportDoc from '@/doc/datatable/ImportDoc.vue';
import LazyLoadDoc from '@/doc/datatable/LazyLoadDoc.vue';
import ReorderDoc from '@/doc/datatable/ReorderDoc.vue';
import RowExpansionDoc from '@/doc/datatable/RowExpansionDoc.vue';
import SizeDoc from '@/doc/datatable/SizeDoc.vue';
import StatefulDoc from '@/doc/datatable/StatefulDoc.vue';
import StripedRowsDoc from '@/doc/datatable/StripedRowsDoc.vue';
import TemplateDoc from '@/doc/datatable/TemplateDoc.vue';
import ExpandModeDoc from '@/doc/datatable/colresize/ExpandModeDoc.vue';
import FitModeDoc from '@/doc/datatable/colresize/FitModeDoc.vue';
import CellEditDoc from '@/doc/datatable/edit/CellEditDoc.vue';
import RowEditDoc from '@/doc/datatable/edit/RowEditDoc.vue';
import AdvancedFilterDoc from '@/doc/datatable/filter/AdvancedFilterDoc.vue';
import BasicFilterDoc from '@/doc/datatable/filter/BasicFilterDoc.vue';
import PaginationBasicDoc from '@/doc/datatable/pagination/PaginationBasicDoc.vue';
import PaginationTemplateDoc from '@/doc/datatable/pagination/PaginationTemplateDoc.vue';
import PTComponent from '@/doc/datatable/pt/index.vue';
import ExpandableRowGroupDoc from '@/doc/datatable/rowgroup/ExpandableRowGroupDoc.vue';
import RowSpanRowGroupDoc from '@/doc/datatable/rowgroup/RowSpanRowGroupDoc.vue';
import SubHeaderRowGroupDoc from '@/doc/datatable/rowgroup/SubHeaderRowGroupDoc.vue';
import CheckboxRowSelectionDoc from '@/doc/datatable/rowselection/CheckboxRowSelectionDoc.vue';
import MultipleRowsSelectionDoc from '@/doc/datatable/rowselection/MultipleRowsSelectionDoc.vue';
import RadioButtonRowSelectionDoc from '@/doc/datatable/rowselection/RadioButtonRowSelectionDoc.vue';
import RowSelectEventsDoc from '@/doc/datatable/rowselection/RowSelectEventsDoc.vue';
import SingleRowSelectionDoc from '@/doc/datatable/rowselection/SingleRowSelectionDoc.vue';
import CustomersDoc from '@/doc/datatable/samples/CustomersDoc.vue';
import ProductsDoc from '@/doc/datatable/samples/ProductsDoc.vue';
import FlexibleScrollDoc from '@/doc/datatable/scroll/FlexibleScrollDoc.vue';
import FrozenColumnsDoc from '@/doc/datatable/scroll/FrozenColumnsDoc.vue';
import FrozenRowsDoc from '@/doc/datatable/scroll/FrozenRowsDoc.vue';
import HorizontalScrollDoc from '@/doc/datatable/scroll/HorizontalScrollDoc.vue';
import VerticalScrollDoc from '@/doc/datatable/scroll/VerticalScrollDoc.vue';
import MultipleColumnsDoc from '@/doc/datatable/sort/MultipleColumnsDoc.vue';
import PresortDoc from '@/doc/datatable/sort/PresortDoc.vue';
import RemovableSortDoc from '@/doc/datatable/sort/RemovableSortDoc.vue';
import SingleColumnDoc from '@/doc/datatable/sort/SingleColumnDoc.vue';
import ThemingDoc from '@/doc/datatable/theming/index.vue';
import LazyVirtualScrollDoc from '@/doc/datatable/virtualscroll/LazyVirtualScrollDoc.vue';
import PreloadVirtualScrollDoc from '@/doc/datatable/virtualscroll/PreloadVirtualScrollDoc.vue';

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
                    id: 'gridlines',
                    label: 'Grid Lines',
                    component: GridLinesDoc
                },
                {
                    id: 'striped',
                    label: 'Striped Rows',
                    component: StripedRowsDoc
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
                            id: 'pre_sort',
                            label: 'Presort',
                            component: PresortDoc
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
                    children: [
                        {
                            id: 'basic_filter',
                            label: 'Basic',
                            component: BasicFilterDoc
                        },
                        {
                            id: 'advanced_filter',
                            label: 'Advanced',
                            component: AdvancedFilterDoc
                        }
                    ]
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
                    id: 'edit',
                    label: 'Edit',
                    children: [
                        {
                            id: 'cell_edit',
                            label: 'Cell',
                            component: CellEditDoc
                        },
                        {
                            id: 'row_edit',
                            label: 'Row',
                            component: RowEditDoc
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
                    id: 'column_group',
                    label: 'Column Group',
                    component: ColumnGroupDoc
                },
                {
                    id: 'row_group',
                    label: 'Row Group',
                    children: [
                        {
                            id: 'rowgroup_subheader',
                            label: 'Subheader',
                            component: SubHeaderRowGroupDoc
                        },
                        {
                            id: 'rowgroup_expandable',
                            label: 'Expandable',
                            component: ExpandableRowGroupDoc
                        },
                        {
                            id: 'rowgroup_rowspan',
                            label: 'RowSpan',
                            component: RowSpanRowGroupDoc
                        }
                    ]
                },
                {
                    id: 'conditional_style',
                    label: 'Conditional Style',
                    component: ConditionalStyleDoc
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
                    id: 'reorder',
                    label: 'Reorder',
                    component: ReorderDoc
                },
                {
                    id: 'column_toggle',
                    label: 'Column Toggle',
                    component: ColumnToggleDoc
                },
                {
                    id: 'export',
                    label: 'Export',
                    component: ExportDoc
                },
                {
                    id: 'contextmenu',
                    label: 'Context Menu',
                    component: ContextMenuDoc
                },
                {
                    id: 'stateful',
                    label: 'Stateful',
                    component: StatefulDoc
                },
                {
                    id: 'samples',
                    label: 'Samples',
                    children: [
                        {
                            id: 'customers',
                            label: 'Customers',
                            component: CustomersDoc
                        },
                        {
                            id: 'dtproducts',
                            label: 'Products',
                            component: ProductsDoc
                        }
                    ]
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
