<template>
    <thead class="p-datatable-thead" role="rowgroup">
        <template v-if="!columnGroup">
            <tr role="row">
                <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                    <DTHeaderCell v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field'))" :column="col"  
                    @column-click="$emit('column-click', $event)" @column-mousedown="$emit('column-mousedown', $event)" 
                    @column-dragstart="$emit('column-dragstart', $event)" @column-dragover="$emit('column-dragover', $event)" @column-dragleave="$emit('column-dragleave', $event)" @column-drop="$emit('column-drop', $event)"
                    :resizableColumns="resizableColumns" @column-resizestart="$emit('column-resizestart', $event)"
                    :sortMode="sortMode" :sortField="sortField" :sortOrder="sortOrder" :multiSortMeta="multiSortMeta"
                    :allRowsSelected="allRowsSelected" :empty="empty" @checkbox-change="$emit('column-change', $event)"
                    :filters="filters" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)" 
                    @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                </template>
            </tr>
            <tr v-if="filterDisplay === 'row'" role="row">
                <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                    <DTHeaderCell v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field'))" :column="col"  :filterColumn="true"
                    :allRowsSelected="allRowsSelected" :empty="empty" @checkbox-change="$emit('checkbox-change', $event)"
                    :filters="filters" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)" 
                    @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.children.default()" :key="i" role="row">
                <template v-for="(col,j) of row.children.default()" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||j">
                    <DTHeaderCell v-if="rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field'))" :column="col"  
                    @column-click="$emit('column-click', $event)" @column-mousedown="$emit('column-mousedown', $event)"
                    :sortMode="sortMode" :sortField="sortField" :sortOrder="sortOrder" :multiSortMeta="multiSortMeta"
                    :allRowsSelected="allRowsSelected" :empty="empty" @checkbox-change="$emit('column-change', $event)"
                    :filters="filters" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)" 
                    @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                </template>
            </tr>
        </template>
    </thead>
</template>

<script>
import HeaderCell from './HeaderCell';

export default {
    emits: ['column-click', 'column-mousedown', 'column-dragstart', 'column-dragover', 'column-dragleave', 'column-drop',
            'column-resizestart', 'checkbox-change', 'filter-change', 'filter-apply', 
            'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'filter-clear', 'apply-click'],
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
        },
        filterDisplay: {
            type: String,
            default: null
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
            default: null
        }
    },
    methods: {
        columnProp(col, prop) {
            return col.props ? ((col.type.props[prop].type === Boolean && col.props[prop] === '') ? true : col.props[prop]) : null;
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', this.columnProp(column, 'filterHeaderClass')];
        }
    },
    components: {
        'DTHeaderCell': HeaderCell
    }
}
</script>
