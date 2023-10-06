import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-confirm-dialog',
    icon: ({ instance }) => ['p-confirm-dialog-icon', instance.confirmation ? instance.confirmation.icon : null],
    message: 'p-confirm-dialog-message',
    rejectButton: ({ instance }) => ['p-confirm-dialog-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'p-button-text' : null],
    acceptButton: 'p-confirm-dialog-accept'
};

export default BaseStyle.extend({
    name: 'confirmdialog',
    classes
});
