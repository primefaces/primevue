import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-confirmpopup p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-confirmpopup-content',
    icon: 'p-confirmpopup-icon',
    message: 'p-confirmpopup-message',
    footer: 'p-confirmpopup-footer',
    rejectButton: 'p-confirmpopup-reject-button',
    acceptButton: 'p-confirmpopup-accept-button'
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    classes
});
