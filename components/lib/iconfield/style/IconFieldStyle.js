import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-icon-field',
        {
            'p-icon-field-right': props.iconPosition === 'right',
            'p-icon-field-left': props.iconPosition === 'left'
        }
    ]
};

export default BaseStyle.extend({
    name: 'iconfield',
    classes
});
