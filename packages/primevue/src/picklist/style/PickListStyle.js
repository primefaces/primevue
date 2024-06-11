import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-picklist {
    display: flex;
    gap: ${dt('picklist.gap')};
}

.p-picklist-controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${dt('picklist.controls.gap')};
}

.p-picklist-list-container {
    flex: 1 1 50%;
}

.p-picklist .p-listbox {
    height: 100%;
}
`;

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
    theme,
    classes
});
