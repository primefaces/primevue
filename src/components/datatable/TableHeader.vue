<template>
    <thead class="p-datatable-thead">
        <tr v-if="!columnGroup">
            <template v-for="(col,i) of columns">
                <th v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== col.field)"
                    :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)"
                    @click="onColumnHeaderClick($event, col)" @mousedown="onColumnHeaderMouseDown($event, col)"
                    @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                    :colspan="col.colspan" :rowspan="col.rowspan">
                    <span class="p-column-resizer p-clickable" @mousedown="onColumnResizeStart($event)" v-if="resizableColumns"></span>
                    <DTColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                    <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                    <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                    <DTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                    <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                </th>
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.rows" :key="i">
                <th v-for="(col,i) of row.columns" :key="col.columnKey||col.field||i" :style="col.headerStyle" :class="getColumnHeaderClass(col)"
                @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                    :colspan="col.colspan" :rowspan="col.rowspan">
                    <ColumnSlot :column="col" type="header" v-if="col.$scopedSlots.header" />
                    <span class="p-column-title" v-if="col.header">{{col.header}}</span>
                    <span v-if="col.sortable" :class="getSortableColumnIcon(col)"></span>
                    <DTColumnSlot :column="col" type="filter" v-if="col.$scopedSlots.filter" />
                    <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.selectionMode ==='multiple'" />
                </th>
            </tr>
        </template>
    </thead>
</template>

<script>
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
            type: String,
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
        getColumnHeaderClass(column) {
            const sorted = this.sortMode === 'single' ? (this.sortField === (column.field || column.sortField)) : this.getMultiSortMetaIndex(column) > -1;

            return [column.headerClass,
                    {'p-sortable-column': column.sortable},
                    {'p-resizable-column': this.resizableColumns},
                    {'p-highlight': sorted}
            ];
        },
        getSortableColumnIcon(column) {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted =  this.sortField === (column.field || column.sortField);
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
                'p-sortable-column-icon pi pi-fw',
                {'pi-sort': !sorted},
                {'pi-sort-up': sorted && sortOrder > 0},
                {'pi-sort-down': sorted && sortOrder < 0},
            ];
        },
        getMultiSortMetaIndex(column) {
            let index = -1;

            for (let i = 0; i < this.multiSortMeta.length; i++) {
                let meta = this.multiSortMeta[i];
                if (meta.field === (column.field || column.sortField)) {
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
        }
    },
    components: {
        'DTColumnSlot': ColumnSlot,
        'DTHeaderCheckbox': HeaderCheckbox
    }
}
</script>