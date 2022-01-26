<template>
    <tfoot class="p-datatable-tfoot" v-if="hasFooter" role="rowgroup">
        <tr v-if="!columnGroup" role="row">
            <template v-for="(col,i) of columns" :key="columnProp(col,'columnKey')||columnProp(col,'field')||i" >
                <DTFooterCell :column="col" v-if="!columnProp(col,'hidden')"/>
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of getFooterRows()" :key="i" role="row">
                <template v-for="(col,j) of getFooterColumns(row)" :key="columnProp(col,'columnKey')||columnProp(col,'field')||j">
                    <DTFooterCell :column="col" v-if="!columnProp(col,'hidden')"/>
                </template>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import FooterCell from './FooterCell.vue';
import {ObjectUtils} from 'primevue/utils';

export default {
    name: 'TableFooter',
    props: {
        columnGroup: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getFooterRows() {
            let rows = [];

            let columnGroup = this.columnGroup;
            if (columnGroup.children && columnGroup.children.default) {
                for (let child of columnGroup.children.default()) {
                    if (child.type.name === 'Row') {
                        rows.push(child);
                    }
                    else if (child.children && child.children instanceof Array) {
                        rows = child.children;
                    }
                }

                return rows;
            }
        },
        getFooterColumns(row){
            let cols = [];

            if (row.children && row.children.default) {
                row.children.default().forEach(child => {
                    if (child.children && child.children instanceof Array)
                        cols = [...cols, ...child.children];
                    else if (child.type.name === 'Column')
                        cols.push(child);
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
            }
            else if (this.columns) {
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
        'DTFooterCell': FooterCell
    }
}
</script>
