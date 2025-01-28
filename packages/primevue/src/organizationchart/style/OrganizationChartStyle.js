import { style } from '@primeuix/styles/organizationchart';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node', { 'p-organizationchart-node-selectable': instance.selectable, 'p-organizationchart-node-selected': instance.selected }],
    nodeToggleButton: 'p-organizationchart-node-toggle-button',
    nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
    connectors: 'p-organizationchart-connectors',
    connectorDown: 'p-organizationchart-connector-down',
    connectorLeft: ({ index }) => ['p-organizationchart-connector-left', { 'p-organizationchart-connector-top': !(index === 0) }],
    connectorRight: ({ props, index }) => ['p-organizationchart-connector-right', { 'p-organizationchart-connector-top': !(index === props.node.children.length - 1) }],
    nodeChildren: 'p-organizationchart-node-children'
};

export default BaseStyle.extend({
    name: 'organizationchart',
    style,
    classes
});
