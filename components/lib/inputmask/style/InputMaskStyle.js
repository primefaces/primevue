import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-inputmask p-inputtext p-component',
        {
            'p-filled': instance.filled
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputmask',
    classes
});
