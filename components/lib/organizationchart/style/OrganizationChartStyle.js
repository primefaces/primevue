import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node', { 'p-organizationchart-node-selectable': instance.selectable, 'p-highlight': instance.selected }],
    nodeToggler: 'p-organizationchart-node-toggle-button',
    nodeTogglerIcon: 'p-organizationchart-node-toggle-button-icon',
    lines: 'p-organizationchart-connectors',
    lineDown: 'p-organizationchart-connector-down',
    lineLeft: ({ index }) => ['p-organizationchart-connector-left', { 'p-organizationchart-connector-top': !(index === 0) }],
    lineRight: ({ props, index }) => ['p-organizationchart-connector-right', { 'p-organizationchart-connector-top': !(index === props.node.children.length - 1) }],
    nodes: 'p-organizationchart-node-children'
};

export default BaseStyle.extend({
    name: 'organizationchart',
    classes
});
