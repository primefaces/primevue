<template>
    <thead
        :class="cx('thead')"
        :style="sx('thead')"
        role="rowgroup"
        v-bind="columnGroup ? { ...ptm('thead', ptmTHeadOptions), ...getColumnGroupPT('root') } : ptm('thead', ptmTHeadOptions)"
        :data-p-scrollable="$parentInstance?.$parentInstance?.scrollable"
        data-pc-section="thead"
    >
        <template v-if="!columnGroup">
            <tr role="row" v-bind="ptm('headerRow')">
                <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                    <DTHeaderCell
                        v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))"
                        :column="col"
                        :index="i"
                        @column-click="$emit('column-click', $event)"
                        @column-mousedown="$emit('column-mousedown', $event)"
                        @column-dragstart="$emit('column-dragstart', $event)"
                        @column-dragover="$emit('column-dragover', $event)"
                        @column-dragleave="$emit('column-dragleave', $event)"
                        @column-drop="$emit('column-drop', $event)"
                        :groupRowsBy="groupRowsBy"
                        :groupRowSortField="groupRowSortField"
                        :reorderableColumns="reorderableColumns"
                        :resizableColumns="resizableColumns"
                        @column-resizestart="$emit('column-resizestart', $event)"
                        :sortMode="sortMode"
                        :sortField="sortField"
                        :sortOrder="sortOrder"
                        :multiSortMeta="multiSortMeta"
                        :allRowsSelected="allRowsSelected"
                        :empty="empty"
                        @checkbox-change="$emit('checkbox-change', $event)"
                        :filters="filters"
                        :filterDisplay="filterDisplay"
                        :filtersStore="filtersStore"
                        :filterInputProps="filterInputProps"
                        :filterButtonProps="filterButtonProps"
                        :first="first"
                        @filter-change="$emit('filter-change', $event)"
                        @filter-apply="$emit('filter-apply')"
                        @operator-change="$emit('operator-change', $event)"
                        @matchmode-change="$emit('matchmode-change', $event)"
                        @constraint-add="$emit('constraint-add', $event)"
                        @constraint-remove="$emit('constraint-remove', $event)"
                        @apply-click="$emit('apply-click', $event)"
                        :unstyled="unstyled"
                        :pt="pt"
                    />
                </template>
            </tr>
        </template>
        <template v-else>
            <tr v-for="(row, i) of getHeaderRows()" :key="i" role="row" v-bind="{ ...ptm('headerRow'), ...getRowPT(row, 'root', i) }">
                <template v-for="(col, j) of getHeaderColumns(row)" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || j">
                    <DTHeaderCell
                        v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field')) && typeof col.children !== 'string'"
                        :column="col"
                        @column-click="$emit('column-click', $event)"
                        @column-mousedown="$emit('column-mousedown', $event)"
                        :groupRowsBy="groupRowsBy"
                        :groupRowSortField="groupRowSortField"
                        :sortMode="sortMode"
                        :sortField="sortField"
                        :sortOrder="sortOrder"
                        :multiSortMeta="multiSortMeta"
                        :allRowsSelected="allRowsSelected"
                        :empty="empty"
                        @checkbox-change="$emit('checkbox-change', $event)"
                        :filters="filters"
                        :filterDisplay="filterDisplay"
                        :filtersStore="filtersStore"
                        :filterInputProps="filterInputProps"
                        :filterButtonProps="filterButtonProps"
                        @filter-change="$emit('filter-change', $event)"
                        @filter-apply="$emit('filter-apply')"
                        @operator-change="$emit('operator-change', $event)"
                        @matchmode-change="$emit('matchmode-change', $event)"
                        @constraint-add="$emit('constraint-add', $event)"
                        @constraint-remove="$emit('constraint-remove', $event)"
                        @apply-click="$emit('apply-click', $event)"
                        :unstyled="unstyled"
                        :pt="pt"
                    />
                </template>
            </tr>
        </template>
        <tr v-if="filterDisplay === 'row'" role="row" v-bind="ptm('headerRow')">
            <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                <DTFilterHeaderCell
                    v-if="!columnProp(col, 'hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp(col, 'field'))"
                    :column="col"
                    :index="i"
                    :allRowsSelected="allRowsSelected"
                    :empty="empty"
                    display="row"
                    :filters="filters"
                    :filtersStore="filtersStore"
                    :filterInputProps="filterInputProps"
                    :filterButtonProps="filterButtonProps"
                    @filter-change="$emit('filter-change', $event)"
                    @filter-apply="$emit('filter-apply')"
                    @operator-change="$emit('operator-change', $event)"
                    @matchmode-change="$emit('matchmode-change', $event)"
                    @constraint-add="$emit('constraint-add', $event)"
                    @constraint-remove="$emit('constraint-remove', $event)"
                    @apply-click="$emit('apply-click', $event)"
                    @checkbox-change="$emit('checkbox-change', $event)"
                    :unstyled="unstyled"
                    :pt="pt"
                />
            </template>
        </tr>
    </thead>
</template>

<script>
import BaseComponent from '@primevue/core/basecomponent';
import { HelperSet, getVNodeProp } from '@primevue/core/utils';
import { mergeProps } from 'vue';
import FilterHeaderCell from './FilterHeaderCell.vue';
import HeaderCell from './HeaderCell.vue';

export default {
    name: 'TableHeader',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: [
        'column-click',
        'column-mousedown',
        'column-dragstart',
        'column-dragover',
        'column-dragleave',
        'column-drop',
        'column-resizestart',
        'checkbox-change',
        'filter-change',
        'filter-apply',
        'operator-change',
        'matchmode-change',
        'constraint-add',
        'constraint-remove',
        'filter-clear',
        'apply-click'
    ],
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
            type: [Array, String, Function],
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
        },
        reorderableColumns: {
            type: Boolean,
            default: false
        },
        first: {
            type: Number,
            default: 0
        },
        filterInputProps: {
            type: null,
            default: null
        },
        filterButtonProps: {
            type: null,
            default: null
        }
    },
    provide() {
        return {
            $rows: this.d_headerRows,
            $columns: this.d_headerColumns
        };
    },
    data() {
        return {
            d_headerRows: new HelperSet({ type: 'Row' }),
            d_headerColumns: new HelperSet({ type: 'Column' })
        };
    },
    beforeUnmount() {
        this.d_headerRows.clear();
        this.d_headerColumns.clear();
    },
    methods: {
        columnProp(col, prop) {
            return getVNodeProp(col, prop);
        },
        getColumnGroupPT(key) {
            const columnGroupMetaData = {
                props: this.getColumnGroupProps(),
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    type: 'header',
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };

            return mergeProps(this.ptm(`columnGroup.${key}`, { columnGroup: columnGroupMetaData }), this.ptm(`columnGroup.${key}`, columnGroupMetaData), this.ptmo(this.getColumnGroupProps(), key, columnGroupMetaData));
        },
        getColumnGroupProps() {
            return this.columnGroup && this.columnGroup.props && this.columnGroup.props.pt ? this.columnGroup.props.pt : undefined; //@todo
        },
        getRowPT(row, key, index) {
            const rowMetaData = {
                props: row.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index
                }
            };

            return mergeProps(this.ptm(`row.${key}`, { row: rowMetaData }), this.ptm(`row.${key}`, rowMetaData), this.ptmo(this.getRowProp(row), key, rowMetaData));
        },
        getRowProp(row) {
            return row.props && row.props.pt ? row.props.pt : undefined; //@todo
        },
        getColumnPT(column, key, index) {
            const columnMetaData = {
                props: column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(column), key, columnMetaData));
        },
        getColumnProp(column) {
            return column.props && column.props.pt ? column.props.pt : undefined; //@todo
        },
        getFilterColumnHeaderClass(column) {
            return [this.cx('headerCell', { column }), this.columnProp(column, 'filterHeaderClass'), this.columnProp(column, 'class')];
        },
        getFilterColumnHeaderStyle(column) {
            return [this.columnProp(column, 'filterHeaderStyle'), this.columnProp(column, 'style')];
        },
        getHeaderRows() {
            return this.d_headerRows?.get(this.columnGroup, this.columnGroup.children);
        },
        getHeaderColumns(row) {
            return this.d_headerColumns?.get(row, row.children);
        }
    },
    computed: {
        ptmTHeadOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        }
    },
    components: {
        DTHeaderCell: HeaderCell,
        DTFilterHeaderCell: FilterHeaderCell
    }
};
</script>
