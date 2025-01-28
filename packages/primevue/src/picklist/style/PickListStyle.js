import { style } from '@primeuix/styles/picklist';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-picklist p-component',
    sourceControls: 'p-picklist-controls p-picklist-source-controls',
    sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
    transferControls: 'p-picklist-controls p-picklist-transfer-controls',
    targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
    targetControls: 'p-picklist-controls p-picklist-target-controls'
};

export default BaseStyle.extend({
    name: 'picklist',
    style,
    classes
});
