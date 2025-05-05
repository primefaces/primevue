<script>
import BaseComponent from '@primevue/core/basecomponent';
import ToastStyle from 'primevue/toast/style';

export default {
    name: 'BaseToast',
    extends: BaseComponent,
    props: {
        group: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: 'top-right'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        breakpoints: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: undefined
        },
        infoIcon: {
            type: String,
            default: undefined
        },
        warnIcon: {
            type: String,
            default: undefined
        },
        errorIcon: {
            type: String,
            default: undefined
        },
        successIcon: {
            type: String,
            default: undefined
        },
        closeButtonProps: {
            type: null,
            default: null
        },
        onMouseEnter: {
            type: Function,
            default: undefined
        },
        onMouseLeave: {
            type: Function,
            default: undefined
        },
        onClick: {
            type: Function,
            default: undefined
        }
    },
    style: ToastStyle,
    provide() {
        return {
            $pcToast: this,
            $parentInstance: this
        };
    }
};
</script>
