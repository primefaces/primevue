<script>
export default {
    name: 'column',
    props: {
        columnKey: {
            type: Object,
            default: null
        },
        field: {
            type: String,
            default: null
        },
        sortField: {
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
        filterMatchMode: {
            type: String,
            default: 'startsWith'
        },
        excludeGlobalFilter: {
            type: Boolean,
            default: false
        }
    },
    render() {
        return null;
    }
}
</script>