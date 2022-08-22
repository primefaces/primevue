<template>
    <thead class="p-datatable-thead" role="rowgroup">
        <template v-if="!columnGroup">
            <tr role="row">
                <template v-for="(col,i) of columns">
                    <DTHeaderCell v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field')))" :column="col" :key="columnProp(col, 'columnKey')+i||columnProp(col, 'field')+i||i"
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
                <template v-for="(col,i) of columns">
                    <th :style="getFilterColumnHeaderStyle(col)" :class="getFilterColumnHeaderClass(col)" v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field')))" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i">
                        <DTHeaderCheckbox :checked="allRowsSelected" @change="$emit('checkbox-change', $event)" :disabled="empty" v-if="columnProp(col, 'selectionMode') ==='multiple'" />
                        <DTColumnFilter v-if="col.$scopedSlots && col.$scopedSlots.filter" :field="columnProp(col,'filterField')||columnProp(col,'field')" :type="columnProp(col,'dataType')" display="row"
                        :showMenu="columnProp(col,'showFilterMenu')" :filterElement="col.$scopedSlots && col.$scopedSlots.filter" :templates="col.$scopedSlots"
                        :filterHeaderTemplate="col.$scopedSlots && col.$scopedSlots.filterheader" :filterFooterTemplate="col.$scopedSlots && col.$scopedSlots.filterfooter"
                        :filterClearTemplate="col.$scopedSlots && col.$scopedSlots.filterclear" :filterApplyTemplate="col.$scopedSlots && col.$scopedSlots.filterapply"
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
            <tr v-for="(row,i) of columnGroup.$scopedSlots.default()" :key="ariaId + i" role="row">
                <template v-for="(col,j) of getHeaderColumns(row)">
                    <DTHeaderCell v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || (groupRowsBy !== columnProp(col, 'field'))) && (typeof col.children !== 'string')" :column="col.child" :key="columnProp(col, 'columnKey')+j||columnProp(col, 'field')+j||j"
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
import ObjectUtils from '../utils/ObjectUtils';
import UniqueComponentId from '../utils/UniqueComponentId';

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
            return ['p-filter-column', this.columnProp(column, 'filterHeaderClass'), this.columnProp(column, 'className'), {
                'p-frozen-column': this.columnProp(column, 'frozen')
            }];
        },
        getFilterColumnHeaderStyle(column) {
            return [this.columnProp(column, 'filterHeaderStyle'), this.columnProp(column, 'styles')];
        },
        getHeaderColumns(row){
            let cols = [];

            if (row.child && row.child.$scopedSlots.default) {
                row.child.$scopedSlots.default().forEach(child => {
                    if (child.child && child.child.children && child.child.children instanceof Array)
                        cols = [...cols, ...child.child.children];
                    else if (child.componentOptions && child.componentOptions.tag === 'Column')
                        cols.push(child);
                });

                return cols;
            }
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    },
    components: {
        'DTHeaderCell': HeaderCell,
        'DTHeaderCheckbox': HeaderCheckbox,
        'DTColumnFilter': ColumnFilter
    }
}
</script>
