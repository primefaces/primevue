import { style } from '@primeuix/styles/dock';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-dock p-component',
        `p-dock-${props.position}`,
        {
            'p-dock-mobile': instance.queryMatches
        }
    ],
    listContainer: 'p-dock-list-container',
    list: 'p-dock-list',
    item: ({ instance, processedItem, id }) => [
        'p-dock-item',
        {
            'p-focus': instance.isItemActive(id),
            'p-disabled': instance.disabled(processedItem)
        }
    ],
    itemContent: 'p-dock-item-content',
    itemLink: 'p-dock-item-link',
    itemIcon: 'p-dock-item-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    style,
    classes
});
