<script>
export default {
    functional: true,
    props: {
        column: {
            type: null,
            default: null
        },
        data: {
            type: null,
            default: null
        },
        index: {
            type: Number,
            default: null
        },
        type: {
            type: String,
            default: null
        },
        frozenRow: {
            type: Boolean,
            default: false
        },
        field: {
            type: null,
            default: null
        },
        filterModel: {
            type: null,
            default: null
        },
        filterCallback: {
            type: null,
            default: null
        },
        editorInitCallback: {
            type: null,
            default: null
        },
        editorSaveCallback: {
            type: null,
            default: null
        },
        editorCancelCallback: {
            type: null,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.column.$scopedSlots[context.props.type]({
            'data': context.props.data,
            'index': context.props.index,
            'column': context.props.column,
            'frozenRow': context.props.frozenRow,
            'field': context.props.field,
            'filterModel': context.props.filterModel,
            'filterCallback': context.props.filterCallback,
            'editorInitCallback': context.props.editorInitCallback,
            'editorSaveCallback': context.props.editorSaveCallback,
            'editorCancelCallback': context.props.editorCancelCallback
        });
        return [content];
    }
}
</script>