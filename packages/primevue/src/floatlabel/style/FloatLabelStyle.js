import { style } from '@primeuix/styles/floatlabel';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-floatlabel',
        {
            'p-floatlabel-over': props.variant === 'over',
            'p-floatlabel-on': props.variant === 'on',
            'p-floatlabel-in': props.variant === 'in'
        }
    ]
};

export default BaseStyle.extend({
    name: 'floatlabel',
    style,
    classes
});
