import BaseStyle from 'primevue/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ props }) => [
        'p-skeleton p-component',
        {
            'p-skeleton-circle': props.shape === 'circle',
            'p-skeleton-none': props.animation === 'none'
        }
    ]
};

export default BaseStyle.extend({
    name: 'skeleton',
    classes,
    inlineStyles
});
