<template>
    <th
        v-if="!columnProp('hidden') && (rowGroupMode !== 'subheader' || groupRowsBy !== columnProp('field'))"
        :style="getFilterColumnHeaderStyle"
        :class="getFilterColumnHeaderClass"
        v-bind="{ ...getColumnPT('root'), ...getColumnPT('headerCell') }"
        :data-p-frozen-column="columnProp('frozen')"
    >
        <DTHeaderCheckbox v-if="columnProp('selectionMode') === 'multiple'" :checked="allRowsSelected" :disabled="empty" @change="$emit('checkbox-change', $event)" :column="column" :unstyled="unstyled" :pt="pt" />
        <DTColumnFilter
            v-if="column.children && column.children.filter"
            :field="columnProp('filterField') || columnProp('field')"
            :type="columnProp('dataType')"
            display="row"
            :showMenu="columnProp('showFilterMenu')"
            :filterElement="column.children && column.children.filter"
            :filterHeaderTemplate="column.children && column.children.filterheader"
            :filterFooterTemplate="column.children && column.children.filterfooter"
            :filterClearTemplate="column.children && column.children.filterclear"
            :filterApplyTemplate="column.children && column.children.filterapply"
            :filterIconTemplate="column.children && column.children.filtericon"
            :filterAddIconTemplate="column.children && column.children.filteraddicon"
            :filterRemoveIconTemplate="column.children && column.children.filterremoveicon"
            :filterClearIconTemplate="column.children && column.children.filterclearicon"
            :filters="filters"
            :filtersStore="filtersStore"
            :filterInputProps="filterInputProps"
            :filterButtonProps="filterButtonProps"
            @filter-change="$emit('filter-change', $event)"
            @filter-apply="$emit('filter-apply')"
            :filterMenuStyle="columnProp('filterMenuStyle')"
            :filterMenuClass="columnProp('filterMenuClass')"
            :showOperator="columnProp('showFilterOperator')"
            :showClearButton="columnProp('showClearButton')"
            :showApplyButton="columnProp('showApplyButton')"
            :showMatchModes="columnProp('showFilterMatchModes')"
            :showAddButton="columnProp('showAddButton')"
            :matchModeOptions="columnProp('filterMatchModeOptions')"
            :maxConstraints="columnProp('maxConstraints')"
            @operator-change="$emit('operator-change', $event)"
            @matchmode-change="$emit('matchmode-change', $event)"
            @constraint-add="$emit('constraint-add', $event)"
            @constraint-remove="$emit('constraint-remove', $event)"
            @apply-click="$emit('apply-click', $event)"
            :column="column"
            :unstyled="unstyled"
            :pt="pt"
        />
    </th>
</template>

<script>
import { getNextElementSibling, getOuterWidth, getPreviousElementSibling } from '@primeuix/utils/dom';
import BaseComponent from '@primevue/core/basecomponent';
import { getVNodeProp } from '@primevue/core/utils';
import { mergeProps } from 'vue';
import ColumnFilter from './ColumnFilter.vue';
import HeaderCheckbox from './HeaderCheckbox.vue';

export default {
    name: 'FilterHeaderCell',
    hostName: 'DataTable',
    extends: BaseComponent,
    emits: ['checkbox-change', 'filter-change', 'filter-apply', 'operator-change', 'matchmode-change', 'constraint-add', 'constraint-remove', 'apply-click'],
    props: {
        column: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        allRowsSelected: {
            type: Boolean,
            default: false
        },
        empty: {
            type: Boolean,
            default: false
        },
        display: {
            type: String,
            default: 'row'
        },
        filters: {
            type: Object,
            default: null
        },
        filtersStore: {
            type: Object,
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
        filterInputProps: {
            type: null,
            default: null
        },
        filterButtonProps: {
            type: null,
            default: null
        }
    },
    data() {
        return {
            styleObject: {}
        };
    },
    mounted() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    updated() {
        if (this.columnProp('frozen')) {
            this.updateStickyPosition();
        }
    },
    methods: {
        columnProp(prop) {
            return getVNodeProp(this.column, prop);
        },
        getColumnPT(key) {
            if (!this.column) return null;

            const columnMetaData = {
                props: this.column.props,
                parent: {
                    instance: this,
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    index: this.index
                }
            };

            return mergeProps(this.ptm(`column.${key}`, { column: columnMetaData }), this.ptm(`column.${key}`, columnMetaData), this.ptmo(this.getColumnProp(), key, columnMetaData));
        },
        getColumnProp() {
            return this.column.props && this.column.props.pt ? this.column.props.pt : undefined; //@todo
        },
        updateStickyPosition() {
            if (this.columnProp('frozen')) {
                let align = this.columnProp('alignFrozen');

                if (align === 'right') {
                    let pos = 0;
                    let next = getNextElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (next) {
                        pos = getOuterWidth(next) + parseFloat(next.style['inset-inline-end'] || 0);
                    }

                    this.styleObject.insetInlineEnd = pos + 'px';
                } else {
                    let pos = 0;
                    let prev = getPreviousElementSibling(this.$el, '[data-p-frozen-column="true"]');

                    if (prev) {
                        pos = getOuterWidth(prev) + parseFloat(prev.style['inset-inline-start'] || 0);
                    }

                    this.styleObject.insetInlineStart = pos + 'px';
                }
            }
        }
    },
    computed: {
        getFilterColumnHeaderClass() {
            return [this.cx('headerCell', { column: this.column }), this.columnProp('filterHeaderClass'), this.columnProp('class')];
        },
        getFilterColumnHeaderStyle() {
            return this.columnProp('frozen') ? [this.columnProp('filterHeaderStyle'), this.columnProp('style'), this.styleObject] : [this.columnProp('filterHeaderStyle'), this.columnProp('style')];
        }
    },
    components: {
        DTHeaderCheckbox: HeaderCheckbox,
        DTColumnFilter: ColumnFilter
    }
};
</script>
