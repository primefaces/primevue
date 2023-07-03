<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    root: ({ instance, props }) => [
        'p-button p-component',
        {
            'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
            'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
            'p-disabled': instance.$attrs.disabled || instance.$attrs.disabled === '' || props.loading,
            'p-button-loading': props.loading,
            'p-button-loading-label-only': props.loading && !instance.hasIcon && props.label,
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
    loadingIcon: 'p-button-loading-icon pi-spin',
    icon: ({ props }) => [
        'p-button-icon',
        {
            'p-button-icon-left': props.iconPos === 'left' && props.label,
            'p-button-icon-right': props.iconPos === 'right' && props.label,
            'p-button-icon-top': props.iconPos === 'top' && props.label,
            'p-button-icon-bottom': props.iconPos === 'bottom' && props.label
        }
    ],
    label: 'p-button-label'
};

export default {
    name: 'BaseButton',
    extends: BaseComponent,
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        iconPos: {
            type: String,
            default: 'left'
        },
        iconClass: {
            type: String,
            default: null
        },
        badge: {
            type: String,
            default: null
        },
        badgeClass: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        link: {
            type: Boolean,
            default: false
        },
        severity: {
            type: String,
            default: null
        },
        raised: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: null
        },
        plain: {
            type: Boolean,
            default: false
        }
    },
    css: {
        classes
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
