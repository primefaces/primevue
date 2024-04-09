import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-breadcrumb p-component',
    menu: 'p-breadcrumb-list',
    home: 'p-breadcrumb-home-item',
    separator: 'p-breadcrumb-separator',
    menuitem: ({ instance }) => ['p-breadcrumb-item', { 'p-disabled': instance.disabled() }],
    action: 'p-breadcrumb-item-link',
    icon: 'p-breadcrumb-item-icon',
    label: 'p-breadcrumb-item-label'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    classes
});
