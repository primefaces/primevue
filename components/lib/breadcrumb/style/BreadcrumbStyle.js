import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-breadcrumb {
        overflow-x: auto;
    }

    .p-breadcrumb .p-breadcrumb-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-wrap: nowrap;
    }

    .p-breadcrumb .p-menuitem-text {
        line-height: 1;
    }

    .p-breadcrumb .p-menuitem-link {
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    .p-breadcrumb .p-menuitem-separator {
        display: flex;
        align-items: center;
    }

    .p-breadcrumb::-webkit-scrollbar {
        display: none;
    }
}
`;

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
    css,
    classes
});
