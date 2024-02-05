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
    menu: 'p-menu-list p-reset',
    submenuHeader: 'p-submenu-header',
    separator: 'p-menuitem-separator',
    end: 'p-menu-end',
    menuitem: ({ instance }) => [
        'p-menuitem',
        {
            'p-focus': instance.id === instance.focusedOptionId,
            'p-disabled': instance.disabled()
        }
    ],
    content: 'p-menuitem-content',
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text'
};

export default BaseStyle.extend({
    name: 'menu',
    classes
});
