<template>
    <tfoot v-if="hasFooter" class="p-datatable-tfoot" role="rowgroup" v-bind="{ ...ptm('tfoot'), ...getColumnGroupPTOptions('root') }">
        <tr v-if="!columnGroup" role="row" v-bind="ptm('footerRow')">
            <template v-for="(col, i) of columns" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || i">
                <DTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :pt="pt" />
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row, i) of getFooterRows()" :key="i" role="row" v-bind="getRowPTOptions(row, 'root')">
                <template v-for="(col, j) of getFooterColumns(row)" :key="columnProp(col, 'columnKey') || columnProp(col, 'field') || j">
                    <DTFooterCell v-if="!columnProp(col, 'hidden')" :column="col" :pt="pt" />
                </template>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import { ObjectUtils } from 'primevue/utils';
import FooterCell from './FooterCell.vue';

export default {
    name: 'TableFooter',
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
        getColumnGroupPTOptions(key) {
            return this.ptmo(this.getColumnGroupProps(), key, {
                props: this.getColumnGroupProps(),
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            });
        },
        getColumnGroupProps() {
            return this.columnGroup && this.columnGroup.props && this.columnGroup.props.pt ? this.columnGroup.props.pt : undefined; //@todo
        },
        getRowPTOptions(row, key) {
            return this.ptmo(this.getRowProp(row), key, {
                props: row.props,
                parent: {
                    props: this.$props,
                    state: this.$data
                }
            });
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
        }
    },
    components: {
        DTFooterCell: FooterCell
    }
};
</script>
