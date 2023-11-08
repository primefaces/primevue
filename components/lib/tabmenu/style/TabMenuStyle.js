import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-nav {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        flex-wrap: nowrap;
    }

    .p-tabmenu-nav a {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        position: relative;
        text-decoration: none;
        text-decoration: none;
        overflow: hidden;
    }

    .p-tabmenu-nav a:focus {
        z-index: 1;
    }

    .p-tabmenu-nav .p-menuitem-text {
        line-height: 1;
    }

    .p-tabmenu-ink-bar {
        display: none;
        z-index: 1;
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
}
`;

const classes = {
    root: 'p-tabmenu p-component',
    menu: 'p-tabmenu-nav p-reset',
    menuitem: ({ instance, index, item }) => [
        'p-tabmenuitem',
        {
            'p-highlight': instance.d_activeIndex === index,
            'p-disabled': instance.disabled(item)
        }
    ],
    action: 'p-menuitem-link',
    icon: 'p-menuitem-icon',
    label: 'p-menuitem-text',
    inkbar: 'p-tabmenu-ink-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    css,
    classes
});
