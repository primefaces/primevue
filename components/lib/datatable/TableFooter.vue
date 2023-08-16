<template>
    <tfoot v-if="hasFooter" :class="cx('tfoot')" :style="sx('tfoot')" role="rowgroup" v-bind="columnGroup ? { ...ptm('tfoot', ptmTFootOptions), ...getColumnGroupPT('root') } : ptm('tfoot', ptmTFootOptions)" data-pc-section="tfoot">
        <tr v-if="!columnGroup" role="row" v-bind="ptm('footerRow')">
            <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                <DTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :pt="pt" />
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row, i) of getFooterRows()" :key="i" role="row" v-bind="{ ...ptm('footerRow'), ...getRowPT(row, 'root', i) }">
                <template v-for="(col, j) of getFooterColumns(row)" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || j">
                    <DTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :index="i" :pt="pt" />
                </template>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { ObjectUtils } from 'primevue/utils';
import { mergeProps } from 'vue';
import FooterCell from './FooterCell.vue';

export default {
    name: 'TableFooter',
    hostName: 'DataTable',
    extends: BaseComponent,
    props: {
        columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: Object,
            default: null
        }
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getColumnGroupPT(key) {
            const columnGroupMetaData = {
                props: this.getColumnGroupProps(),
                parent: {
                    props: this.$props,
                    state: this.$data
                },
                context: {
                    type: 'footer',
                    scrollable: this.ptmTFootOptions.context.scrollable
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
        getFooterRows() {
            let rows = [];

            let columnGroup = this.columnGroup;

            if (columnGroup.children && columnGroup.children.default) {
                for (let child of columnGroup.children.default()) {
                    if (child.type.name === 'Row') {
                        rows.push(child);
                    } else if (child.children && child.children instanceof Array) {
                        rows = child.children;
                    }
                }

                return rows;
            }
        },
        getFooterColumns(row) {
            let cols = [];

            if (row.children && row.children.default) {
                row.children.default().forEach((child) => {
                    if (child.children && child.children instanceof Array) cols = [...cols, ...child.children];
                    else if (child.type.name === 'Column') cols.push(child);
                });

                return cols;
            }
        }
    },
    computed: {
        hasFooter() {
            let hasFooter = false;

            if (this.columnGroup) {
                hasFooter = true;
            } else if (this.columns) {
                for (let col of this.columns) {
                    if (this.columnProp(col, 'footer') || (col.children && col.children.footer)) {
                        hasFooter = true;
                        break;
                    }
                }
            }

            return hasFooter;
        },
        ptmTFootOptions() {
            return {
                context: {
                    scrollable: this.$parentInstance?.$parentInstance?.scrollable
                }
            };
        }
    },
    components: {
        DTFooterCell: FooterCell
    }
};
</script>
