import { style } from '@primeuix/styles/tabmenu';
import BaseStyle from '@primevue/core/base/style';

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
    activeBar: 'p-tabmenu-active-bar'
};

export default BaseStyle.extend({
    name: 'tabmenu',
    style,
    classes
});
