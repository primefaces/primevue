import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-picklist p-component',
    sourceControls: 'p-picklist-buttons p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-wrapper p-picklist-source-wrapper',
    sourceList: 'p-picklist-list p-picklist-source-list',
    buttons: 'p-picklist-buttons p-picklist-transfer-buttons',
    targetWrapper: 'p-picklist-list-wrapper p-picklist-target-wrapper',
    targetList: 'p-picklist-list p-picklist-target',
    item: 'p-picklist-item',
    targetControls: 'p-picklist-buttons p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    classes
});
