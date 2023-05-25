<script>
import BaseComponent from 'primevue/basecomponent';

const classes = {
    container: ({ props }) => [
        'p-toast-message',
        props.message.styleClass,
        {
            'p-toast-message-info': props.message.severity === 'info',
            'p-toast-message-warn': props.message.severity === 'warn',
            'p-toast-message-error': props.message.severity === 'error',
            'p-toast-message-success': props.message.severity === 'success'
        }
    ],
    content: ({ props }) => 'p-toast-message-content ' + props.message.contentStyleClass || '',
    icon: ({ props }) => [
        'p-toast-message-icon',
        {
            [props.infoIcon]: props.message.severity === 'info',
            [props.warnIcon]: props.message.severity === 'warn',
            [props.errorIcon]: props.message.severity === 'error',
            [props.successIcon]: props.message.severity === 'success'
        }
    ],
    text: 'p-toast-message-text',
    summary: 'p-toast-summary',
    detail: 'p-toast-detail',
    button: 'p-toast-icon-close p-link',
    buttonIcon: ({ props }) => ['p-toast-icon-close-icon', props.closeIcon]
};

export default {
    name: 'BaseToast',
    extends: BaseComponent,
    props: {
        message: {
            type: null,
            default: null
        },
        templates: {
            type: Object,
            default: null
        },
        closeIcon: {
            type: String,
            default: null
        },
        infoIcon: {
            type: String,
            default: null
        },
        warnIcon: {
            type: String,
            default: null
        },
        errorIcon: {
            type: String,
            default: null
        },
        successIcon: {
            type: String,
            default: null
        },
        closeButtonProps: {
            type: null,
            default: null
        }
    },
    css: {
        classes
    }
};
</script>
