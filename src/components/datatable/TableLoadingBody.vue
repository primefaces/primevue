<template>
    <tbody class="p-datatable-tbody">
        <tr v-for="n in rows" :key="n" role="row">
            <td v-for="(col, i) of columns" :key="col.props.columnKey || col.props.field || i">
                <component v-if="col.children && col.children.loading" :is="col.children.loading" :column="col" :index="i" />
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
};
</script>
