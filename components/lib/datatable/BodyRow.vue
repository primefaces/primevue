<template>
    <template v-if="!empty">
        <tr v-if="templates['groupheader'] && rowGroupMode === 'subheader' && shouldRenderRowGroupHeader" :class="cx('rowGroupHeader')" :style="rowGroupHeaderStyle" role="row" v-bind="ptm('rowGroupHeader')">
            <td :colspan="columnsLength - 1" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowGroupHeaderCell') }">
                <button v-if="expandableRowGroups" :class="cx('rowGroupToggler')" @click="onRowGroupToggle" type="button" v-bind="ptm('rowGroupToggler')">
                    <component v-if="templates['rowgrouptogglericon']" :is="templates['rowgrouptogglericon']" :expanded="isRowGroupExpanded" />
                    <template v-else>
                        <span v-if="isRowGroupExpanded && expandedRowIcon" :class="[cx('rowGroupTogglerIcon'), expandedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                        <ChevronDownIcon v-else-if="isRowGroupExpanded && !expandedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                        <span v-else-if="!isRowGroupExpanded && collapsedRowIcon" :class="[cx('rowGroupTogglerIcon'), collapsedRowIcon]" v-bind="ptm('rowGroupTogglerIcon')" />
                        <ChevronRightIcon v-else-if="!isRowGroupExpanded && !collapsedRowIcon" :class="cx('rowGroupTogglerIcon')" v-bind="ptm('rowGroupTogglerIcon')" />
                    </template>
                </button>
                <component :is="templates['groupheader']" :data="rowData" :index="rowIndex" />
            </td>
        </tr>
        <tr
            v-if="expandableRowGroups ? isRowGroupExpanded : true"
            :class="rowClasses"
            :style="rowStyles"
            :tabindex="rowTabindex"
            role="row"
            :aria-selected="selectionMode ? isSelected : null"
            @click="onRowClick"
            @dblclick="onRowDblClick"
            @contextmenu="onRowRightClick"
            @touchend="onRowTouchEnd"
            @keydown.self="onRowKeyDown"
            @mousedown="onRowMouseDown"
            @dragstart="onRowDragStart"
            @dragover="onRowDragOver"
            @dragleave="onRowDragLeave"
            @dragend="onRowDragEnd"
            @drop="onRowDrop"
            v-bind="getBodyRowPTOptions('bodyRow')"
            :data-p-index="rowIndex"
            :data-p-selectable-row="selectionMode ? true : false"
            :data-p-highlight="selection && isSelected"
            :data-p-highlight-contextmenu="contextMenuSelection && isSelectedWithContextMenu"
        >
            <template v-for="(col, i) of columns">
                <DTBodyCell
                    v-if="shouldRenderBodyCell(col)"
                    :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i"
                    :rowData="rowData"
                    :column="col"
                    :rowIndex="rowIndex"
                    :index="i"
                    :selected="isSelected"
                    :frozenRow="frozenRow"
                    :rowspan="rowGroupMode === 'rowspan' ? calculateRowGroupSize(col) : null"
                    :editMode="editMode"
                    :editing="editMode === 'row' && isRowEditing"
                    :editingMeta="editingMeta"
                    :responsiveLayout="responsiveLayout"
                    :virtualScrollerContentProps="virtualScrollerContentProps"
                    :ariaControls="expandedRowId + '_' + rowIndex + '_expansion'"
                    :name="nameAttributeSelector"
                    :isRowExpanded="d_rowExpanded"
                    :expandedRowIcon="expandedRowIcon"
                    :collapsedRowIcon="collapsedRowIcon"
                    @radio-change="onRadioChange"
                    @checkbox-change="onCheckboxChange"
                    @row-toggle="onRowToggle"
                    @cell-edit-init="onCellEditInit"
                    @cell-edit-complete="onCellEditComplete"
                    @cell-edit-cancel="onCellEditCancel"
                    @row-edit-init="onRowEditInit"
                    @row-edit-save="onRowEditSave"
                    @row-edit-cancel="onRowEditCancel"
                    @editing-meta-change="onEditingMetaChange"
                    :unstyled="unstyled"
                    :pt="pt"
                />
            </template>
        </tr>
        <tr v-if="templates['expansion'] && expandedRows && d_rowExpanded" :id="expandedRowId + '_' + rowIndex + '_expansion'" :class="cx('rowExpansion')" role="row" v-bind="ptm('rowExpansion')">
            <td :colspan="columnsLength" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowExpansionCell') }">
                <component :is="templates['expansion']" :data="rowData" :index="rowIndex" />
            </td>
        </tr>
        <tr v-if="templates['groupfooter'] && rowGroupMode === 'subheader' && shouldRenderRowGroupFooter" :class="cx('rowGroupFooter')" role="row" v-bind="ptm('rowGroupFooter')">
            <td :colspan="columnsLength - 1" v-bind="{ ...getColumnPT('bodycell'), ...ptm('rowGroupFooterCell') }">
                <component :is="templates['groupfooter']" :data="rowData" :index="rowIndex" />
            </td>
        </tr>
    </template>
    <tr v-else :class="cx('emptyMessage')" role="row" v-bind="ptm('emptyMessage')">
        <td :colspan="columnsLength" v-bind="{ ...getColumnPT('bodycell'), ...ptm('emptyMessageCell') }">
            <component v-if="templates.empty" :is="templates.empty" />
        </td>
    </tr>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronDownIcon from 'primevue/icons/chevrondown';
import ChevronRightIcon from 'primevue/icons/chevronright';
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';
import BodyCell from './BodyCell.vue';

export default {
    name: 'BodyRow',
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
        rowData: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            default: 0
        },
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
            type: [String, Function],
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
            type: [Array, Object],
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
        rowGroupHeaderStyle: {
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
        },
        expandedRowId: {
            type: String,
            default: null
        },
        nameAttributeSelector: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            d_rowExpanded: false
        };
    },
    watch: {
        expandedRows: {
            immediate: true,
            handler(newValue) {
                this.d_rowExpanded = this.dataKey ? newValue?.[ObjectUtils.resolveFieldData(this.rowData, this.dataKey)] !== undefined : newValue?.some((d) => this.equals(this.rowData, d));
            }
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        //@todo - update this method
        getColumnPT(key) {
            const columnMetaData = {
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.columnProp({}, 'pt'), key, columnMetaData));
        },
        //@todo - update this method
        getBodyRowPTOptions(key) {
            const datatable = this.$parentInstance?.$parentInstance;

            return this.ptm(key, {
                context: {
                    index: this.rowIndex,
                    selectable: datatable?.rowHover || datatable?.selectionMode,
                    selected: this.isSelected,
                    stripedRows: datatable?.stripedRows || false
                }
            });
        },
        shouldRenderBodyCell(column) {
            const isHidden = this.columnProp(column, 'hidden');

            if (this.rowGroupMode && !isHidden) {
                const field = this.columnProp(column, 'field');

                if (this.rowGroupMode === 'subheader') {
                    return this.groupRowsBy !== field;
                } else if (this.rowGroupMode === 'rowspan') {
                    if (this.isGrouped(column)) {
                        let prevRowData = this.value[this.rowIndex - 1];

                        if (prevRowData) {
                            const currentRowFieldData = ObjectUtils.resolveFieldData(this.value[this.rowIndex], field);
                            const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, field);

                            return currentRowFieldData !== previousRowFieldData;
                        } else {
                            return true;
                        }
                    } else {
                        return true;
                    }
                }
            } else {
                return !isHidden;
            }
        },
        calculateRowGroupSize(column) {
            if (this.isGrouped(column)) {
                let index = this.rowIndex;
                const field = this.columnProp(column, 'field');
                const currentRowFieldData = ObjectUtils.resolveFieldData(this.value[index], field);
                let nextRowFieldData = currentRowFieldData;
                let groupRowSpan = 0;

                while (currentRowFieldData === nextRowFieldData) {
                    groupRowSpan++;
                    let nextRowData = this.value[++index];

                    if (nextRowData) {
                        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, field);
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
            const field = this.columnProp(column, 'field');

            if (this.groupRowsBy && field) {
                if (Array.isArray(this.groupRowsBy)) return this.groupRowsBy.indexOf(field) > -1;
                else return this.groupRowsBy === field;
            } else {
                return false;
            }
        },
        findIndexInSelection(data) {
            return this.findIndex(data, this.selection);
        },
        findIndex(data, collection) {
            let index = -1;

            if (collection && collection.length) {
                for (let i = 0; i < collection.length; i++) {
                    if (this.equals(data, collection[i])) {
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
        onRowGroupToggle(event) {
            this.$emit('rowgroup-toggle', { originalEvent: event, data: this.rowData });
        },
        onRowClick(event) {
            this.$emit('row-click', { originalEvent: event, data: this.rowData, index: this.rowIndex });
        },
        onRowDblClick(event) {
            this.$emit('row-dblclick', { originalEvent: event, data: this.rowData, index: this.rowIndex });
        },
        onRowRightClick(event) {
            this.$emit('row-rightclick', { originalEvent: event, data: this.rowData, index: this.rowIndex });
        },
        onRowTouchEnd(event) {
            this.$emit('row-touchend', event);
        },
        onRowKeyDown(event) {
            this.$emit('row-keydown', { originalEvent: event, data: this.rowData, index: this.rowIndex });
        },
        onRowMouseDown(event) {
            this.$emit('row-mousedown', event);
        },
        onRowDragStart(event) {
            this.$emit('row-dragstart', { originalEvent: event, index: this.rowIndex });
        },
        onRowDragOver(event) {
            this.$emit('row-dragover', { originalEvent: event, index: this.rowIndex });
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
            this.d_rowExpanded = !this.d_rowExpanded;

            this.$emit('row-toggle', { ...event, expanded: this.d_rowExpanded });
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
        getVirtualScrollerProp(option, options) {
            options = options || this.virtualScrollerContentProps;

            return options ? options[option] : null;
        }
    },
    computed: {
        rowIndex() {
            const getItemOptions = this.getVirtualScrollerProp('getItemOptions');

            return getItemOptions ? getItemOptions(this.index).index : this.index;
        },
        rowStyles() {
            return this.rowStyle?.(this.rowData);
        },
        rowClasses() {
            let rowStyleClass = [];
            let columnSelectionMode = null;

            if (this.rowClass) {
                let rowClassValue = this.rowClass(this.rowData);

                if (rowClassValue) {
                    rowStyleClass.push(rowClassValue);
                }
            }

            if (this.columns) {
                for (let col of this.columns) {
                    let _selectionMode = this.columnProp(col, 'selectionMode');

                    if (ObjectUtils.isNotEmpty(_selectionMode) && _selectionMode === 'multiple') {
                        columnSelectionMode = _selectionMode;
                        break;
                    }
                }
            }

            return [this.cx('row', { rowData: this.rowData, index: this.rowIndex, columnSelectionMode }), rowStyleClass];
        },
        rowTabindex() {
            if (this.selection === null && (this.selectionMode === 'single' || this.selectionMode === 'multiple')) {
                return this.rowIndex === 0 ? 0 : -1;
            }

            return -1;
        },
        isRowEditing() {
            if (this.rowData && this.editingRows) {
                if (this.dataKey) return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(this.rowData, this.dataKey)] !== undefined : false;
                else return this.findIndex(this.rowData, this.editingRows) > -1;
            }

            return false;
        },
        isRowGroupExpanded() {
            if (this.expandableRowGroups && this.expandedRowGroups) {
                const groupFieldValue = ObjectUtils.resolveFieldData(this.rowData, this.groupRowsBy);

                return this.expandedRowGroups.indexOf(groupFieldValue) > -1;
            }

            return false;
        },
        isSelected() {
            if (this.rowData && this.selection) {
                if (this.dataKey) {
                    return this.selectionKeys ? this.selectionKeys[ObjectUtils.resolveFieldData(this.rowData, this.dataKey)] !== undefined : false;
                } else {
                    if (this.selection instanceof Array) return this.findIndexInSelection(this.rowData) > -1;
                    else return this.equals(this.rowData, this.selection);
                }
            }

            return false;
        },
        isSelectedWithContextMenu() {
            if (this.rowData && this.contextMenuSelection) {
                return this.equals(this.rowData, this.contextMenuSelection, this.dataKey);
            }

            return false;
        },
        shouldRenderRowGroupHeader() {
            const currentRowFieldData = ObjectUtils.resolveFieldData(this.rowData, this.groupRowsBy);
            const prevRowData = this.value[this.rowIndex - 1];

            if (prevRowData) {
                const previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);

                return currentRowFieldData !== previousRowFieldData;
            } else {
                return true;
            }
        },
        shouldRenderRowGroupFooter() {
            if (this.expandableRowGroups && !this.isRowGroupExpanded) {
                return false;
            } else {
                let currentRowFieldData = ObjectUtils.resolveFieldData(this.rowData, this.groupRowsBy);
                let nextRowData = this.value[this.rowIndex + 1];

                if (nextRowData) {
                    let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);

                    return currentRowFieldData !== nextRowFieldData;
                } else {
                    return true;
                }
            }
        },
        columnsLength() {
            if (this.columns) {
                let hiddenColLength = 0;

                this.columns.forEach((column) => {
                    if (this.columnProp(column, 'selectionMode') === 'single') hiddenColLength--;
                    if (this.columnProp(column, 'hidden')) hiddenColLength++;
                });

                return this.columns.length - hiddenColLength;
            }

            return 0;
        }
    },
    components: {
        DTBodyCell: BodyCell,
        ChevronDownIcon: ChevronDownIcon,
        ChevronRightIcon: ChevronRightIcon
    }
};
</script>
