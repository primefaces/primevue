<script>
import BaseComponent from 'primevue/basecomponent';
import { useStyle } from 'primevue/usestyle';

const styles = `
@keyframes dash-frame {
    100% {
        stroke-dashoffset: 0;
    }
}
.p-knob-range {
    fill: none;
    transition: stroke 0.1s ease-in;
}
.p-knob-value {
    animation-name: dash-frame;
    animation-fill-mode: forwards;
    fill: none;
}
.p-knob-text {
    font-size: 1.3rem;
    text-align: center;
}
`;

const classes = {
    root: ({ props }) => ['p-knob p-component', { 'p-disabled': props.disabled }],
    range: 'p-knob-range',
    value: 'p-knob-value',
    label: 'p-knob-text'
};

const { load: loadStyle } = useStyle(styles, { name: 'knob', manual: true });

export default {
    name: 'BaseKnob',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        size: {
            type: Number,
            default: 100
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        valueColor: {
            type: String,
            default: 'var(--primary-color, Black)'
        },
        rangeColor: {
            type: String,
            default: 'var(--surface-border, LightGray)'
        },
        textColor: {
            type: String,
            default: 'var(--text-color-secondary, Black)'
        },
        strokeWidth: {
            type: Number,
            default: 14
        },
        showValue: {
            type: Boolean,
            default: true
        },
        valueTemplate: {
            type: String,
            default: '{value}'
        },
        tabindex: {
            type: Number,
            default: 0
        },
        'aria-labelledby': {
            type: String,
            default: null
        },
        'aria-label': {
            type: String,
            default: null
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
