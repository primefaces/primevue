<script>
export default {
    functional: true,
    props: {
        column: {
            type: null,
            default: null
        },
        node: {
            type: null,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    render(createElement, context) {
        const content = context.props.column.$scopedSlots[context.props.type]({
            'node': context.props.node,
            'column': context.props.column
        });
        return [content];
    }
};
</script>