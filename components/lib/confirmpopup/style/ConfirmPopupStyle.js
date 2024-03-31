import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-confirm-popup p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-confirm-popup-content',
    icon: 'p-confirm-popup-icon',
    message: 'p-confirm-popup-message',
    footer: 'p-confirm-popup-footer',
    rejectButton: ({ instance }) => ['p-confirm-popup-reject', instance.confirmation && !instance.confirmation.rejectClass ? 'p-button-sm p-button-text' : null],
    acceptButton: ({ instance }) => ['p-confirm-popup-accept', instance.confirmation && !instance.confirmation.acceptClass ? 'p-button-sm' : null]
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    classes
});
