<template>
    <tbody :ref="bodyRef" :class="cx('tbody')" role="rowgroup" :style="bodyStyle" v-bind="ptm('tbody', ptmTBodyOptions)">
        <template v-if="!empty">
            <template v-for="(rowData, index) of value">
                <tr
                    v-if="templates['groupheader'] && rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(index))"
                    :key="getRowKey(rowData, getRowIndex(index)) + '_subheader'"
                    :class="cx('rowGroupHeader')"
                    :style="rowGroupHeaderStyle"
                    role="row"
                    v-bind="ptm('rowGroupHeader')"
                >
                    <td :colspan="columnsLength - 1" v-bind="{ ...ptm('column.root'), ...ptm('column.bodyCell') }" data-pc-section="bodycell">
                        <button v-if="expandableRowGroups" :class="cx('rowGroupToggler')" @click="onRowGroupToggle($event, rowData)" type="button" v-bind="ptm('rowGroupToggler')">
                            <component v-if="templates['rowgrouptogglericon']" :is="templates['rowgrouptogglericon']" :expanded="isRowGroupExpanded(rowData)" />
                            <template v-else>
                                <span v-if="isRowGroupExpanded(rowData) && expandedRowIcon" :class="[cx('rowGroupTogglerIcon'), expandedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                                <ChevronDownIcon v-else-if="isRowGroupExpanded(rowData) && !expandedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                                <span v-else-if="!isRowGroupExpanded(rowData) && collapsedRowIcon" :class="[cx('rowGroupTogglerIcon'), collapsedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                                <ChevronRightIcon v-else-if="!isRowGroupExpanded(rowData) && !collapsedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                            </template>
                        </button>
                        <component :is="templates['groupheader']" :data="rowData" :index="getRowIndex(index)" />
                    </td>
                </tr>
                <tr
                    v-if="expandableRowGroups ? isRowGroupExpanded(rowData) : true"
                    :key="getRowKey(rowData, getRowIndex(index))"
                    :class="getRowClass(rowData)"
                    :style="getRowStyle(rowData)"
                    :tabindex="setRowTabindex(index)"
                    role="row"
                    :aria-selected="selectionMode ? isSelected(rowData) : null"
                    @click="onRowClick($event, rowData, getRowIndex(index))"
                    @dblclick="onRowDblClick($event, rowData, getRowIndex(index))"
                    @contextmenu="onRowRightClick($event, rowData, getRowIndex(index))"
                    @touchend="onRowTouchEnd($event)"
                    @keydown="onRowKeyDown($event, rowData, getRowIndex(index))"
                    @mousedown="onRowMouseDown($event)"
                    @dragstart="onRowDragStart($event, getRowIndex(index))"
                    @dragover="onRowDragOver($event, getRowIndex(index))"
                    @dragleave="onRowDragLeave($event)"
                    @dragend="onRowDragEnd($event)"
                    @drop="onRowDrop($event)"
                    v-bind="getBodyRowPTOptions('bodyRow', rowData, index)"
                    :data-p-selectable-row="selectionMode ? true : false"
                    :data-p-highlight="selection && isSelected(rowData)"
                    :data-p-highlight-contextmenu="contextMenuSelection && isSelectedWithContextMenu(rowData)"
                >
                    <template v-for="(col, i) of columns">
                        <DTBodyCell
                            v-if="shouldRenderBodyCell(value, col, getRowIndex(index))"
                            :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i"
                            :rowData="rowData"
                            :column="col"
                            :rowIndex="getRowIndex(index)"
                            :index="i"
                            :selected="isSelected(rowData)"
                            :frozenRow="frozenRow"
                            :rowspan="rowGroupMode === 'rowspan' ? calculateRowGroupSize(value, col, getRowIndex(index)) : null"
                            :editMode="editMode"
                            :editing="editMode === 'row' && isRowEditing(rowData)"
                            :editingMeta="editingMeta"
                            :responsiveLayout="responsiveLayout"
                            :virtualScrollerContentProps="virtualScrollerContentProps"
                            :ariaControls="expandedRowId + '_' + index + '_expansion'"
                            :name="nameAttributeSelector"
                            :isRowExpanded="isRowExpanded(rowData)"
                            :expandedRowIcon="expandedRowIcon"
                            :collapsedRowIcon="collapsedRowIcon"
                            @radio-change="onRadioChange($event)"
                            @checkbox-change="onCheckboxChange($event)"
                            @row-toggle="onRowToggle($event)"
                            @cell-edit-init="onCellEditInit($event)"
                            @cell-edit-complete="onCellEditComplete($event)"
                            @cell-edit-cancel="onCellEditCancel($event)"
                            @row-edit-init="onRowEditInit($event)"
                            @row-edit-save="onRowEditSave($event)"
                            @row-edit-cancel="onRowEditCancel($event)"
                            @editing-meta-change="onEditingMetaChange"
                            :unstyled="unstyled"
                            :pt="pt"
                        />
                    </template>
                </tr>
                <tr
                    v-if="templates['expansion'] && expandedRows && isRowExpanded(rowData)"
                    :key="getRowKey(rowData, getRowIndex(index)) + '_expansion'"
                    :id="expandedRowId + '_' + index + '_expansion'"
                    :class="cx('rowExpansion')"
                    role="row"
                    v-bind="ptm('rowExpansion')"
                >
                    <td :colspan="columnsLength" v-bind="{ ...getColumnPT('root'), ...getColumnPT('bodyCell') }">
                        <component :is="templates['expansion']" :data="rowData" :index="getRowIndex(index)" />
                    </td>
                </tr>
                <tr
                    v-if="templates['groupfooter'] && rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(index))"
                    :key="getRowKey(rowData, getRowIndex(index)) + '_subfooter'"
                    :class="cx('rowGroupFooter')"
                    role="row"
                    v-bind="ptm('rowGroupFooter')"
                >
                    <td :colspan="columnsLength - 1" v-bind="{ ...ptm('column.root'), ...ptm('column.footerCell') }" data-pc-section="footercell">
                        <component :is="templates['groupfooter']" :data="rowData" :index="getRowIndex(index)" />
                    </td>
                </tr>
            </template>
        </template>
        <tr v-else :class="cx('emptyMessage')" role="row" v-bind="ptm('emptyMessage')">
            <td :colspan="columnsLength" v-bind="{ ...getColumnPT('root'), ...getColumnPT('bodyCell') }">
                <component v-if="templates.empty" :is="templates.empty" />
            </td>
        </tr>
    </tbody>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import { DomHandler, ObjectUtils, UniqueComponentId } from 'primevue/utils';
import { mergeProps } from 'vue';
import BodyCell from './BodyCell.vue';

export default {
    name: 'TableBody',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: [
        'rowgroup-toggle',
        'row-click',
        'row-dblclick',
        'row-rightclick',
        'row-touchend',
        'row-keydown',
        'row-mousedown',
        'row-dragstart',
        'row-dragover',
        'row-dragleave',
        'row-dragend',
        'row-drop',
        'row-toggle',
        'radio-change',
        'checkbox-change',
        'cell-edit-init',
        'cell-edit-complete',
        'cell-edit-cancel',
        'row-edit-init',
        'row-edit-save',
        'row-edit-cancel',
        'editing-meta-change'
    ],
    props: {
        value: {
            type: Array,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array, String, Function],
            default: null
        },
        expandableRowGroups: {
            type: Boolean,
            default: false
        },
        expandedRowGroups: {
            type: Array,
            default: null
        },
        first: {
            type: Number,
            default: 0
        },
        dataKey: {
            type: String,
            default: null
        },
        expandedRowIcon: {
            type: String,
            default: null
        },
        collapsedRowIcon: {
            type: String,
            default: null
        },
        expandedRows: {
            type: Array,
            default: null
        },
        expandedRowKeys: {
            type: null,
            default: null
        },
        selection: {
            type: [Array, Object],
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        contextMenu: {
            type: Boolean,
            default: false
        },
        contextMenuSelection: {
            type: Object,
            default: null
        },
        rowClass: {
            type: null,
            default: null
        },
        rowStyle: {
            type: null,
            default: null
        },
        editMode: {
            type: String,
            default: null
        },
        compareSelectionBy: {
            type: String,
            default: 'deepEquals'
        },
        editingRows: {
            type: Array,
            default: null
        },
        editingRowKeys: {
            type: null,
            default: null
        },
        editingMeta: {
            type: Object,
            default: null
        },
        templates: {
            type: null,
            default: null
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        responsiveLayout: {
            type: String,
            default: 'stack'
        },
        virtualScrollerContentProps: {
            type: Object,
            default: null
        },
        isVirtualScrollerDisabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            rowGroupHeaderStyleObject: {},
            tabindexArray: [],
            isARowSelected: false
        };
    },
    mounted() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }
    },
    updated() {
        if (this.frozenRow) {
            this.updateFrozenRowStickyPosition();
        }

        if (this.scrollable && this.rowGroupMode === 'subheader') {
            this.updateFrozenRowGroupHeaderStickyPosition();
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getColumnPT(currentColumn, key) {
            const columnMetaData = {
                props: currentColumn.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(currentColumn), key, columnMetaData));
        },
        getColumnProp(column) {
            return column.props && column.props.pt ? column.props.pt : undefined; //@todo
        },
        getBodyRowPTOptions(key, rowdata, index) {
            return this.ptm(key, {
                context: {
                    index,
                    selectable: this.$parentInstance?.$parentInstance?.rowHover || this.$parentInstance?.$parentInstance?.selectionMode,
                    selected: this.isSelected(rowdata),
                    stripedRows: this.$parentInstance?.$parentInstance?.stripedRows || false
                }
            });
        },
        shouldRenderRowGroupHeader(value, rowData, i) {
            let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
            let prevRowData = value[i - 1];

            if (prevRowData) {
                let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);

                return currentRowFieldData !== previousRowFieldData;
            } else {
                return true;
            }
        },
        getRowKey(rowData, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey) : this.getRowIndex(index);
        },
        getRowIndex(index) {
            const getItemOptions = this.getVirtualScrollerProp('getItemOptions');

            return getItemOptions ? getItemOptions(index).index : this.first + index;
        },
        getRowStyle(rowData) {
            if (this.rowStyle) {
                return this.rowStyle(rowData);
            }
        },
        getRowClass(rowData) {
            let rowStyleClass = [];

            if (this.rowClass) {
                let rowClassValue = this.rowClass(rowData);

                if (rowClassValue) {
                    rowStyleClass.push(rowClassValue);
                }
            }

            return [this.cx('row', { rowData }), rowStyleClass];
        },
        shouldRenderRowGroupFooter(value, rowData, i) {
            if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
                return false;
            } else {
                let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                let nextRowData = value[i + 1];

                if (nextRowData) {
                    let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);

                    return currentRowFieldData !== nextRowFieldData;
                } else {
                    return true;
                }
            }
        },
        shouldRenderBodyCell(value, column, i) {
            if (this.rowGroupMode) {
                if (this.rowGroupMode === 'subheader') {
                    return this.groupRowsBy !== this.columnProp(column, 'field');
                } else if (this.rowGroupMode === 'rowspan') {
                    if (this.isGrouped(column)) {
                        let prevRowData = value[i - 1];

                        if (prevRowData) {
                            let currentRowFieldData = ObjectUtils.resolveFieldData(value[i], this.columnProp(column, 'field'));
                            let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.columnProp(column, 'field'));

                            return currentRowFieldData !== previousRowFieldData;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            } else {
                return !this.columnProp(column, 'hidden');
            }
        },
        calculateRowGroupSize(value, column, index) {
            if (this.isGrouped(column)) {
                let currentRowFieldData = ObjectUtils.resolveFieldData(value[index], this.columnProp(column, 'field'));
                let nextRowFieldData = currentRowFieldData;
                let groupRowSpan = 0;

                while (currentRowFieldData === nextRowFieldData) {
                    groupRowSpan++;
                    let nextRowData = value[++index];

                    if (nextRowData) {
                        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.columnProp(column, 'field'));
                    } else {
                        break;
                    }
                }

                return groupRowSpan === 1 ? null : groupRowSpan;
            } else {
                return null;
            }
        },
        isGrouped(column) {
            if (this.groupRowsBy && this.columnProp(column, 'field')) {
                if (Array.isArray(this.groupRowsBy)) return this.groupRowsBy.indexOf(column.props.field) > -1;
                else return this.groupRowsBy === column.props.field;
            } else {
                return false;
            }
        },
        isRowEditing(rowData) {
            if (rowData && this.editingRows) {
                if (this.dataKey) return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else return this.findIndex(rowData, this.editingRows) > -1;
            }

            return false;
        },
        isRowExpanded(rowData) {
            if (rowData && this.expandedRows) {
                if (this.dataKey) return this.expandedRowKeys ? this.expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else return this.findIndex(rowData, this.expandedRows) > -1;
            }

            return false;
        },
        isRowGroupExpanded(rowData) {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                let groupFieldValue = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);

                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }

            return false;
        },
        isSelected(rowData) {
            if (rowData && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys ? this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                } else {
                    if (this.selection instanceof Array) return this.findIndexInSelection(rowData) > -1;
                    else return this.equals(rowData, this.selection);
                }
            }

            return false;
        },
        isSelectedWithContextMenu(rowData) {
            if (rowData && this.contextMenuSelection) {
                return this.equals(rowData, this.contextMenuSelection, this.dataKey);
            }

            return false;
        },
        findIndexInSelection(rowData) {
            return this.findIndex(rowData, this.selection);
        },
        findIndex(rowData, collection) {
            let index = -1;

            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(rowData, collection[i])) {
                        index = i;
                        break;
                    }
                }
            }

            return index;
        },
        equals(data1, data2) {
            return this.compareSelectionBy === 'equals' ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
        },
        onRowGroupToggle(event, data) {
            this.$emit('rowgroup-toggle', { originalEvent: event, data: data });
        },
        onRowClick(event, rowData, rowIndex) {
            this.$emit('row-click', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowDblClick(event, rowData, rowIndex) {
            this.$emit('row-dblclick', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowRightClick(event, rowData, rowIndex) {
            this.$emit('row-rightclick', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowTouchEnd(event) {
            this.$emit('row-touchend', event);
        },
        onRowKeyDown(event, rowData, rowIndex) {
            this.$emit('row-keydown', { originalEvent: event, data: rowData, index: rowIndex });
        },
        onRowMouseDown(event) {
            this.$emit('row-mousedown', event);
        },
        onRowDragStart(event, rowIndex) {
            this.$emit('row-dragstart', { originalEvent: event, index: rowIndex });
        },
        onRowDragOver(event, rowIndex) {
            this.$emit('row-dragover', { originalEvent: event, index: rowIndex });
        },
        onRowDragLeave(event) {
            this.$emit('row-dragleave', event);
        },
        onRowDragEnd(event) {
            this.$emit('row-dragend', event);
        },
        onRowDrop(event) {
            this.$emit('row-drop', event);
        },
        onRowToggle(event) {
            this.$emit('row-toggle', event);
        },
        onRadioChange(event) {
            this.$emit('radio-change', event);
        },
        onCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        },
        onCellEditInit(event) {
            this.$emit('cell-edit-init', event);
        },
        onCellEditComplete(event) {
            this.$emit('cell-edit-complete', event);
        },
        onCellEditCancel(event) {
            this.$emit('cell-edit-cancel', event);
        },
        onRowEditInit(event) {
            this.$emit('row-edit-init', event);
        },
        onRowEditSave(event) {
            this.$emit('row-edit-save', event);
        },
        onRowEditCancel(event) {
            this.$emit('row-edit-cancel', event);
        },
        onEditingMetaChange(event) {
            this.$emit('editing-meta-change', event);
        },
        updateFrozenRowStickyPosition() {
            this.$el.style.top = DomHandler.getOuterHeight(this.$el.previousElementSibling) + 'px';
        },
        updateFrozenRowGroupHeaderStickyPosition() {
            let tableHeaderHeight = DomHandler.getOuterHeight(this.$el.previousElementSibling);

            this.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px';
        },
        getVirtualScrollerProp(option, options) {
            options = options || this.virtualScrollerContentProps;

            return options ? options[option] : null;
        },
        bodyRef(el) {
            // For VirtualScroller
            const contentRef = this.getVirtualScrollerProp('contentRef');

            contentRef && contentRef(el);
        },
        setRowTabindex(index) {
            if (this.selection === null && (this.selectionMode === 'single' || this.selectionMode === 'multiple')) {
                return index === 0 ? 0 : -1;
            }

            return -1;
        }
    },
    computed: {
        columnsLength() {
            let hiddenColLength = 0;

            this.columns.forEach((column) => {
                if (this.columnProp(column, 'selectionMode') === 'single') hiddenColLength--;
                if (this.columnProp(column, 'hidden')) hiddenColLength++;
            });

            return this.columns ? this.columns.length - hiddenColLength : 0;
        },
        rowGroupHeaderStyle() {
            if (this.scrollable) {
                return { top: this.rowGroupHeaderStyleObject.top };
            }

            return null;
        },
        bodyStyle() {
            return this.getVirtualScrollerProp('contentStyle');
        },
        expandedRowId() {
            return UniqueComponentId();
        },
        nameAttributeSelector() {
            return UniqueComponentId();
        },
        ptmTBodyOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        }
    },
    components: {
        DTBodyCell: BodyCell,
        ChevronDownIcon: ChevronDownIcon,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>
