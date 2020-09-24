<template>
    <tfoot class="p-datatable-tfoot" v-if="hasFooter">
        <tr v-if="!columnGroup">
            <td v-for="(col,i) of columns" :key="col.props?.columnKey||col.props?.field||i" :style="col.props?.footerStyle" :class="col.props?.footerClass"
                :colspan="col.props?.colspan" :rowspan="col.props?.rowspan">
                <component :is="col.children.footer" :column="col" v-if="col.children && col.children.footer"/>
                {{col.props?.footer}}
            </td>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.children.default()" :key="i">
                <td v-for="(col,i) of row.children.default()" :key="col.props?.columnKey||col.props?.field||i" :style="col.props?.footerStyle" :class="col.props?.footerClass"
                    :colspan="col.props?.colspan" :rowspan="col.props?.rowspan">
                    <component :is="col.children.footer" :column="col" v-if="col.children && col.children.footer"/>
                    {{col.props?.footer}}
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
    computed: {
        hasFooter() {
            let hasFooter = false;

            if (this.columnGroup) {
                hasFooter = true;
            }
            else {
                for (let col of this.columns) {
                    if (col.props?.footer || (col.children && col.children.footer)) {
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