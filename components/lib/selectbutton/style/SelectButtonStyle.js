import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-selectbutton p-component',
        {
            'p-invalid': props.invalid
        }
    ]
};

export default BaseStyle.extend({
    name: 'selectbutton',
    classes
});
