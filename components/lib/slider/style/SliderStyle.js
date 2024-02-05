import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    handle: { position: 'absolute' },
    range: { position: 'absolute' }
};

const classes = {
    root: ({ props }) => [
        'p-slider p-component',
        {
            'p-disabled': props.disabled,
            'p-slider-horizontal': props.orientation === 'horizontal',
            'p-slider-vertical': props.orientation === 'vertical'
        }
    ],
    range: 'p-slider-range',
    handle: 'p-slider-handle'
};

export default BaseStyle.extend({
    name: 'slider',
    classes,
    inlineStyles
});
