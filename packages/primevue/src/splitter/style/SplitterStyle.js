import { style } from '@primeuix/styles/splitter';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props }) => ['p-splitter p-component', 'p-splitter-' + props.layout],
    gutter: 'p-splitter-gutter',
    gutterHandle: 'p-splitter-gutter-handle'
};

const inlineStyles = {
    root: ({ props }) => [{ display: 'flex', 'flex-wrap': 'nowrap' }, props.layout === 'vertical' ? { 'flex-direction': 'column' } : '']
};

export default BaseStyle.extend({
    name: 'splitter',
    style,
    classes,
    inlineStyles
});
