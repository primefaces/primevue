<script>
import BaseComponent from '@primevue/core/basecomponent';
import ButtonStyle from 'primevue/button/style';

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
        badgeSeverity: {
            type: String,
            default: 'secondary'
        },
        loading: {
            type: Boolean,
            default: false
        },
        loadingIcon: {
            type: String,
            default: undefined
        },
        as: {
            type: String,
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
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
        },
        fluid: {
            type: Boolean,
            default: null
        }
    },
    style: ButtonStyle,
    provide() {
        return {
            $pcButton: this,
            $parentInstance: this
        };
    }
};
</script>
