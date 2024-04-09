import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-menu p-component',
        {
            'p-menu-overlay': props.popup,
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    start: 'p-menu-start',
    menu: 'p-menu-list',
    submenuHeader: 'p-menu-submenu-item',
    separator: 'p-menu-separator',
    end: 'p-menu-end',
    menuitem: ({ instance }) => [
        'p-menu-item',
        {
            'p-focus': instance.id === instance.focusedOptionId,
            'p-disabled': instance.disabled()
        }
    ],
    content: 'p-menu-item-content',
    action: 'p-menu-item-link',
    icon: 'p-menu-item-icon',
    label: 'p-menu-item-label'
};

export default BaseStyle.extend({
    name: 'menu',
    classes
});
