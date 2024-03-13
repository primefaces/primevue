export default {
    css: ({ dt }) => `
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

.p-organizationchart-node-content {
    display: inline-block;
    position: relative;
    border: 1px solid ${dt('organizationchart.node.border.color')};
    background: ${dt('organizationchart.node.background')};
    color: ${dt('organizationchart.node.color')};
    padding: 0.75rem 1rem;
    border-radius: ${dt('rounded.base')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
}

.p-organizationchart-node-content:has(.p-node-toggler) {
    padding: 0.75rem 1rem 1.25rem 1rem;
}

.p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: ${dt('organizationchart.node.hover.background')};
    color: ${dt('organizationchart.node.hover.color')};
}

.p-organizationchart-node-content.p-highlight {
    background: ${dt('highlight.background')};
    color: ${dt('highlight.color')};
}

.p-organizationchart-node-content .p-node-toggler {
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
    background: ${dt('organizationchart.toggle.icon.background')};
    color: ${dt('organizationchart.toggle.icon.color')};
    border-radius: 50%;
    border: 1px solid ${dt('organizationchart.toggle.icon.border.color')};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline-color: transparent;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, border-color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
}

.p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon {
    position: relative;
    top: 1px;
}

.p-organizationchart-line-down {
    margin: 0 auto;
    height: 20px;
    width: 1px;
    background: ${dt('organizationchart.connector.color')};
}

.p-organizationchart-line-right {
    border-radius: 0;
    border-left: 1px solid ${dt('organizationchart.connector.color')};
    border-top-left-radius: ${dt('rounded.base')};
}

.p-organizationchart-line-left {
    border-radius: 0;
    border-right: 1px solid ${dt('organizationchart.connector.color')};
}

.p-organizationchart-line-top {
    border-top: 1px solid ${dt('organizationchart.connector.color')};
}

.p-organizationchart-selectable-node {
    cursor: pointer;
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-left) {
    border-right: 0 none;
}

.p-organizationchart-lines :nth-last-child(1 of .p-organizationchart-line-left) {
    border-top-right-radius: ${dt('rounded.base')};
}

.p-organizationchart-lines :nth-child(1 of .p-organizationchart-line-right) {
    border-left: 1px solid ${dt('organizationchart.connector.color')};
    border-top-left-radius: ${dt('rounded.base')};
}
`
};
