import { style } from '@primeuix/styles/progressspinner';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-progressspinner',
    spin: 'p-progressspinner-spin',
    circle: 'p-progressspinner-circle'
};

export default BaseStyle.extend({
    name: 'progressspinner',
    style,
    classes
});
