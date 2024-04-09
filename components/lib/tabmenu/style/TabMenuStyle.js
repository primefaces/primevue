import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-tabmenu p-component',
    menu: 'p-tabmenu-tablist',
    menuitem: ({ instance, index, item }) => [
        'p-tabmenu-item',
        {
            'p-tabmenu-item-active': instance.d_activeIndex === index,
            'p-disabled': instance.disabled(item)
        }
    ],
    action: 'p-tabmenu-item-link',
    icon: 'p-tabmenu-item-icon',
    label: 'p-tabmenu-item-label',
    inkbar: 'p-tabmenu-ink-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    classes
});
