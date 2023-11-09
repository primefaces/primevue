import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }

    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }

    .p-contextmenu .p-menuitem {
        position: relative;
    }

    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-contextmenu-enter-from,
    .p-contextmenu-leave-active {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        transition: opacity 250ms;
    }
}
`;

const classes = {
    root: ({ instance }) => [
        'p-contextmenu p-component',
        {
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    menu: 'p-contextmenu-root-list',
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
    label: 'p-menuitem-text',
    submenuIcon: 'p-submenu-icon',
    submenu: 'p-submenu-list',
    separator: 'p-menuitem-separator'
};

export default BaseStyle.extend({
    name: 'contextmenu',
    css,
    classes
});
