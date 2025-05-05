import { style } from '@primeuix/styles/skeleton';
import BaseStyle from '@primevue/core/base/style';

const inlineStyles = {
    root: { position: 'relative' }
};

const classes = {
    root: ({ props }) => [
        'p-skeleton p-component',
        {
            'p-skeleton-circle': props.shape === 'circle',
            'p-skeleton-animation-none': props.animation === 'none'
        }
    ]
};

export default BaseStyle.extend({
    name: 'skeleton',
    style,
    classes,
    inlineStyles
});
