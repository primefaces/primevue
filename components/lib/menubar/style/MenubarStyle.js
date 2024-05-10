import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-menubar {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.5rem;
    background: ${dt('menubar.background')};
    color: ${dt('menubar.color')};
    border: 1px solid ${dt('menubar.border.color')};
    border-radius: ${dt('border.radius.md')};
}

.p-menubar-root-list,
.p-menubar-submenu {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-menubar-submenu {
    flex-direction: column
}

.p-menubar-item-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('border.radius.sm')});
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
    padding: 0.5rem 0.75rem;
    user-select: none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: ${dt('menubar.item.icon.color')};
    margin-right: 0.5rem;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: ${dt('menubar.item.focus.color')};
    background: ${dt('menubar.item.focus.background')};
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon,
.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${dt('menubar.item.icon.hover.color')};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: ${dt('menubar.item.focus.color')};
    background: ${dt('menubar.item.focus.background')};
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon,
.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: ${dt('menubar.item.icon.hover.color')};
}

.p-menubar-item-active > .p-menubar-item-content {
    color: ${dt('menubar.item.focus.color')};
    background: ${dt('menubar.item.focus.background')};
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon,
.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: ${dt('menubar.item.icon.hover.color')};
}

.p-menubar-submenu-icon {
    color: ${dt('menubar.item.icon.color')};
    margin-left: auto;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: 0.5rem;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    padding: 0.25rem 0.25rem;
    background: ${dt('menubar.background')};
    color: ${dt('menubar.color')};
    border: 1px solid ${dt('menubar.border.color')};
    border-radius: ${dt('border.radius.md')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid ${dt('menubar.separator.border.color')};
    margin: 2px 0;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
    margin: 2px 0;
}

.p-menubar-submenu .p-menubar-item:first-child {
    margin-top: 0;
}

.p-menubar-submenu .p-menubar-item:last-child {
    margin-bottom: 0;
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
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: ${dt('menubar.mobile.toggle.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: ${dt('menubar.mobile.toggle.hover.color')};
    background: ${dt('menubar.mobile.toggle.hover.background')};
}

.p-menubar-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
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
    padding: 0.25rem 0.25rem;
    background: ${dt('menubar.background')};
    border: 1px solid ${dt('menubar.border.color')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
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
    border-top: 1px solid #e2e8f0;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item {
    position: relative;
    margin: 2px 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item:first-child {
    margin-top: 0;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item:last-child {
    margin-bottom: 0;
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
    padding-left: 1rem;
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
