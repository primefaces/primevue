import { style } from '@primeuix/styles/breadcrumb';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-breadcrumb p-component',
    list: 'p-breadcrumb-list',
    homeItem: 'p-breadcrumb-home-item',
    separator: 'p-breadcrumb-separator',
    separatorIcon: 'p-breadcrumb-separator-icon',
    item: ({ instance }) => ['p-breadcrumb-item', { 'p-disabled': instance.disabled() }],
    itemLink: 'p-breadcrumb-item-link',
    itemIcon: 'p-breadcrumb-item-icon',
    itemLabel: 'p-breadcrumb-item-label'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    style,
    classes
});
