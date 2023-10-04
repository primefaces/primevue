import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-inputtext p-component',
        {
            'p-filled': instance.filled,
            'p-inputtext-sm': props.size === 'small',
            'p-inputtext-lg': props.size === 'large'
        }
    ]
};

export default BaseStyle.extend({
    name: 'inputtext',
    classes
});
