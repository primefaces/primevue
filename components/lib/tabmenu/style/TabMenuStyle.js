import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-tabmenu p-component',
    tablist: 'p-tabmenu-tablist',
    item: ({ instance, index, item }) => [
        'p-tabmenu-item',
        {
            'p-tabmenu-item-active': instance.d_activeIndex === index,
            'p-disabled': instance.disabled(item)
        }
    ],
    itemLink: 'p-tabmenu-item-link',
    itemIcon: 'p-tabmenu-item-icon',
    itemLabel: 'p-tabmenu-item-label',
    inkbar: 'p-tabmenu-ink-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    classes
});
