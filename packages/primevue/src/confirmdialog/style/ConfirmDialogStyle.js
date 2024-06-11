import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-confirmdialog .p-dialog-content {
    display: flex;
    align-items: center;
    gap:  ${dt('confirmdialog.content.gap')};
}

.p-confirmdialog-icon {
    color: ${dt('confirmdialog.icon.color')};
    font-size: ${dt('confirmdialog.icon.size')};
    width: ${dt('confirmdialog.icon.size')};
    height: ${dt('confirmdialog.icon.size')};
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
