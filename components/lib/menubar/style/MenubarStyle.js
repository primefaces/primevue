import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-menubar {
        display: flex;
        align-items: center;
    }

    .p-menubar ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menubar .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menubar .p-menuitem-text {
        line-height: 1;
    }

    .p-menubar .p-menuitem {
        position: relative;
    }

    .p-menubar-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }

    .p-menubar-root-list > li ul {
        display: none;
        z-index: 1;
    }

    .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
        display: block;
    }

    .p-menubar .p-submenu-list {
        display: none;
        position: absolute;
        z-index: 1;
    }

    .p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar .p-submenu-list .p-menuitem .p-menuitem-content .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }

    .p-menubar .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-button {
        display: none;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

    .p-menubar.p-menubar-mobile {
        position: relative; 
    }

    .p-menubar.p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar.p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
    }

    .p-menubar.p-menubar-mobile .p-submenu-list {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
    }

    .p-menubar.p-menubar-mobile .p-menubar-root-list .p-menuitem {
        width: 100%;
        position: static;
    }

    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
    }
}
`;

const inlineStyles = {
    submenu: ({ instance, processedItem }) => ({ display: instance.isItemActive(processedItem) ? 'block' : 'none' })
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
    menu: 'p-menubar-root-list',
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
    separator: 'p-menuitem-separator',
    end: 'p-menubar-end'
};

export default BaseStyle.extend({
    name: 'menubar',
    css,
    classes,
    inlineStyles
});
