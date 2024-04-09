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
    menuitem: ({ instance, processedItem, id }) => [
        'p-dock-item',
        {
            'p-focus': instance.isItemActive(id),
            'p-disabled': instance.disabled(processedItem)
        }
    ],
    content: 'p-dock-item-content',
    action: 'p-dock-item-link',
    icon: 'p-dock-item-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    classes
});
