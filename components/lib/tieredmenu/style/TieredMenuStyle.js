import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-tieredmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-tieredmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-tieredmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-tieredmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-tieredmenu .p-menuitem {
        position: relative;
    }

    .p-tieredmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-tieredmenu .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-tieredmenu-enter-from,
    .p-tieredmenu-leave-active {
        opacity: 0;
    }

    .p-tieredmenu-enter-active {
        transition: opacity 250ms;
    }
}
`;

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
};

const classes = {
    root: ({ instance, props }) => [
        'p-tieredmenu p-component',
        {
            'p-tieredmenu-overlay': props.popup,
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    start: 'p-tieredmenu-start',
    menu: 'p-tieredmenu-root-list',
    menuitem: ({ instance, processedItem }) => [
        'p-menuitem',
        {
            'p-menuitem-active p-highlight': instance.isItemActive(processedItem),
            'p-focus': instance.isItemFocused(processedItem),
            'p-disabled': instance.isItemDisabled(processedItem)
        }
    ],
    content: 'p-menuitem-content',
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    text: 'p-menuitem-text',
    submenuIcon: 'p-submenu-icon',
    submenu: 'p-submenu-list',
    separator: 'p-menuitem-separator',
    end: 'p-tieredmenu-end'
};

export default BaseStyle.extend({
    name: 'tieredmenu',
    css,
    classes,
    inlineStyles
});
