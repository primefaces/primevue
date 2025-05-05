import { style } from '@primeuix/styles/inlinemessage';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props, instance }) => ['p-inlinemessage p-component p-inlinemessage-' + props.severity, { 'p-inlinemessage-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inlinemessage-icon', props.icon],
    text: 'p-inlinemessage-text'
};

export default BaseStyle.extend({
    name: 'inlinemessage',
    style,
    classes
});
