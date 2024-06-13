import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 ${dt('organizationchart.gutter')};
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid ${dt('organizationchart.node.border.color')};
    background: ${dt('organizationchart.node.background')};
    color: ${dt('organizationchart.node.color')};
    padding: ${dt('organizationchart.node.padding')};
    border-radius: ${dt('organizationchart.node.border.radius')};
    transition: background ${dt('organizationchart.transition.duration')}, border-color ${dt('organizationchart.transition.duration')}, color ${dt('organizationchart.transition.duration')}, box-shadow ${dt('organizationchart.transition.duration')};
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: ${dt('organizationchart.node.toggleable.padding')};
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {
    background: ${dt('organizationchart.node.hover.background')};
    color: ${dt('organizationchart.node.hover.color')};
}

.p-organizationchart-node-selected {
    background: ${dt('organizationchart.node.selected.background')};
    color: ${dt('organizationchart.node.selected.color')};
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    bottom: calc(-1 * calc(${dt('organizationchart.node.toggle.button.size')} / 2));
    margin-left: calc(-1 * calc(${dt('organizationchart.node.toggle.button.size')} / 2));
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: ${dt('organizationchart.node.toggle.button.size')};
    height: ${dt('organizationchart.node.toggle.button.size')};
    text-decoration: none;
    background: ${dt('organizationchart.node.toggle.button.background')};
    color: ${dt('organizationchart.node.toggle.button.color')};
    border-radius: ${dt('organizationchart.node.toggle.button.border.radius')};
    border: 1px solid ${dt('organizationchart.node.toggle.button.border.color')};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background ${dt('organizationchart.transition.duration')}, color ${dt('organizationchart.transition.duration')}, border-color ${dt('organizationchart.transition.duration')}, outline-color ${dt(
        'organizationchart.transition.duration'
    )}, box-shadow ${dt('organizationchart.transition.duration')};
}

.p-organizationchart-node-toggle-button:hover {
    background: ${dt('organizationchart.node.toggle.button.hover.background')};
    color: ${dt('organizationchart.node.toggle.button.hover.color')};
}

.p-organizationchart-node-toggle-button:focus-visible {
    box-shadow: ${dt('breadcrumb.item.focus.ring.shadow')};
    outline: ${dt('breadcrumb.item.focus.ring.width')} ${dt('breadcrumb.item.focus.ring.style')} ${dt('breadcrumb.item.focus.ring.color')};
    outline-offset: ${dt('breadcrumb.item.focus.ring.offset')};
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: ${dt('organizationchart.connector.height')};
    width: 1px;
    background: ${dt('organizationchart.connector.color')};
}

.p-organizationchart-connector-right {
    border-radius: 0;
}

.p-organizationchart-connector-left {
    border-radius: 0;
    border-right: 1px solid ${dt('organizationchart.connector.color')};
}

.p-organizationchart-connector-top {
    border-top: 1px solid ${dt('organizationchart.connector.color')};
}

.p-organizationchart-node-selectable {
    cursor: pointer;
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {
    border-right: 0 none;
}

.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {
    border-top-right-radius: ${dt('organizationchart.connector.border.radius')};
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-left: 1px solid ${dt('organizationchart.connector.color')};
    border-top-left-radius: ${dt('organizationchart.connector.border.radius')};
}
`;

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
    theme,
    classes
});
