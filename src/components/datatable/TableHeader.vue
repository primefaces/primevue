<template>
    <thead class="p-datatable-thead">
        <template v-if="!columnGroup">
            <tr>
                <template v-for="(col,i) of columns">
                    <th v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== col.props?.field)" :tabindex="col.props?.sortable ? '0' : null" @keydown="onColumnKeyDown($event, col)"
                        :key="col.props?.columnKey||col.props?.field||i" :style="col.props?.headerStyle" :class="getColumnHeaderClass(col)"
                        @click="onColumnHeaderClick($event, col)" @mousedown="onColumnHeaderMouseDown($event, col)"
                        @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                        :colspan="col.props?.colspan" :rowspan="col.props?.rowspan" :aria-sort="getAriaSort(col)">
                        <span class="p-column-resizer" @mousedown="onColumnResizeStart($event)" v-if="resizableColumns"></span>
                        <component :is="col.children.header" :column="col" v-if="col.children && col.children.header"/>
                        <span class="p-column-title" v-if="col.props?.header">{{col.props?.header}}</span>
                        <span v-if="col.props?.sortable" :class="getSortableColumnIcon(col)"></span>
                        <span v-if="isMultiSorted(col)" class="p-sortable-column-badge">{{getMultiSortMetaIndex(col) + 1}}</span>
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.props?.selectionMode ==='multiple' && !hasColumnFilter()" />
                    </th>
                </template>
            </tr>
            <tr v-if="hasColumnFilter()">
                <template v-for="(col,i) of columns">
                    <th v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== col.props?.field)" :key="col.props?.columnKey||col.props?.field||i"
                        :class="getFilterColumnHeaderClass(col)" :style="col.props?.filterHeaderStyle">
                        <component :is="col.children.filter" :column="col" v-if="col.children && col.children.filter"/>
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.props?.selectionMode ==='multiple'" />
                    </th>
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.children.default()" :key="i">
                <th v-for="(col,i) of row.children.default()" :key="col.props?.columnKey||col.props?.field||i" :style="col.props?.headerStyle" :class="getColumnHeaderClass(col)" :tabindex="col.props?.sortable ? '0' : null"
                    @click="onColumnHeaderClick($event, col)" @keydown="onColumnKeyDown($event, col)" @dragstart="onColumnHeaderDragStart($event)" @dragover="onColumnHeaderDragOver($event)" @dragleave="onColumnHeaderDragLeave($event)" @drop="onColumnHeaderDrop($event)"
                    :colspan="col.props?.colspan" :rowspan="col.props?.rowspan" :aria-sort="getAriaSort(col)">
                   <component :is="col.children.header" :column="col" v-if="col.children && col.children.header"/>
                    <span class="p-column-title" v-if="col.props?.header">{{col.props?.header}}</span>
                    <span v-if="col.props?.sortable" :class="getSortableColumnIcon(col)"></span>
                    <span v-if="isMultiSorted(col)" class="p-sortable-column-badge">{{getMultiSortMetaIndex(col) + 1}}</span>
                    <component :is="col.children.filter" :column="col" v-if="col.children && col.children.filter"/>
                    <DTHeaderCheckbox :checked="allRowsSelected" @change="onHeaderCheckboxChange($event)" :disabled="empty" v-if="col.props?.selectionMode ==='multiple'" />
                </th>
            </tr>
        </template>
    </thead>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import HeaderCheckbox from './HeaderCheckbox.vue';

export default {
    emits: ['column-click', 'column-mousedown', 'column-dragstart', 'column-dragover', 'column-dragleave', 'column-drop',
            'column-resizestart', 'checkbox-change', 'column-click'],
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
        isMultiSorted(column) {
            return column.props?.sortable && this.getMultiSortMetaIndex(column) > -1
        },
        isColumnSorted(column) {
            return this.sortMode === 'single' ? (this.sortField && (this.sortField === column.props?.field || this.sortField === column.props?.sortField)) : this.isMultiSorted(column);
        },
        getColumnHeaderClass(column) {
            return [column.props?.headerClass,
                    {'p-sortable-column': column.props?.sortable},
                    {'p-resizable-column': this.resizableColumns},
                    {'p-highlight': this.isColumnSorted(column)}
            ];
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', column.props?.filterHeaderClass];
        },
        getSortableColumnIcon(column) {
            let sorted = false;
            let sortOrder = null;

            if (this.sortMode === 'single') {
                sorted = this.sortField && (this.sortField === column.props?.field || this.sortField === column.props?.sortField);
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
                if (meta.field === column.props?.field || meta.field === column.props?.sortField) {
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
            if (column.props?.sortable) {
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
                    if (col.children && col.children.filter) {
                        return true;
                    }
                }
            }

            return false;
        }
    },
    components: {
        'DTHeaderCheckbox': HeaderCheckbox
    }
}
</script>
