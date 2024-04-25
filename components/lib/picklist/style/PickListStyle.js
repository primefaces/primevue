import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-picklist p-component',
    sourceControls: 'p-picklist-controls p-picklist-source-controls',
    sourceWrapper: 'p-picklist-list-container p-picklist-source-list-container',
    buttons: 'p-picklist-controls p-picklist-transfer-controls',
    targetWrapper: 'p-picklist-list-container p-picklist-target-list-container',
    targetControls: 'p-picklist-controls p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    classes
});
