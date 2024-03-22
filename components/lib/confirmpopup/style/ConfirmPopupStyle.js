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
    rejectButton: 'p-confirm-popup-reject',
    acceptButton: 'p-confirm-popup-accept'
};

export default BaseStyle.extend({
    name: 'confirmpopup',
    classes
});
