import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-breadcrumb p-component',
    menu: 'p-breadcrumb-list',
    home: 'p-breadcrumb-home',
    separator: 'p-menuitem-separator',
    menuitem: ({ instance }) => ['p-menuitem', { 'p-disabled': instance.disabled() }],
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text'
};

export default BaseStyle.extend({
    name: 'breadcrumb',
    classes
});
