<template>
    <thead class="p-datatable-thead">
        <template v-if="!columnGroup">
            <tr>
                <template v-for="(col,i) of columns">
                    <th v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== col.field)" :tabindex="col.sortable ? '0' : null" @keydown="onColumnKeyDown($event, col)"
                        :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)"
                        @click="onColumnHeaderClick($event, col)" @mousedown="onColumnHeaderMouseDown($event, col)"
                        @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                        :colspan="col.colspan" :rowspan="col.rowspan" :aria-sort="getAriaSort(col)">
                        <span class="p-column-resizer" @mousedown="onColumnResizeStart($event)" v-if="resizableColumns"></span>
                        <DTColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                        <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                        <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                        <span v-if="isMultiSorted(col)" class="p-sortable-column-badge">{{getMultiSortMetaIndex(col) + 1}}</span>
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.selectionMode ==='multiple' && !hasColumnFilter()" />
                    </th>
                </template>
            </tr>
            <tr v-if="hasColumnFilter()">
                <template v-for="(col,i) of columns">
                    <th v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== col.field)" :key="col.columnKey||col.field||i"
                        :class="getFilterColumnHeaderClass(col)" :style="col.filterHeaderStyle">
                        <DTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                    </th>
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.rows" :key="i">
                <th v-for="(col,i) of row.columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)" :tabindex="col.sortable ? '0' : null"
                    @click="onColumnHeaderClick($event, col)" @keydown="onColumnKeyDown($event, col)" @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                    :colspan="col.colspan" :rowspan="col.rowspan" :aria-sort="getAriaSort(col)">
                    <DTColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                    <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                    <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                    <span v-if="isMultiSorted(col)" class="p-sortable-column-badge">{{getMultiSortMetaIndex(col) + 1}}</span>
                    <DTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                    <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                </th>
            </tr>
        </template>
    </thead>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import ColumnSlot from './ColumnSlot.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';

export default {
    props: {
		columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        rowGroupMode: {
            type: String,
            default: null
        },
        groupRowsBy: {
            type: [Array,String],
            default: null
        },
        resizableColumns: {
            type: Boolean,
            default: false
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        sortMode: {
            type: String,
            default: 'single'
        },
        sortField: {
            type: [String, Function],
            default: null
        },
        sortOrder: {
            type: Number,
            default: null
        },
        multiSortMeta: {
            type: Array,
            default: null
        }
    },
    methods: {
        isMultiSorted(column) {
            return column.sortable && this.getMultiSortMetaIndex(column) > -1
        },
        isColumnSorted(column) {
            return this.sortMode === 'single' ? (this.sortField && (this.sortField === column.field || this.sortField === column.sortField)) : this.isMultiSorted(column);
        },
        getColumnHeaderClass(column) {
            return [column.headerClass,
                    {'p-sortable-column': column.sortable},
                    {'p-resizable-column': this.resizableColumns},
                    {'p-highlight': this.isColumnSorted(column)}
            ];
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', column.filterHeaderClass];
        },
        getSortableColumnIcon(column) {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === column.field || this.sortField === column.sortField);
                sortOrder = sorted ? this.sortOrder: 0;
            }
            else if (this.sortMode === 'multiple') {
                let metaIndex = this.getMultiSortMetaIndex(column);
                if (metaIndex > -1) {
                    sorted = true;
                    sortOrder = this.multiSortMeta[metaIndex].order;
                }
            }

            return [
                'p-sortable-column-icon pi pi-fw', {
                    'pi-sort-alt': !sorted,
                    'pi-sort-amount-up-alt': sorted && sortOrder > 0,
                    'pi-sort-amount-down': sorted && sortOrder < 0
                }
            ];
        },
        getMultiSortMetaIndex(column) {
            let index = -1;

            for (let i = 0; i < this.multiSortMeta.length; i++) {
                let meta = this.multiSortMeta[i];
                if (meta.field === column.field || meta.field === column.sortField) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        onColumnHeaderClick(event, col) {
            this.$emit('column-click', {originalEvent: event, column: col});
        },
        onColumnHeaderMouseDown(event, col) {
            this.$emit('column-mousedown', {originalEvent: event, column: col});
        },
        onColumnHeaderDragStart(event) {
            this.$emit('column-dragstart', event);
        },
        onColumnHeaderDragOver(event) {
            this.$emit('column-dragover', event);
        },
        onColumnHeaderDragLeave(event) {
            this.$emit('column-dragleave', event);
        },
        onColumnHeaderDrop(event) {
            this.$emit('column-drop', event);
        },
        onColumnResizeStart(event) {
            this.$emit('column-resizestart', event);
        },
        onHeaderCheckboxChange(event) {
            this.$emit('checkbox-change', event);
        },
        onColumnKeyDown(event, col) {
            if (event.which === 13 && event.currentTarget.nodeName === 'TH' && DomHandler.hasClass(event.currentTarget, 'p-sortable-column')) {
                this.$emit('column-click', {originalEvent: event, column: col});
            }
        },
        getAriaSort(column) {
            if (column.sortable) {
                const sortIcon = this.getSortableColumnIcon(column);
                if (sortIcon[1]['pi-sort-amount-down'])
                    return 'descending';
                else if (sortIcon[1]['pi-sort-amount-up-alt'])
                    return 'ascending';
                else
                    return 'none';
            }
            else {
                return null;
            }
        },
        hasColumnFilter() {
            if (this.columns) {
                for (let col of this.columns) {
                    if (col.$scopedSlots.filter) {
                        return true;
                    }
                }
            }

            return false;
        }
    },
    components: {
        'DTColumnSlot': ColumnSlot,
        'DTHeaderCheckbox': HeaderCheckbox
    }
}
</script>
