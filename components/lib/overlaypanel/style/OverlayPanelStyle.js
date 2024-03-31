import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-overlaypanel p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-overlaypanel-content',
    closeButton: 'p-overlaypanel-close p-link',
    closeIcon: 'p-overlaypanel-close-icon'
};

export default BaseStyle.extend({
    name: 'overlaypanel',
    classes
});
