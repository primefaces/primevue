import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    .p-menu .p-menuitem-text {
        line-height: 1;
    }
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-menu p-component',
        {
            'p-menu-overlay': props.popup,
            'p-input-filled': instance.$primevue.config.inputStyle === 'filled',
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
    css,
    classes
});
