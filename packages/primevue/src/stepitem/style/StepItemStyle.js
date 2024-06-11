import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-stepitem',
        {
            'p-stepitem-active': instance.isActive
        }
    ]
};

export default BaseStyle.extend({
    name: 'stepitem',
    classes
});
