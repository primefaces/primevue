import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        {
            'p-input-icon-right': props.iconPosition === 'right',
            'p-input-icon-left': props.iconPosition === 'left'
        }
    ]
};

export default BaseStyle.extend({
    name: 'iconfield',
    classes
});
