import { style } from '@primeuix/styles/tooltip';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-tooltip p-component',
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

export default BaseStyle.extend({
    name: 'tooltip-directive',
    style,
    classes
});
