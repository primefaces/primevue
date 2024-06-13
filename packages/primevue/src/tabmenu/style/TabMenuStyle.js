import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: ${dt('tabmenu.tablist.background')};
    border-style: solid;
    border-color: ${dt('tabmenu.tablist.border.color')};
    border-width: ${dt('tabmenu.tablist.border.width')};
    position: relative;
}

.p-tabmenu-item-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: ${dt('tabmenu.item.background')};
    border-style: solid;
    border-width: ${dt('tabmenu.item.border.width')};
    border-color: ${dt('tabmenu.item.border.color')};
    color: ${dt('tabmenu.item.color')};
    padding: ${dt('tabmenu.item.padding')};
    font-weight: ${dt('tabmenu.item.font.weight')};
    transition: background ${dt('tabmenu.transition.duration')}, border-color ${dt('tabmenu.transition.duration')}, color ${dt('tabmenu.transition.duration')}, outline-color ${dt('tabmenu.transition.duration')}, box-shadow ${dt(
        'tabmenu.transition.duration'
    )};
    margin: ${dt('tabmenu.item.margin')};
    outline-color: transparent;
    gap: ${dt('tabmenu.item.gap')};
}

.p-tabmenu-item-link:focus-visible {
    z-index: 1;
    box-shadow: ${dt('tabmenu.item.focus.ring.shadow')};
    outline: ${dt('tabmenu.item.focus.ring.width')} ${dt('tabmenu.item.focus.ring.style')} ${dt('tabmenu.item.focus.ring.color')};
    outline-offset: ${dt('tabmenu.item.focus.ring.offset')};
}

.p-tabmenu-item-icon {
    color: ${dt('tabmenu.item.icon.color')};
    transition: background ${dt('tabmenu.transition.duration')}, border-color ${dt('tabmenu.transition.duration')}, color ${dt('tabmenu.transition.duration')}, outline-color ${dt('tabmenu.transition.duration')}, box-shadow ${dt(
        'tabmenu.transition.duration'
    )};
}

.p-tabmenu-item-label {
    line-height: 1;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
    background: ${dt('tabmenu.item.hover.background')};
    border-color: ${dt('tabmenu.item.hover.border.color')};
    color: ${dt('tabmenu.item.hover.color')};
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
    color: ${dt('tabmenu.item.icon.hover.color')};
}

.p-tabmenu-item-active .p-tabmenu-item-link {
    background: ${dt('tabmenu.item.active.background')};
    border-color: ${dt('tabmenu.item.active.border.color')};
    color: ${dt('tabmenu.item.active.color')};
}

.p-tabmenu-item-active .p-tabmenu-item-icon {
    color: ${dt('tabmenu.item.icon.active.color')};
}

.p-tabmenu-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${dt('tabmenu.active.bar.bottom')};
    height: ${dt('tabmenu.active.bar.height')};
    background: ${dt('tabmenu.active.bar.background')};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`;

const classes = {
    root: 'p-tabmenu p-component',
    tablist: 'p-tabmenu-tablist',
    item: ({ instance, index, item }) => [
        'p-tabmenu-item',
        {
            'p-tabmenu-item-active': instance.d_activeIndex === index,
            'p-disabled': instance.disabled(item)
        }
    ],
    itemLink: 'p-tabmenu-item-link',
    itemIcon: 'p-tabmenu-item-icon',
    itemLabel: 'p-tabmenu-item-label',
    activeBar: 'p-tabmenu-active-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    theme,
    classes
});
