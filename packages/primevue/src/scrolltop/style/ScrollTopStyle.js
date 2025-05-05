import { style } from '@primeuix/styles/scrolltop';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => ['p-scrolltop', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    style,
    classes
});
