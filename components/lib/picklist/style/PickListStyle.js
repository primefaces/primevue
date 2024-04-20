import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-picklist p-component',
    sourceControls: 'p-picklist-controls p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-container p-picklist-source-list-container',
    sourceList: 'p-picklist-list p-picklist-source-list', //TODO: Remove
    buttons: 'p-picklist-controls p-picklist-transfer-controls',
    targetWrapper: 'p-picklist-list-container p-picklist-target-list-container',
    targetList: 'p-picklist-list p-picklist-target',  //TODO: Remove
    item: 'p-picklist-item',  //TODO: Remove
    targetControls: 'p-picklist-controls p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    classes
});
