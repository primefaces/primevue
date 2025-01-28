import { style } from '@primeuix/styles/confirmpopup';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-confirmpopup p-component',
    content: 'p-confirmpopup-content',
    icon: 'p-confirmpopup-icon',
    message: 'p-confirmpopup-message',
    footer: 'p-confirmpopup-footer',
    pcRejectButton: 'p-confirmpopup-reject-button',
    pcAcceptButton: 'p-confirmpopup-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    style,
    classes
});
