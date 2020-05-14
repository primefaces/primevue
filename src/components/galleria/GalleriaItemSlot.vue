<script>
export default {
    functional: true,
    props: {
        item: {
            type: null,
            default: null
        },
        index: {
            type: Number,
            default: 0
        },
        templates: {
            type: null,
            default: null
        },
        type: {
            type: String,
            default: null
        }
    },
    render(createElement, context) {
        const { item, index, templates, type } = context.props;
        const template = templates && templates[type];

        if (template) {
            let content;
            switch (type) {
                case 'item':
                case 'caption':
                case 'thumbnail':
                    content = template({
                        item
                    });
                    break;
                case 'indicator':
                    content = template({
                        index
                    });
                    break;
                default:
                    content = template({});
                    break;
            }

            return content ? [content] : null;
        }

        return null;
    }
}
</script>
