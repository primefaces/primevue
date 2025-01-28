import { style } from '@primeuix/styles/accordion';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-accordion p-component'
};

export default BaseStyle.extend({
    name: 'accordion',
    style,
    classes
});
