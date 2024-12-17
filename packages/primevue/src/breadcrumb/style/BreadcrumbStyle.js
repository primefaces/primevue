import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-breadcrumb {
    background: ${dt('breadcrumb.background')};
    padding: ${dt('breadcrumb.padding')};
    overflow-x: auto;
}

.p-breadcrumb-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${dt('breadcrumb.gap')};
}

.p-breadcrumb-separator {
    display: flex;
    align-items: center;
    color: ${dt('breadcrumb.separator.color')};
}

.p-breadcrumb-separator-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-breadcrumb::-webkit-scrollbar {
    display: none;
}

.p-breadcrumb-item-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${dt('breadcrumb.item.gap')};
    transition: background ${dt('breadcrumb.transition.duration')}, color ${dt('breadcrumb.transition.duration')}, outline-color ${dt('breadcrumb.transition.duration')}, box-shadow ${dt('breadcrumb.transition.duration')};
    border-radius: ${dt('breadcrumb.item.border.radius')};
    outline-color: transparent;
    color: ${dt('breadcrumb.item.color')};
}

.p-breadcrumb-item-link:focus-visible {
    box-shadow: ${dt('breadcrumb.item.focus.ring.shadow')};
    outline: ${dt('breadcrumb.item.focus.ring.width')} ${dt('breadcrumb.item.focus.ring.style')} ${dt('breadcrumb.item.focus.ring.color')};
    outline-offset: ${dt('breadcrumb.item.focus.ring.offset')};
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {
    color: ${dt('breadcrumb.item.hover.color')};
}

.p-breadcrumb-item-label {
    transition: inherit;
}

.p-breadcrumb-item-icon {
    color: ${dt('breadcrumb.item.icon.color')};
    transition: inherit;
}

.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {
    color: ${dt('breadcrumb.item.icon.hover.color')};
}
`;

const classes = {
    root: 'p-breadcrumb p-component',
    list: 'p-breadcrumb-list',
    homeItem: 'p-breadcrumb-home-item',
    separator: 'p-breadcrumb-separator',
    separatorIcon: 'p-breadcrumb-separator-icon',
    item: ({ instance }) => ['p-breadcrumb-item', { 'p-disabled': instance.disabled() }],
    itemLink: 'p-breadcrumb-item-link',
    itemIcon: 'p-breadcrumb-item-icon',
    itemLabel: 'p-breadcrumb-item-label'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    theme,
    classes
});
