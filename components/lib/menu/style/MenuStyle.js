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
    list: 'p-menu-list',
    submenuItem: 'p-menu-submenu-item',
    separator: 'p-menu-separator',
    end: 'p-menu-end',
    item: ({ instance }) => [
        'p-menu-item',
        {
            'p-focus': instance.id === instance.focusedOptionId,
            'p-disabled': instance.disabled()
        }
    ],
    itemContent: 'p-menu-item-content',
    itemLink: 'p-menu-item-link',
    itemIcon: 'p-menu-item-icon',
    label: 'p-menu-item-label'
};

export default BaseStyle.extend({
    name: 'menu',
    classes
});
