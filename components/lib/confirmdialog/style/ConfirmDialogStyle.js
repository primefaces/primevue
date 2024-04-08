import BaseStyle from 'primevue/base/style';

const classes = {
    root: 'p-confirmdialog',
    icon: 'p-confirmdialog-icon',
    message: 'p-confirmdialog-message',
    rejectButton: 'p-confirmdialog-reject-button',
    acceptButton: 'p-confirmdialog-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmdialog',
    classes
});
