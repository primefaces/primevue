<template>
    <tfoot class="p-datatable-tfoot" v-if="hasFooter">
        <tr v-if="!columnGroup">
            <td v-for="(col,i) of columns" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i" :style="columnProp(col, 'footerStyle')" :class="columnProp(col, 'footerClass')"
                :colspan="columnProp(col, 'colspan')" :rowspan="columnProp(col, 'rowspan')">
                <component :is="col.children.footer" :column="col" v-if="col.children && col.children.footer"/>
                {{columnProp(col, 'footer')}}
            </td>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.children.default()" :key="i">
                <td v-for="(col,i) of row.children.default()" :key="columnProp(col, 'columnKey')||columnProp(col, 'field')||i" :style="columnProp(col, 'footerStyle')" :class="columnProp(col, 'footerClass')"
                    :colspan="columnProp(col, 'colspan')" :rowspan="columnProp(col, 'rowspan')">
                    <component :is="col.children.footer" :column="col" v-if="col.children && col.children.footer"/>
                    {{columnProp(col, 'footer')}}
                </td>
            </tr>
        </template>
    </tfoot>
</template>

<script>
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
            return col.props ? col.props[prop] : null;
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
    }
}
</script>