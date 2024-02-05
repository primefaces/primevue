import BaseStyle from 'primevue/base/style';

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
    classes
});
