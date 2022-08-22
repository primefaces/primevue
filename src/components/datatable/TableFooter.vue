<template>
    <tfoot class="p-datatable-tfoot" v-if="hasFooter" role="rowgroup">
        <tr v-if="!columnGroup" role="row">
            <template v-for="(col,i) of columns">
                <DTFooterCell :column="col" v-if="!columnProp(col,'hidden')" :key="columnProp(col,'columnKey')||columnProp(col,'field')||i"/>
            </template>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.$scopedSlots.default()" role="row" :key="i">
                <template v-for="(col,j) of getFooterColumns(row)">
                    <DTFooterCell :column="col.child" v-if="!columnProp(col,'hidden')" :key="columnProp(col,'columnKey')||columnProp(col,'field')||j"/>
                </template>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import FooterCell from './FooterCell.vue';
import ObjectUtils from '../utils/ObjectUtils';

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
    },
    methods: {
        columnProp(col, prop) {
            return ObjectUtils.getVNodeProp(col, prop);
        },
        getFooterColumns(row){
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
        hasFooter() {
            let hasFooter = false;

            if (this.columnGroup) {
                hasFooter = true;
            }
            else if (this.columns) {
                for (let col of this.columns) {
                    if (this.columnProp(col, 'footer') || (col.$scopedSlots && col.$scopedSlots.footer)) {
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
