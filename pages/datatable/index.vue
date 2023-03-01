<template>
    <DocComponent title="Vue Table Component" header="DataTable" description="DataTable displays data in tabular format." :componentDocs="docs" :apiDocs="['DataTable', 'Column', 'ColumnGroup', 'Row']" />
</template>

<script>
import AccessibilityDoc from '@/doc/datatable/AccessibilityDoc';
import BasicDoc from '@/doc/datatable/BasicDoc';
import ExpandModeDoc from '@/doc/datatable/colresize/ExpandModeDoc';
import FitModeDoc from '@/doc/datatable/colresize/FitModeDoc';
import ColumnGroupDoc from '@/doc/datatable/ColumnGroupDoc';
import ColumnToggleDoc from '@/doc/datatable/ColumnToggleDoc';
import ConditionalStyleDoc from '@/doc/datatable/ConditionalStyleDoc';
import ContextMenuDoc from '@/doc/datatable/ContextMenuDoc';
import DynamicColumnsDoc from '@/doc/datatable/DynamicColumnsDoc';
import CellEditDoc from '@/doc/datatable/edit/CellEditDoc';
import FilterSortEditDoc from '@/doc/datatable/edit/FilterSortEditDoc';
import RowEditDoc from '@/doc/datatable/edit/RowEditDoc';
import ExportDoc from '@/doc/datatable/ExportDoc';
import AdvancedFilterDoc from '@/doc/datatable/filter/AdvancedFilterDoc';
import BasicFilterDoc from '@/doc/datatable/filter/BasicFilterDoc';
import GridLinesDoc from '@/doc/datatable/GridLinesDoc';
import ImportDoc from '@/doc/datatable/ImportDoc';
import LazyLoadDoc from '@/doc/datatable/LazyLoadDoc';
import PaginatorBasicDoc from '@/doc/datatable/paginator/PaginatorBasicDoc';
import PaginatorTemplateDoc from '@/doc/datatable/paginator/PaginatorTemplateDoc';
import ReorderDoc from '@/doc/datatable/ReorderDoc';
import RowExpansionDoc from '@/doc/datatable/RowExpansionDoc';
import ExpandableRowGroupDoc from '@/doc/datatable/rowgroup/ExpandableRowGroupDoc';
import RowSpanRowGroupDoc from '@/doc/datatable/rowgroup/RowSpanRowGroupDoc';
import SubHeaderRowGroupDoc from '@/doc/datatable/rowgroup/SubHeaderRowGroupDoc';
import CheckboxRowSelectionDoc from '@/doc/datatable/rowselection/CheckboxRowSelectionDoc';
import MultipleRowsSelectionDoc from '@/doc/datatable/rowselection/MultipleRowsSelectionDoc';
import RadioButtonRowSelectionDoc from '@/doc/datatable/rowselection/RadioButtonRowSelectionDoc';
import RowSelectEventsDoc from '@/doc/datatable/rowselection/RowSelectEventsDoc';
import SingleRowSelectionDoc from '@/doc/datatable/rowselection/SingleRowSelectionDoc';
import CustomersDoc from '@/doc/datatable/samples/CustomersDoc';
import ProductsDoc from '@/doc/datatable/samples/ProductsDoc';
import FlexibleScrollDoc from '@/doc/datatable/scroll/FlexibleScrollDoc';
import FrozenColumnsDoc from '@/doc/datatable/scroll/FrozenColumnsDoc';
import FrozenRowsDoc from '@/doc/datatable/scroll/FrozenRowsDoc';
import HorizontalScrollDoc from '@/doc/datatable/scroll/HorizontalScrollDoc';
import VerticalScrollDoc from '@/doc/datatable/scroll/VerticalScrollDoc';
import SizeDoc from '@/doc/datatable/SizeDoc';
import MultipleColumnsDoc from '@/doc/datatable/sort/MultipleColumnsDoc';
import PresortDoc from '@/doc/datatable/sort/PresortDoc';
import RemovableSortDoc from '@/doc/datatable/sort/RemovableSortDoc';
import SingleColumnDoc from '@/doc/datatable/sort/SingleColumnDoc';
import StatefulDoc from '@/doc/datatable/StatefulDoc';
import StripedRowsDoc from '@/doc/datatable/StripedRowsDoc';
import StyleDoc from '@/doc/datatable/StyleDoc';
import TemplateDoc from '@/doc/datatable/TemplateDoc';
import LazyVirtualScrollDoc from '@/doc/datatable/virtualscroll/LazyVirtualScrollDoc';
import PreloadVirtualScrollDoc from '@/doc/datatable/virtualscroll/PreloadVirtualScrollDoc';

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
                        },
                        {
                            id: 'cell_edit_filter_sort',
                            label: 'Filter & Sort Cell Edit',
                            component: FilterSortEditDoc
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
