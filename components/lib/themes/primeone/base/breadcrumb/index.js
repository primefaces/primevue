export default {
    css: ({ dt }) => `
.p-breadcrumb {
    background: ${dt('breadcrumb.background')};
    border: 0 none;
    border-radius: ${dt('rounded.base')};
    padding: 1rem;
    overflow-x: auto;
}

.p-breadcrumb .p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
}

.p-breadcrumb .p-menuitem-link {
    text-decoration: none;
    display: flex;
    align-items: center;
}

.p-breadcrumb .p-menuitem-separator {
    display: flex;
    align-items: center;
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb .p-menuitem-link {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    border-radius: ${dt('rounded.base')};
    outline-color: transparent;
}

.p-breadcrumb .p-menuitem-link:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-breadcrumb .p-menuitem-text {
    color: ${dt('breadcrumb.item.color')};
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    line-height: 1;
}

.p-breadcrumb .p-menuitem-text:hover {
    color: ${dt('breadcrumb.item.hover.color')};
    line-height: 1;
}

.p-breadcrumb .p-menuitem-icon {
    color: ${dt('breadcrumb.item.icon.color')};
}

.p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: ${dt('breadcrumb.separator.color')};
}
`
};
