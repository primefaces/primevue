import { isEmpty, isNotEmpty } from '@primeuix/utils/object';
import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-badge {
    display: inline-flex;
    border-radius: ${dt('badge.border.radius')};
    align-items: center;
    justify-content: center;
    padding: ${dt('badge.padding')};
    background: ${dt('badge.primary.background')};
    color: ${dt('badge.primary.color')};
    font-size: ${dt('badge.font.size')};
    font-weight: ${dt('badge.font.weight')};
    min-width: ${dt('badge.min.width')};
    height: ${dt('badge.height')};
}

.p-badge-dot {
    width: ${dt('badge.dot.size')};
    min-width: ${dt('badge.dot.size')};
    height: ${dt('badge.dot.size')};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${dt('badge.secondary.background')};
    color: ${dt('badge.secondary.color')};
}

.p-badge-success {
    background: ${dt('badge.success.background')};
    color: ${dt('badge.success.color')};
}

.p-badge-info {
    background: ${dt('badge.info.background')};
    color: ${dt('badge.info.color')};
}

.p-badge-warn {
    background: ${dt('badge.warn.background')};
    color: ${dt('badge.warn.color')};
}

.p-badge-danger {
    background: ${dt('badge.danger.background')};
    color: ${dt('badge.danger.color')};
}

.p-badge-contrast {
    background: ${dt('badge.contrast.background')};
    color: ${dt('badge.contrast.color')};
}

.p-badge-sm {
    font-size: ${dt('badge.sm.font.size')};
    min-width: ${dt('badge.sm.min.width')};
    height: ${dt('badge.sm.height')};
}

.p-badge-lg {
    font-size: ${dt('badge.lg.font.size')};
    min-width: ${dt('badge.lg.min.width')};
    height: ${dt('badge.lg.height')};
}

.p-badge-xl {
    font-size: ${dt('badge.xl.font.size')};
    min-width: ${dt('badge.xl.min.width')};
    height: ${dt('badge.xl.height')};
}
`;

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
    theme,
    classes
});
