import { style } from '@primeuix/styles/badge';
import { isEmpty, isNotEmpty } from '@primeuix/utils/object';
import BaseStyle from '@primevue/core/base/style';

const classes = {
    root: ({ props, instance }) => [
        'p-badge p-component',
        {
            'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
            'p-badge-dot': isEmpty(props.value) && !instance.$slots.default,
            'p-badge-sm': props.size === 'small',
            'p-badge-lg': props.size === 'large',
            'p-badge-xl': props.size === 'xlarge',
            'p-badge-info': props.severity === 'info',
            'p-badge-success': props.severity === 'success',
            'p-badge-warn': props.severity === 'warn',
            'p-badge-danger': props.severity === 'danger',
            'p-badge-secondary': props.severity === 'secondary',
            'p-badge-contrast': props.severity === 'contrast'
        }
    ]
};

export default BaseStyle.extend({
    name: 'badge',
    style,
    classes
});
