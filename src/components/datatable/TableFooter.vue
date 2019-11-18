<template>
    <tfoot class="p-datatable-tfoot" v-if="hasFooter">
        <tr v-if="!columnGroup">
            <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i" :style="col.footerStyle" :class="col.footerClass"
                :colspan="col.colspan" :rowspan="col.rowspan">
                <DTColumnSlot :column="col" type="footer" v-if="col.$scopedSlots.footer" />
                {{col.footer}}
            </td>
        </tr>
        <template v-else>
            <tr v-for="(row,i) of columnGroup.rows" :key="i">
                <td v-for="(col,i) of row.columns" :key="col.columnKey||col.field||i" :style="col.footerStyle" :class="col.footerClass"
                    :colspan="col.colspan" :rowspan="col.rowspan">
                    <DTColumnSlot :column="col" type="footer" v-if="col.$scopedSlots.footer" />
                    {{col.footer}}
                </td>
            </tr>
        </template>
    </tfoot>
</template>

<script>
import ColumnSlot from './ColumnSlot.vue';

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
                    if (col.footer || col.$scopedSlots.footer) {
                        hasFooter = true;
                        break;
                    }
                }
            }

            return hasFooter;
        }
    },
    components: {
        'DTColumnSlot': ColumnSlot
    }
}
</script>