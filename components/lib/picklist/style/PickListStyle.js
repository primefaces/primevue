import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-picklist p-component',
        {
            'p-picklist-striped': props.stripedRows
        }
    ],
    sourceControls: 'p-picklist-buttons p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
    sourceHeader: 'p-picklist-header',
    sourceList: 'p-picklist-list p-picklist-source-list',
    buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
    targetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
    targetHeader: 'p-picklist-header',
    targetList: 'p-picklist-list p-picklist-target',
    item: ({ instance, item, id, listIndex }) => [
        'p-picklist-item',
        {
            'p-highlight': instance.isSelected(item, listIndex),
            'p-focus': id === instance.focusedOptionId
        }
    ],
    targetControls: 'p-picklist-buttons p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    classes
});
