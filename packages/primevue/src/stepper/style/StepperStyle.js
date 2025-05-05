import { style } from '@primeuix/styles/stepper';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => [
        'p-stepper p-component',
        {
            'p-readonly': props.linear
        }
    ],
    separator: 'p-stepper-separator'
};

export default BaseStyle.extend({
    name: 'stepper',
    style,
    classes
});
