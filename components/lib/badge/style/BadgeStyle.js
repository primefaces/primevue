import BaseStyle from 'primevue/base/style';
import { ObjectUtils } from 'primevue/utils';

const classes = {
    root: ({ props, instance }) => [
        'p-badge p-component',
        {
            'p-badge-no-gutter': ObjectUtils.isNotEmpty(props.value) && String(props.value).length === 1,
            'p-badge-dot': ObjectUtils.isEmpty(props.value) && !instance.$slots.default,
            'p-badge-lg': props.size === 'large',
            'p-badge-xl': props.size === 'xlarge',
            'p-badge-info': props.severity === 'info',
            'p-badge-success': props.severity === 'success',
            'p-badge-warning': props.severity === 'warning',
            'p-badge-danger': props.severity === 'danger',
            'p-badge-secondary': props.severity === 'secondary',
            'p-badge-contrast': props.severity === 'contrast'
        }
    ]
};

export default BaseStyle.extend({
    name: 'badge',
    classes
});
