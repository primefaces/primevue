import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ props }) => [
        'p-splitbutton p-component',
        {
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            'p-button-sm': props.size === 'small',
            'p-button-lg': props.size === 'large'
        }
    ],
    button: 'p-splitbutton-defaultbutton',
    menuButton: 'p-splitbutton-menubutton'
};

export default BaseStyle.extend({
    name: 'splitbutton',
    classes
});
