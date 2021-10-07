<template>
    <thead class="p-datatable-thead" role="rowgroup">
        <template v-if="!columnGroup">
            <tr role="row">
                <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                    <DTHeaderCell v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field')))" :column="col"
                    @column-click="$emit('column-click', $event)" @column-mousedown="$emit('column-mousedown', $event)"
                    @column-dragstart="$emit('column-dragstart', $event)" @column-dragover="$emit('column-dragover', $event)" @column-dragleave="$emit('column-dragleave', $event)" @column-drop="$emit('column-drop', $event)"
                    :groupRowsBy="groupRowsBy" :groupRowSortField="groupRowSortField" :resizableColumns="resizableColumns" @column-resizestart="$emit('column-resizestart', $event)"
                    :sortMode="sortMode" :sortField="sortField" :sortOrder="sortOrder" :multiSortMeta="multiSortMeta"
                    :allRowsSelected="allRowsSelected" :empty="empty" @checkbox-change="$emit('checkbox-change', $event)"
                    :filters="filters" :filterDisplay="filterDisplay" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)"
                    @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                </template>
            </tr>
            <tr v-if="filterDisplay === 'row'" role="row">
                <template v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                    <th :style="getFilterColumnHeaderStyle(col)" :class="getFilterColumnHeaderClass(col)" v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field')))">
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="$emit('checkbox-change', $event)" :disabled="empty" v-if="columnProp(col, 'selectionMode') ==='multiple'" />
                        <DTColumnFilter v-if="col.children && col.children.filter" :field="columnProp(col,'filterField')||columnProp(col,'field')" :type="columnProp(col,'dataType')" display="row"
                        :showMenu="columnProp(col,'showFilterMenu')" :filterElement="col.children && col.children.filter"
                        :filterHeaderTemplate="col.children && col.children.filterheader" :filterFooterTemplate="col.children && col.children.filterfooter"
                        :filterClearTemplate="col.children && col.children.filterclear" :filterApplyTemplate="col.children && col.children.filterapply"
                        :filters="filters" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')" :filterMenuStyle="columnProp(col,'filterMenuStyle')" :filterMenuClass="columnProp(col,'filterMenuClass')"
                        :showOperator="columnProp(col,'showFilterOperator')" :showClearButton="columnProp(col,'showClearButton')" :showApplyButton="columnProp(col,'showApplyButton')"
                        :showMatchModes="columnProp(col,'showFilterMatchModes')" :showAddButton="columnProp(col,'showAddButton')" :matchModeOptions="columnProp(col,'filterMatchModeOptions')" :maxConstraints="columnProp(col,'maxConstraints')"
                        @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)"
                        @constraint-add="$emit('constraint-add', $event)" @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                    </th>
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.children.default()" :key="i" role="row">
                <template v-for="(col,j) of row.children.default()" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||j">
                    <DTHeaderCell v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field'))) && (typeof col.children !== 'string')" :column="col"
                    @column-click="$emit('column-click', $event)" @column-mousedown="$emit('column-mousedown', $event)"
                    :groupRowsBy="groupRowsBy" :groupRowSortField="groupRowSortField" :sortMode="sortMode" :sortField="sortField" :sortOrder="sortOrder" :multiSortMeta="multiSortMeta"
                    :allRowsSelected="allRowsSelected" :empty="empty" @checkbox-change="$emit('checkbox-change', $event)"
                    :filters="filters" :filterDisplay="filterDisplay" :filtersStore="filtersStore" @filter-change="$emit('filter-change', $event)" @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change',$event)" @matchmode-change="$emit('matchmode-change', $event)" @constraint-add="$emit('constraint-add', $event)"
                    @constraint-remove="$emit('constraint-remove', $event)" @apply-click="$emit('apply-click',$event)"/>
                </template>
            </tr>
        </template>
    </thead>
</template>

<script>
import HeaderCell from './HeaderCell.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';
import ColumnFilter from './ColumnFilter.vue';
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'TableHeader',
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
        groupRowSortField: {
            type: [String, Function],
            default: null
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
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getFilterColumnHeaderClass(column) {
            return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), this.columnProp(column, 'class'), {
                'p-frozen-column': this.columnProp(column, 'frozen')
            }];
        },
        getFilterColumnHeaderStyle(column) {
            return [this.columnProp(column, 'filterHeaderStyle'), this.columnProp(column, 'style')];
        }
    },
    components: {
        'DTHeaderCell': HeaderCell,
        'DTHeaderCheckbox': HeaderCheckbox,
        'DTColumnFilter': ColumnFilter
    }
}
</script>
