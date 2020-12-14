<script>
export default {
    name: 'column',
    props: {
        columnKey: {
            type: null,
            default: null
        },
        field: {
            type: [String, Function],
            default: null
        },
        sortField: {
            type: String,
            default: null
        },
        filterField: {
            type: String,
            default: null
        },
        sortable: {
            type: Boolean,
            default: false
        },
        header: {
            type: null,
            default: null
        },
        footer: {
            type: null,
            default: null
        },
        headerStyle: {
            type: null,
            default: null
        },
        headerClass: {
            type: String,
            default: null
        },
        bodyStyle: {
            type: null,
            default: null
        },
        bodyClass: {
            type: String,
            default: null
        },
        footerStyle: {
            type: null,
            default: null
        },
        footerClass: {
            type: String,
            default: null
        },
        filterHeaderClass: {
            type: String,
            default: null
        },
        filterHeaderStyle: {
            type: null,
            default: false
        },
        filterMatchMode: {
            type: String,
            default: 'startsWith'
        },
        filterFunction: {
            type: Function,
            default: null
        },
        excludeGlobalFilter: {
            type: Boolean,
            default: false
        },
        selectionMode: {
            type: String,
            default: null
        },
        expander: {
            type: Boolean,
            default: false
        },
        colspan: {
            type: Number,
            default: null
        },
        rowspan: {
            type: Number,
            default: null
        },
        rowReorder: {
            type: Boolean,
            default: false
        },
        rowReorderIcon: {
            type: String,
            default: 'pi pi-bars'
        },
        reorderableColumn: {
            type: Boolean,
            default: true
        },
        rowEditor: {
            type: Boolean,
            default: false
        },
        frozen: {
            type: Boolean,
            default: false
        }
    },
    render() {
        return null;
    }
}
</script>