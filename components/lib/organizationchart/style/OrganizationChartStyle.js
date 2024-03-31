import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node-content', { 'p-organizationchart-selectable-node': instance.selectable, 'p-highlight': instance.selected }],
    nodeToggler: 'p-node-toggler',
    nodeTogglerIcon: 'p-node-toggler-icon',
    lines: 'p-organizationchart-lines',
    lineDown: 'p-organizationchart-line-down',
    lineLeft: ({ index }) => ['p-organizationchart-line-left', { 'p-organizationchart-line-top': !(index === 0) }],
    lineRight: ({ props, index }) => ['p-organizationchart-line-right', { 'p-organizationchart-line-top': !(index === props.node.children.length - 1) }],
    nodes: 'p-organizationchart-nodes'
};

export default BaseStyle.extend({
    name: 'organizationchart',
    classes
});
