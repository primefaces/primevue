<template>
    <tbody :ref="bodyRef" :class="cx('tbody')" role="rowgroup" :style="bodyContentStyle" v-bind="ptm('tbody', ptmTBodyOptions)">
        <template v-if="!empty">
            <template v-for="(rowData, rowIndex) of value" :key="getRowKey(rowData, rowIndex)">
                <DTBodyRow
                    :rowData="rowData"
                    :index="rowIndex"
                    :value="value"
                    :columns="columns"
                    :frozenRow="frozenRow"
                    :empty="empty"
                    :first="first"
                    :dataKey="dataKey"
                    :selection="selection"
                    :selectionKeys="selectionKeys"
                    :selectionMode="selectionMode"
                    :contextMenu="contextMenu"
                    :contextMenuSelection="contextMenuSelection"
                    :rowGroupMode="rowGroupMode"
                    :groupRowsBy="groupRowsBy"
                    :expandableRowGroups="expandableRowGroups"
                    :rowClass="rowClass"
                    :rowStyle="rowStyle"
                    :editMode="editMode"
                    :compareSelectionBy="compareSelectionBy"
                    :scrollable="scrollable"
                    :expandedRowIcon="expandedRowIcon"
                    :collapsedRowIcon="collapsedRowIcon"
                    :expandedRows="expandedRows"
                    :expandedRowGroups="expandedRowGroups"
                    :editingRows="editingRows"
                    :editingRowKeys="editingRowKeys"
                    :templates="templates"
                    :editButtonProps="editButtonProps"
                    :virtualScrollerContentProps="virtualScrollerContentProps"
                    :isVirtualScrollerDisabled="isVirtualScrollerDisabled"
                    :editingMeta="editingMeta"
                    :rowGroupHeaderStyle="rowGroupHeaderStyle"
                    :expandedRowId="expandedRowId"
                    :nameAttributeSelector="nameAttributeSelector"
                    @rowgroup-toggle="$emit('rowgroup-toggle', $event)"
                    @row-click="$emit('row-click', $event)"
                    @row-dblclick="$emit('row-dblclick', $event)"
                    @row-rightclick="$emit('row-rightclick', $event)"
                    @row-touchend="$emit('row-touchend', $event)"
                    @row-keydown="$emit('row-keydown', $event)"
                    @row-mousedown="$emit('row-mousedown', $event)"
                    @row-dragstart="$emit('row-dragstart', $event)"
                    @row-dragover="$emit('row-dragover', $event)"
                    @row-dragleave="$emit('row-dragleave', $event)"
                    @row-dragend="$emit('row-dragend', $event)"
                    @row-drop="$emit('row-drop', $event)"
                    @row-toggle="$emit('row-toggle', $event)"
                    @radio-change="$emit('radio-change', $event)"
                    @checkbox-change="$emit('checkbox-change', $event)"
                    @cell-edit-init="$emit('cell-edit-init', $event)"
                    @cell-edit-complete="$emit('cell-edit-complete', $event)"
                    @cell-edit-cancel="$emit('cell-edit-cancel', $event)"
                    @row-edit-init="$emit('row-edit-init', $event)"
                    @row-edit-save="$emit('row-edit-save', $event)"
                    @row-edit-cancel="$emit('row-edit-cancel', $event)"
                    @editing-meta-change="$emit('editing-meta-change', $event)"
                    :unstyled="unstyled"
                    :pt="pt"
                />
            </template>
        </template>
        <DTBodyRow v-else :empty="empty" :columns="columns" :templates="templates" />
    </tbody>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import { UniqueComponentId } from '@primevue/core/utils';
import { getOuterHeight } from '@primeuix/utils/dom';
import { resolveFieldData } from '@primeuix/utils/object';
import BodyRow from './BodyRow.vue';

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
        editButtonProps: {
            type: Object,
            default: null
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
            rowGroupHeaderStyleObject: {}
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
        getRowKey(rowData, rowIndex) {
            return this.dataKey ? resolveFieldData(rowData, this.dataKey) : rowIndex;
        },
        updateFrozenRowStickyPosition() {
            this.$el.style.top = getOuterHeight(this.$el.previousElementSibling) + 'px';
        },
        updateFrozenRowGroupHeaderStickyPosition() {
            let tableHeaderHeight = getOuterHeight(this.$el.previousElementSibling);

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
        }
    },
    computed: {
        rowGroupHeaderStyle() {
            if (this.scrollable) {
                return { top: this.rowGroupHeaderStyleObject.top };
            }

            return null;
        },
        bodyContentStyle() {
            return this.getVirtualScrollerProp('contentStyle');
        },
        ptmTBodyOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        },
        expandedRowId() {
            return UniqueComponentId();
        },
        nameAttributeSelector() {
            return UniqueComponentId();
        }
    },
    components: {
        DTBodyRow: BodyRow
    }
};
</script>
