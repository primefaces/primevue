<script>
import TreeTableRow from './TreeTableRow';
import TreeTableRowRecursiveLoader from './TreeTableRowRecursiveLoader';

export default {
    functional: true,
    props: {
        node: {
            type: null,
            default: null
        },
        columns: {
            type: null,
            default: null
        },
        expandedKeys: {
            type: null,
            default: null
        },
        selectionKeys: {
            type: null,
            default: null
        },
        selectionMode: {
            type: String,
            default: null
        },
        level: {
            type: Number,
            default: 0
        }
    },
    render(createElement, context) {
        const root = createElement(TreeTableRow, { 
            props: context.props,
            on: {
                'node-toggle': context.listeners['node-toggle']
            }
        });

        let element = [root];
        const node = context.props.node;
        const expanded = context.props.expandedKeys && context.props.expandedKeys[node.key] === true;

        if (expanded) {
            for (let childNode of node.children) {
                let childNodeProps = {...context.props};
                childNodeProps.node = childNode;
                childNodeProps.level = context.props.level + 1;

                let childNodeElement = createElement(TreeTableRowRecursiveLoader, { 
                    props: childNodeProps,
                    on: {
                        'node-toggle': context.listeners['node-toggle']
                    }
                });

                element.push(childNodeElement);
            }
        }

        return element;
    }
};
</script>