import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-inputmask',
        {
            'p-filled': instance.filled
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});
