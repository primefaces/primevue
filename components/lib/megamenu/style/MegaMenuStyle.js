import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-megamenu {
    display: flex;
    position: relative;
    padding: 0.5rem 0.5rem;
    background: ${dt('megamenu.background')};
    color: ${dt('megamenu.color')};
    border: 1px solid ${dt('megamenu.border.color')};
    border-radius: ${dt('rounded.base')};
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
}

.p-megamenu-item-content {
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')};
    border-radius: ${dt('rounded.sm')};
    color: ${dt('megamenu.item.color')};
}

.p-megamenu-item-link {
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

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${dt('megamenu.item.icon.color')};
    margin-right: 0.5rem;
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon,
.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt('megamenu.item.icon.hover.color')};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon,
.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${dt('megamenu.item.icon.hover.color')};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon,
.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt('megamenu.item.icon.hover.color')};
}

.p-megamenu-submenu-icon {
    color: ${dt('megamenu.item.icon.color')};
    margin-left: 0.5rem;
    font-size: 0.875rem;
    width: 0.875rem;
    height: 0.875rem;
}

.p-megamenu-panel {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    background: ${dt('megamenu.background')};
    color: ${dt('megamenu.color')};
    border: 1px solid ${dt('megamenu.border.color')};
    border-radius: ${dt('rounded.base')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-panel {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: 0.25rem 0.25rem;
    min-width: 12.5rem;
}

.p-megamenu-submenu .p-megamenu-item {
    margin: 2px 0;
}

.p-megamenu-submenu .p-megamenu-item:first-child {
    margin-top: 0;
}

.p-megamenu-submenu .p-megamenu-item:last-child {
    margin-bottom: 0;
}

.p-megamenu-submenu .p-megamenu-submenu-item {
    margin: 0;
    padding: 0.5rem 0.75rem;
    color: ${dt('megamenu.submenu.item.color')};
    font-weight: 600;
    margin-bottom: 2px;
}

.p-megamenu-submenu .p-menuitem-separator {
    border-top: 1px solid ${dt('megamenu.separator.border.color')};
    margin: 2px 0;
}

.p-megamenu-horizontal {
    align-items: center;
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    flex-direction: column;
    min-width: 12.5rem;
    padding: 0.25rem 0.25rem;
}

.p-megamenu-vertical .p-megamenu-root-list {
    flex-direction: column;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-panel {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: 0.5rem;
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: relative;
    color: ${dt('megamenu.mobile.toggle.color')};
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color ${dt('transition.duration')}, color ${dt('transition.duration')}, outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${dt('megamenu.mobile.toggle.hover.color')};
    background: ${dt('megamenu.mobile.toggle.hover.background')};
}

.p-megamenu-button:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: 0.25rem 0.25rem;
    background: ${dt('megamenu.background')};
    border: 1px solid ${dt('megamenu.border.color')};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    gap: 2px;
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-panel {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}
`;

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance }) => [
        'p-megamenu p-component',
        {
            'p-megamenu-mobile': instance.queryMatches,
            'p-megamenu-mobile-active': instance.mobileActive,
            'p-megamenu-horizontal': instance.horizontal,
            'p-megamenu-vertical': instance.vertical
        }
    ],
    start: 'p-megamenu-start',
    button: 'p-megamenu-button',
    rootList: 'p-megamenu-root-list',
    submenuItem: ({ instance, processedItem }) => [
        'p-megamenu-submenu-item',
        {
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    item: ({ instance, processedItem }) => [
        'p-megamenu-item',
        {
            'p-megamenu-item-active': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    itemContent: 'p-megamenu-item-content',
    itemLink: 'p-megamenu-item-link',
    itemIcon: 'p-megamenu-item-icon',
    itemLabel: 'p-megamenu-item-label',
    submenuIcon: 'p-megamenu-submenu-icon',
    panel: 'p-megamenu-panel',
    grid: 'p-megamenu-grid',
    column: ({ instance, processedItem }) => {
        let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
        let columnClass;

        if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';
        else {
            switch (length) {
                case 2:
                    columnClass = 'p-megamenu-col-6';
                    break;

                case 3:
                    columnClass = 'p-megamenu-col-4';
                    break;

                case 4:
                    columnClass = 'p-megamenu-col-3';
                    break;

                case 6:
                    columnClass = 'p-megamenu-col-2';
                    break;

                default:
                    columnClass = 'p-megamenu-col-12';
                    break;
            }
        }

        return columnClass;
    },
    submenu: 'p-megamenu-submenu',
    submenuItemLabel: 'p-megamenu-submenu-item-label',
    separator: 'p-megamenu-separator',
    end: 'p-megamenu-end'
};

export default BaseStyle.extend({
    name: 'megamenu',
    theme,
    classes,
    inlineStyles
});
