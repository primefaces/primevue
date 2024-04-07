import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-button-loading': props.loading,
            'p-button-link': props.link,
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            'p-button-sm': props.size === 'small',
            'p-button-lg': props.size === 'large',
            'p-button-plain': props.plain
        }
    ],
    loadingIcon: 'p-button-loading-icon',
    icon: ({ props }) => [
        'p-button-icon',
        {
            [`p-button-icon-${props.iconPos}`]: props.label
        }
    ],
    label: 'p-button-label'
};

export default BaseStyle.extend({
    name: 'button',
    classes
});
