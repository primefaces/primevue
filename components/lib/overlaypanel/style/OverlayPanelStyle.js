import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-popover p-component',
        {
            'p-ripple-disabled': instance.$primevue.config.ripple === false
        }
    ],
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'overlaypanel',
    classes
});
