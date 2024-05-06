import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.p-confirmdialog-icon {
    font-size: 2rem;
}
`;

const classes = {
    root: 'p-confirmdialog',
    icon: 'p-confirmdialog-icon',
    message: 'p-confirmdialog-message',
    pcRejectButton: 'p-confirmdialog-reject-button',
    pcAcceptButton: 'p-confirmdialog-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmdialog',
    theme,
    classes
});
