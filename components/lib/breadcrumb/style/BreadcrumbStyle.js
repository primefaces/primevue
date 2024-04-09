import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-breadcrumb p-component',
    menu: 'p-breadcrumb-list',
    home: 'p-breadcrumb-home-item',
    separator: 'p-breadcrumb-separator',
    menuitem: ({ instance }) => ['p-breadcrumb-item', { 'p-disabled': instance.disabled() }],
    action: 'p-breadcrumb-action',
    icon: 'p-breadcrumb-icon',
    label: 'p-breadcrumb-label'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    classes
});
