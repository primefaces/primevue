<template>
    <tbody class="p-datatable-tbody">
        <tr v-for="n in rows" :key="n">
            <td v-for="(col,i) of columns" :key="col.columnKey||col.field||i">
                <DTColumnSlot :column="col" :index="i" type="loading" />
            </td>
        </tr>
    </tbody>
</template>

<script>
import ColumnSlot from './ColumnSlot';

export default {
    props: {
        columns: {
            type: null,
            default: null
        },
        rows: {
            type: null,
            default: null
        }
    },
    components: {
        'DTColumnSlot': ColumnSlot
    }
}
</script>