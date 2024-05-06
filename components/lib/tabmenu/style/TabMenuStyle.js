import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    flex: 1 1 auto;
    background: ${dt('tabmenu.tablist.background')};
    border: 1px solid ${dt('tabmenu.tablist.border.color')};
    border-width: 0 0 1px 0;
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
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: transparent transparent ${dt('tabmenu.item.link.border.color')} transparent;
    color: ${dt('tabmenu.item.link.color')};
    padding: 1rem 1.125rem;
    font-weight: 600;
    border-top-right-radius: ${dt('border.radius.md')};
    border-top-left-radius: ${dt('border.radius.md')};
    transition: color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    margin: 0 0 -1px 0;
    outline-color: transparent;
}

.p-tabmenu-item-link:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: -1px;
}

.p-tabmenu-item-icon {
    margin-right: 0.5rem;
}

.p-tabmenu-item-label {
    line-height: 1;
}
.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
    color: ${dt('tabmenu.item.link.hover.color')};
}

.p-tabmenu-item-active .p-tabmenu-item-link {
    color: ${dt('tabmenu.item.link.active.border.color')};
}

.p-tabmenu-ink-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: -1px;
    height: 1px;
    background-color: ${dt('tabmenu.item.link.active.border.color')};
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
    inkbar: 'p-tabmenu-ink-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    theme,
    classes
});
