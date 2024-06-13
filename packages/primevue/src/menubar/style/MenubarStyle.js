import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-menubar {
    display: flex;
    align-items: center;
    background: ${dt('menubar.background')};
    border: 1px solid ${dt('menubar.border.color')};
    border-radius: ${dt('menubar.border.radius')};
    color: ${dt('menubar.color')};
    padding: ${dt('menubar.padding')};
    gap: ${dt('menubar.gap')};
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: ${dt('menubar.gap')};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${dt('menubar.base.item.border.radius')};
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${dt('menubar.base.item.padding')};
}

.p-menubar-item-content {
    transition: background ${dt('menubar.transition.duration')}, color ${dt('menubar.transition.duration')};
    border-radius: ${dt('menubar.item.border.radius')};
    color: ${dt('menubar.item.color')};
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt('menubar.item.padding')};
    gap: ${dt('menubar.item.gap')};
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${dt('menubar.item.icon.color')};
}

.p-menubar-submenu-icon {
    color: ${dt('menubar.submenu.icon.color')};
    margin-left: auto;
    font-size: ${dt('menubar.submenu.icon.size')};
    width: ${dt('menubar.submenu.icon.size')};
    height: ${dt('menubar.submenu.icon.size')};
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${dt('menubar.item.focus.color')};
    background: ${dt('menubar.item.focus.background')};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: ${dt('menubar.item.icon.focus.color')};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${dt('menubar.submenu.icon.focus.color')};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${dt('menubar.item.focus.color')};
    background: ${dt('menubar.item.focus.background')};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: ${dt('menubar.item.icon.focus.color')};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${dt('menubar.submenu.icon.focus.color')};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${dt('menubar.item.active.color')};
    background: ${dt('menubar.item.active.background')};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: ${dt('menubar.item.icon.active.color')};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${dt('menubar.submenu.icon.active.color')};
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: ${dt('menubar.submenu.background')};
    border: 1px solid ${dt('menubar.submenu.border.color')};
    border-radius: ${dt('menubar.border.radius')};
    box-shadow: ${dt('menubar.submenu.shadow')};
    color: ${dt('menubar.submenu.color')};
    flex-direction: column;
    padding: ${dt('menubar.submenu.padding')};
    gap: ${dt('menubar.submenu.gap')};
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${dt('menubar.separator.border.color')};
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${dt('menubar.mobile.button.size')};
    height: ${dt('menubar.mobile.button.size')};
    position: relative;
    color: ${dt('menubar.mobile.button.color')};
    border: 0 none;
    background: transparent;
    border-radius: ${dt('menubar.mobile.button.border.radius')};
    transition: background ${dt('menubar.transition.duration')}, color ${dt('menubar.transition.duration')}, outline-color ${dt('menubar.transition.duration')};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${dt('menubar.mobile.button.hover.color')};
    background: ${dt('menubar.mobile.button.hover.background')};
}

.p-menubar-button:focus-visible {
    box-shadow: ${dt('menubar.mobile.button.focus.ring.shadow')};
    outline: ${dt('menubar.mobile.button.focus.ring.width')} ${dt('menubar.mobile.button.focus.ring.style')} ${dt('menubar.mobile.button.focus.ring.color')};
    outline-offset: ${dt('menubar.mobile.button.focus.ring.offset')};
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: ${dt('menubar.submenu.padding')};
    background: ${dt('menubar.submenu.background')};
    border: 1px solid ${dt('menubar.submenu.border.color')};
    box-shadow: ${dt('menubar.submenu.shadow')};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: ${dt('menubar.item.border.radius')};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: ${dt('menubar.item.padding')};
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid ${dt('menubar.separator.border.color')};
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: ${dt('menubar.submenu.mobile.indent')};
}
`;

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'flex' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'p-menubar p-component',
        {
            'p-menubar-mobile': instance.queryMatches,
            'p-menubar-mobile-active': instance.mobileActive
        }
    ],
    start: 'p-menubar-start',
    button: 'p-menubar-button',
    rootList: 'p-menubar-root-list',
    item: ({ instance, processedItem }) => [
        'p-menubar-item',
        {
            'p-menubar-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-menubar-item-content',
    itemLink: 'p-menubar-item-link',
    itemIcon: 'p-menubar-item-icon',
    itemLabel: 'p-menubar-item-label',
    submenuIcon: 'p-menubar-submenu-icon',
    submenu: 'p-menubar-submenu',
    separator: 'p-menubar-separator',
    end: 'p-menubar-end'
};

export default BaseStyle.extend({
    name: 'menubar',
    theme,
    classes,
    inlineStyles
});
