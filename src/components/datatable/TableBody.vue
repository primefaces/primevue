<template>
    <tbody class="p-datatable-tbody" role="rowgroup">
        <template v-if="!empty">
            <template v-for="(rowData, index) of value" :key="getRowKey(rowData, index) + '_subheader'">
                <tr class="p-rowgroup-header" :style="rowGroupHeaderStyle" v-if="templates['groupheader'] && rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, index)" role="row">
                    <td :colspan="columnsLength - 1">
                        <button class="p-row-toggler p-link" @click="onRowGroupToggle($event, rowData)" v-if="expandableRowGroups" type="button">
                            <span :class="rowGroupTogglerIcon(rowData)"></span>
                        </button>
                        <component :is="templates['groupheader']" :data="rowData" :index="index" />
                    </td>
                </tr>
                <tr :class="getRowClass(rowData)" :key="getRowKey(rowData, index)"
                    v-if="expandableRowGroups ? isRowGroupExpanded(rowData): true"
                    @click="onRowClick($event, rowData, index)" @dblclick="onRowDblClick($event, rowData, index)" @contextmenu="onRowRightClick($event, rowData, index)" @touchend="onRowTouchEnd($event)" @keydown="onRowKeyDown($event, rowData, index)" :tabindex="selectionMode || contextMenu ? '0' : null"
                    @mousedown="onRowMouseDown($event)" @dragstart="onRowDragStart($event, index)" @dragover="onRowDragOver($event,index)" @dragleave="onRowDragLeave($event)" @dragend="onRowDragEnd($event)" @drop="onRowDrop($event)" role="row">
                    <template v-for="(col,i) of columns" :key="columnProp(col,'columnKey')||columnProp(col,'field')||i">
                        <DTBodyCell v-if="shouldRenderBodyCell(value, col, index)" :rowData="rowData" :column="col" :rowIndex="index" :index="i" :selected="isSelected(rowData)"
                            :rowTogglerIcon="columnProp(col,'expander') ? rowTogglerIcon(rowData): null" :frozenRow="frozenRow"
                            :rowspan="rowGroupMode === 'rowspan' ? calculateRowGroupSize(value, col, index) : null"
                            :editMode="editMode" :editing="editMode === 'row' && isRowEditing(rowData)" :responsiveLayout="responsiveLayout"
                            @radio-change="onRadioChange($event)" @checkbox-change="onCheckboxChange($event)" @row-toggle="onRowToggle($event)"
                            @cell-edit-init="onCellEditInit($event)" @cell-edit-complete="onCellEditComplete($event)" @cell-edit-cancel="onCellEditCancel($event)"
                            @row-edit-init="onRowEditInit($event)" @row-edit-save="onRowEditSave($event)" @row-edit-cancel="onRowEditCancel($event)"
                            :editingMeta="editingMeta" @editing-meta-change="onEditingMetaChange"/>
                    </template>
                </tr>
                <tr class="p-datatable-row-expansion" v-if="templates['expansion'] && expandedRows && isRowExpanded(rowData)" :key="getRowKey(rowData, index) + '_expansion'" role="row">
                    <td :colspan="columnsLength">
                        <component :is="templates['expansion']" :data="rowData" :index="index" />
                    </td>
                </tr>
                <tr class="p-rowgroup-footer" v-if="templates['groupfooter'] && rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, index)" :key="getRowKey(rowData, index) + '_subfooter'" role="row">
                    <component :is="templates['groupfooter']" :data="rowData" :index="index" />
                </tr>
            </template>
        </template>
        <tr v-else class="p-datatable-emptymessage" role="row">
            <td :colspan="columnsLength">
                <component :is="templates.empty" v-if="templates.empty && !loading" />
                <component :is="templates.loading" v-if="templates.loading && loading" />
            </td>
        </tr>
    </tbody>
</template>

<script>
import {ObjectUtils,DomHandler} from 'primevue/utils';
import BodyCell from './BodyCell.vue';

export default {
    name: 'TableBody',
    emits: ['rowgroup-toggle', 'row-click', 'row-dblclick', 'row-rightclick', 'row-touchend', 'row-keydown', 'row-mousedown',
        'row-dragstart', 'row-dragover', 'row-dragleave', 'row-dragend', 'row-drop', 'row-toggle',
        'radio-change', 'checkbox-change', 'cell-edit-init', 'cell-edit-complete', 'cell-edit-cancel',
        'row-edit-init', 'row-edit-save', 'row-edit-cancel', 'editing-meta-change'],
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
            type: [Array,String],
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
            type: [Array,Object],
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
        loading: {
            type: Boolean,
            default: false
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
        }
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
    data() {
        return {
            rowGroupHeaderStyleObject: {}
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        shouldRenderRowGroupHeader(value, rowData, i) {
            let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
            let prevRowData = value[i - 1];
            if (prevRowData) {
                let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.groupRowsBy);
                return currentRowFieldData !== previousRowFieldData;
            }
            else {
                return true;
            }
        },
        getRowKey(rowData, index) {
            return this.dataKey ? ObjectUtils.resolveFieldData(rowData, this.dataKey): index;
        },
        getRowClass(rowData) {
            let rowStyleClass = [];
            if (this.selectionMode) {
                 rowStyleClass.push('p-selectable-row');
            }

            if (this.selection) {
                rowStyleClass.push({
                    'p-highlight': this.isSelected(rowData)
                });
            }

            if (this.contextMenuSelection) {
                rowStyleClass.push({
                    'p-highlight-contextmenu': this.isSelectedWithContextMenu(rowData)
                });
            }

            if (this.rowClass) {
                let rowClassValue = this.rowClass(rowData);

                if (rowClassValue) {
                    rowStyleClass.push(rowClassValue);
                }
            }

            return rowStyleClass;
        },
        shouldRenderRowGroupFooter(value, rowData, i) {
            if (this.expandableRowGroups && !this.isRowGroupExpanded(rowData)) {
                return false;
            }
            else {
                let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.groupRowsBy);
                let nextRowData = value[i + 1];
                if (nextRowData) {
                    let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.groupRowsBy);
                    return currentRowFieldData !== nextRowFieldData;
                }
                else {
                    return true;
                }
            }
        },
        shouldRenderBodyCell(value, column, i) {
            if (this.rowGroupMode) {
                if (this.rowGroupMode === 'subheader') {
                    return this.groupRowsBy !== this.columnProp(column, 'field');
                }
                else if (this.rowGroupMode === 'rowspan') {
                    if (this.isGrouped(column)) {
                        let prevRowData = value[i - 1];
                        if (prevRowData) {
                            let currentRowFieldData = ObjectUtils.resolveFieldData(value[i], this.columnProp(column, 'field'));
                            let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.columnProp(column, 'field'));
                            return currentRowFieldData !== previousRowFieldData;
                        }
                        else {
                            return true;
                        }
                    }
                    else {
                        return true;
                    }
                }
            }
            else {
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
                    }
                    else {
                        break;
                    }
                }

                return groupRowSpan === 1 ? null : groupRowSpan;
            }
            else {
                return null;
            }
        },
        rowTogglerIcon(rowData) {
            const icon = this.isRowExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
            return ['p-row-toggler-icon pi', icon];
        },
        rowGroupTogglerIcon(rowData) {
            const icon = this.isRowGroupExpanded(rowData) ? this.expandedRowIcon : this.collapsedRowIcon;
            return ['p-row-toggler-icon pi', icon];
        },
        isGrouped(column) {
            if (this.groupRowsBy && this.columnProp(column, 'field')) {
                if (Array.isArray(this.groupRowsBy))
                    return this.groupRowsBy.indexOf(column.props.field) > -1;
                else
                    return this.groupRowsBy === column.props.field;
            }
            else {
                return false;
            }
        },
        isRowEditing(rowData) {
            if (rowData && this.editingRows) {
                if (this.dataKey)
                    return this.editingRowKeys ? this.editingRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.editingRows) > -1;
            }

            return false;
        },
        isRowExpanded(rowData) {
            if (rowData && this.expandedRows) {
                if (this.dataKey)
                    return this.expandedRowKeys ? this.expandedRowKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined : false;
                else
                    return this.findIndex(rowData, this.expandedRows) > -1;
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
                }
                else {
                    if (this.selection instanceof Array)
                        return this.findIndexInSelection(rowData) > -1;
                    else
                        return this.equals(rowData, this.selection);
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
            return this.compareSelectionBy === 'equals' ? (data1 === data2) : ObjectUtils.equals(data1, data2, this.dataKey);
        },
        onRowGroupToggle(event, data) {
            this.$emit('rowgroup-toggle', {originalEvent: event, data: data});
        },
        onRowClick(event, rowData, rowIndex) {
            this.$emit('row-click', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowDblClick(event, rowData, rowIndex) {
            this.$emit('row-dblclick', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowRightClick(event, rowData, rowIndex) {
            this.$emit('row-rightclick', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowTouchEnd(event) {
            this.$emit('row-touchend', event);
        },
        onRowKeyDown(event, rowData, rowIndex) {
            this.$emit('row-keydown', {originalEvent: event, data: rowData, index: rowIndex});
        },
        onRowMouseDown(event) {
            this.$emit('row-mousedown', event);
        },
        onRowDragStart(event, rowIndex) {
            this.$emit('row-dragstart', {originalEvent: event, index: rowIndex});
        },
        onRowDragOver(event, rowIndex) {
            this.$emit('row-dragover', {originalEvent: event, index: rowIndex});
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
            this.rowGroupHeaderStyleObject.top = tableHeaderHeight + 'px'
        }
    },
    computed: {
        columnsLength() {
            return this.columns ? this.columns.length : 0;
        },
        rowGroupHeaderStyle() {
            if (this.scrollable) {
                return {top: this.rowGroupHeaderStyleObject.top};
            }

            return null;
        }
    },
    components: {
        'DTBodyCell': BodyCell
    }
}
</script>
