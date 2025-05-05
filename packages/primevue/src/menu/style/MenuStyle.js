import { style } from '@primeuix/styles/menu';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-menu p-component',
        {
            'p-menu-overlay': props.popup
        }
    ],
    start: 'p-menu-start',
    list: 'p-menu-list',
    submenuLabel: 'p-menu-submenu-label',
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
    itemLabel: 'p-menu-item-label'
};

export default BaseStyle.extend({
    name: 'menu',
    style,
    classes
});
