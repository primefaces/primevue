import { style } from '@primeuix/styles/popover';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-popover p-component',
    content: 'p-popover-content'
};

export default BaseStyle.extend({
    name: 'popover',
    style,
    classes
});
