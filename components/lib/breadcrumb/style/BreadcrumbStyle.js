import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-breadcrumb p-component',
    list: 'p-breadcrumb-list',
    homeItem: 'p-breadcrumb-home-item',
    separator: 'p-breadcrumb-separator',
    item: ({ instance }) => ['p-breadcrumb-item', { 'p-disabled': instance.disabled() }],
    itemLink: 'p-breadcrumb-item-link',
    icon: 'p-breadcrumb-item-icon',
    label: 'p-breadcrumb-item-label'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    classes
});
