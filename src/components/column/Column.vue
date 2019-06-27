<script>
export default {
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
        }
    },
    render() {
        return null;
    }
}
</script>