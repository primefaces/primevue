import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance }) => [
        'p-inputmask  p-inputwrapper',
        {
            'p-inputwrapper-filled': instance.filled
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});
