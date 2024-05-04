import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-organizationchart-table {
    border-spacing: 0;
    border-collapse: separate;
    margin: 0 auto;
}

.p-organizationchart-table > tbody > tr > td {
    text-align: center;
    vertical-align: top;
    padding: 0 0.75rem;
}

.p-organizationchart-node {
    display: inline-block;
    position: relative;
    border: 1px solid ${dt('organizationchart.node.border.color')};
    background: ${dt('organizationchart.node.background')};
    color: ${dt('organizationchart.node.color')};
    padding: 0.75rem 1rem;
    border-radius: ${dt('rounded.base')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
}

.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {
    padding: 0.75rem 1rem 1.25rem 1rem;
}

.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-highlight):hover {
    background: ${dt('organizationchart.node.hover.background')};
    color: ${dt('organizationchart.node.hover.color')};
}

.p-organizationchart-node.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-organizationchart-node-toggle-button {
    position: absolute;
    bottom: -0.75rem;
    margin-left: -0.75rem;
    z-index: 2;
    left: 50%;
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    text-decoration: none;
    background: ${dt('organizationchart.node.toggle.button.background')};
    color: ${dt('organizationchart.node.toggle.button.color')};
    border-radius: 50%;
    border: 1px solid ${dt('organizationchart.node.toggle.button.border.color')};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-organizationchart-node-toggle-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-organizationchart-node-toggle-button-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-connector-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    background: ${dt('organizationchart.connector.color')};
}

.p-organizationchart-connector-right {
    border-radius: 0;
    border-left: 1px solid ${dt('organizationchart.connector.color')};
    border-top-left-radius: ${dt('rounded.base')};
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
    border-top-right-radius: ${dt('rounded.base')};
}

.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {
    border-left: 1px solid ${dt('organizationchart.connector.color')};
    border-top-left-radius: ${dt('rounded.base')};
}
`;

const classes = {
    root: 'p-organizationchart p-component',
    table: 'p-organizationchart-table',
    node: ({ instance }) => ['p-organizationchart-node', { 'p-organizationchart-node-selectable': instance.selectable, 'p-highlight': instance.selected }],
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
