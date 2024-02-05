import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-dock p-component',
        `p-dock-${props.position}`,
        {
            'p-dock-mobile': instance.queryMatches
        }
    ],
    container: 'p-dock-list-container',
    menu: 'p-dock-list',
    menuitem: ({ instance, processedItem, index, id }) => [
        'p-dock-item',
        {
            'p-focus': instance.isItemActive(id),
            'p-disabled': instance.disabled(processedItem),
            'p-dock-item-second-prev': instance.currentIndex - 2 === index,
            'p-dock-item-prev': instance.currentIndex - 1 === index,
            'p-dock-item-current': instance.currentIndex === index,
            'p-dock-item-next': instance.currentIndex + 1 === index,
            'p-dock-item-second-next': instance.currentIndex + 2 === index
        }
    ],
    content: 'p-menuitem-content',
    action: 'p-dock-link',
    icon: 'p-dock-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    classes
});
