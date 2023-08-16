<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-splitbutton {
    display: inline-flex;
    position: relative;
}

.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}
`;

const classes = {
    root: ({ props }) => [
        'p-splitbutton p-component',
        {
            [`p-button-${props.severity}`]: props.severity,
            'p-button-raised': props.raised,
            'p-button-rounded': props.rounded,
            'p-button-text': props.text,
            'p-button-outlined': props.outlined,
            'p-button-sm': props.size === 'small',
            'p-button-lg': props.size === 'large'
        }
    ],
    button: 'p-splitbutton-defaultbutton',
    menuButton: 'p-splitbutton-menubutton'
};

const { load: loadStyle } = useStyle(styles, { name: 'splitbutton', manual: true });

export default {
    name: 'BaseSplitButton',
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
        model: {
            type: Array,
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        class: {
            type: null,
            default: null
        },
        style: {
            type: null,
            default: null
        },
        buttonProps: {
            type: null,
            default: null
        },
        menuButtonProps: {
            type: null,
            default: null
        },
        menuButtonIcon: {
            type: String,
            default: undefined
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
