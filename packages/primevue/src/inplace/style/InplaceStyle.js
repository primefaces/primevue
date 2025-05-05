import { style } from '@primeuix/styles/inplace';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: 'p-inplace p-component',
    display: ({ props }) => ['p-inplace-display', { 'p-disabled': props.disabled }],
    content: 'p-inplace-content'
};

export default BaseStyle.extend({
    name: 'inplace',
    style,
    classes
});
