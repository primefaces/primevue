export default {
    css: ({ dt }) => `
.p-breadcrumb {
    background: ${dt('breadcrumb.background')};
    border: 0 none;
    border-radius: ${dt('rounded.base')};
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    margin: 0 0.5rem 0 0.5rem;
    color: ${dt('breadcrumb.separator.color')};
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-action {
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
}

.p-breadcrumb-action:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-breadcrumb-label {
    color: ${dt('breadcrumb.item.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    line-height: 1;
}

.p-breadcrumb-label:hover {
    color: ${dt('breadcrumb.item.hover.color')};
    line-height: 1;
}

.p-breadcrumb-icon {
    color: ${dt('breadcrumb.item.icon.color')};
}
`
};
