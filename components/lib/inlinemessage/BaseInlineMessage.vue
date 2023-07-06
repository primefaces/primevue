<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-inline-message {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
}

.p-inline-message-icon-only .p-inline-message-text {
    visibility: hidden;
    width: 0;
}

.p-fluid .p-inline-message {
    display: flex;
}
`;

const classes = {
    root: ({ props, instance }) => ['p-inline-message p-component p-inline-message-' + props.severity, { 'p-inline-message-icon-only': !instance.$slots.default }],
    icon: ({ props }) => ['p-inline-message-icon', props.icon],
    text: 'p-inline-message-text'
};

const { load: loadStyle } = useStyle(styles, { name: 'inlinemessage', manual: true });

export default {
    name: 'BaseInlineMessage',
    extends: BaseComponent,
    props: {
        severity: {
            type: String,
            default: 'error'
        },
        icon: {
            type: String,
            default: undefined
        }
    },
    css: {
        classes,
        loadStyle
    },
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
