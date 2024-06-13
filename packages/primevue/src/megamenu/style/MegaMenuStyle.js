import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${dt('megamenu.background')};
    border: 1px solid ${dt('megamenu.border.color')};
    border-radius: ${dt('megamenu.border.radius')};
    color: ${dt('megamenu.color')};
    gap: ${dt('megamenu.gap')};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${dt('megamenu.gap')};
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumegamenubar-item-content {
    border-radius: ${dt('megamenu.base.item.border.radius')};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${dt('megamenu.base.item.padding')};
}

.p-megamenu-item-content {
    transition: background ${dt('megamenu.transition.duration')}, color ${dt('megamenu.transition.duration')};
    border-radius: ${dt('megamenu.item.border.radius')};
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
    padding: ${dt('megamenu.item.padding')};
    gap: ${dt('megamenu.item.gap')};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${dt('megamenu.item.icon.color')};
}

.p-megamenu-submenu-icon {
    color: ${dt('megamenu.submenu.icon.color')};
    font-size: ${dt('megamenu.submenu.icon.size')};
    width: ${dt('megamenu.submenu.icon.size')};
    height: ${dt('megamenu.submenu.icon.size')};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${dt('megamenu.item.icon.focus.color')};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt('megamenu.submenu.icon.focus.color')};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${dt('megamenu.item.focus.color')};
    background: ${dt('megamenu.item.focus.background')};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${dt('megamenu.item.icon.focus.color')};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${dt('megamenu.submenu.icon.focus.color')};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${dt('megamenu.item.active.color')};
    background: ${dt('megamenu.item.active.background')};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${dt('megamenu.item.icon.active.color')};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt('megamenu.submenu.icon.active.color')};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${dt('megamenu.overlay.padding')};
    background: ${dt('megamenu.overlay.background')};
    color: ${dt('megamenu.overlay.color')};
    border: 1px solid ${dt('megamenu.overlay.border.color')};
    border-radius: ${dt('megamenu.overlay.border.radius')};
    box-shadow: ${dt('megamenu.overlay.shadow')};
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${dt('megamenu.submenu.padding')};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${dt('megamenu.submenu.gap')}
}

.p-megamenu-submenu-label {
    padding: ${dt('megamenu.submenu.label.padding')};
    color: ${dt('megamenu.submenu.label.color')};
    font-weight: ${dt('megamenu.submenu.label.font.weight')};
    background: ${dt('megamenu.submenu.label.background')};
}

.p-megamenu-separator {
    border-top: 1px solid ${dt('megamenu.separator.border.color')};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${dt('megamenu.horizontal.orientation.padding')};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${dt('megamenu.horizontal.orientation.gap')};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${dt('megamenu.vertical.orientation.padding')};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${dt('megamenu.vertical.orientation.gap')};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
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
    padding: ${dt('megamenu.overlay.gap')};
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
    width: ${dt('megamenu.mobile.button.size')};
    height: ${dt('megamenu.mobile.button.size')};
    position: relative;
    color: ${dt('megamenu.mobile.button.color')};
    border: 0 none;
    background: transparent;
    border-radius: ${dt('megamenu.mobile.button.border.radius')};
    transition: background ${dt('megamenu.transition.duration')}, color ${dt('megamenu.transition.duration')}, outline-color ${dt('megamenu.transition.duration')}, ox-shadow ${dt('megamenu.transition.duration')};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${dt('megamenu.mobile.button.hover.color')};
    background: ${dt('megamenu.mobile.button.hover.background')};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${dt('megamenu.mobile.button.focus.ring.shadow')};
    outline: ${dt('megamenu.mobile.button.focus.ring.width')} ${dt('megamenu.mobile.button.focus.ring.style')} ${dt('megamenu.mobile.button.focus.ring.color')};
    outline-offset: ${dt('megamenu.mobile.button.focus.ring.offset')};
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
    padding: ${dt('megamenu.submenu.padding')};
    gap: ${dt('megamenu.submenu.gap')};
    background: ${dt('megamenu.overlay.background')};
    border: 1px solid ${dt('megamenu.overlay.border.color')};
    box-shadow: ${dt('menubar.overlay.shadow')};
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
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
    submenuLabel: ({ instance, processedItem }) => [
        'p-megamenu-submenu-label',
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
    overlay: 'p-megamenu-overlay',
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
    separator: 'p-megamenu-separator',
    end: 'p-megamenu-end'
};

export default BaseStyle.extend({
    name: 'megamenu',
    theme,
    classes,
    inlineStyles
});
