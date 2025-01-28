import { style } from '@primeuix/styles/splitbutton';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-splitbutton p-component',
        {
            'p-splitbutton-raised': props.raised,
            'p-splitbutton-rounded': props.rounded,
            'p-splitbutton-fluid': instance.hasFluid
        }
    ],
    pcButton: 'p-splitbutton-button',
    pcDropdown: 'p-splitbutton-dropdown'
};

export default BaseStyle.extend({
    name: 'splitbutton',
    style,
    classes
});
