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
    content: 'p-menuitem-content',
    action: 'p-dock-link',
    icon: 'p-dock-icon'
};

export default BaseStyle.extend({
    name: 'dock',
    classes
});
