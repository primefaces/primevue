<script>
import TreeTableRow from './TreeTableRow';

const TreeTableRowLoader = {
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
        },
        indentation: {
            type: Number,
            default: 1
        }
    },
    render(createElement, context) {
        const root = createElement(TreeTableRow, {
            key: context.props.node.key,
            props: context.props,
            on: {
                'node-toggle': context.listeners['node-toggle'],
                'node-click': context.listeners['node-click'],
                'checkbox-change': context.listeners['checkbox-change']
            }
        });

        let element = [root];
        const node = context.props.node;
        const expanded = context.props.expandedKeys && context.props.expandedKeys[node.key] === true;

        if (expanded && node.children && node.children.length) {
            for (let childNode of node.children) {
                let childNodeProps = {...context.props};
                childNodeProps.node = childNode;
                childNodeProps.parentNode = node;
                childNodeProps.level = context.props.level + 1;
                childNodeProps.indentation = context.props.indentation;

                let childNodeElement = createElement(TreeTableRowLoader, {
                    key: childNode.key,
                    props: childNodeProps,
                    on: {
                        'node-toggle': context.listeners['node-toggle'],
                        'node-click': context.listeners['node-click'],
                        'checkbox-change': (event) => {
                            let check = event.check;
                            let _selectionKeys = {...event.selectionKeys};
                            let checkedChildCount = 0;
                            let childPartialSelected = false;

                            for(let child of node.children) {
                                if(_selectionKeys[child.key] && _selectionKeys[child.key].checked)
                                    checkedChildCount++;
                                else if(_selectionKeys[child.key] && _selectionKeys[child.key].partialChecked)
                                    childPartialSelected = true;
                            }

                            if(check && checkedChildCount === node.children.length) {
                                _selectionKeys[node.key] = {checked: true, partialChecked: false};
                            }
                            else {
                                if (!check) {
                                    delete _selectionKeys[node.key];
                                }

                                if(childPartialSelected || (checkedChildCount > 0 && checkedChildCount !== node.children.length))
                                    _selectionKeys[node.key] = {checked: false, partialChecked: true};
                                else
                                    _selectionKeys[node.key] = {checked: false, partialChecked: false};
                            }

                            context.listeners['checkbox-change']({
                                node: event.node,
                                check: event.check,
                                selectionKeys: _selectionKeys
                            });
                        }
                    }
                });

                element.push(childNodeElement);
            }
        }

        return element;
    }
};

export default TreeTableRowLoader;
</script>