<template>
    <tbody class="p-datatable-tbody">
        <tr v-for="n in rows" :key="n">
            <td v-for="(col,i) of columns" :key="col.props.columnKey||col.props.field||i">
                <component :is="col.children.loading" :column="col" :index="i" v-if="col.children && col.children.loading" />
            </td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'TableLoadingBody',
    props: {
        columns: {
            type: null,
            default: null
        },
        rows: {
            type: null,
            default: null
        }
    }
}
</script>
