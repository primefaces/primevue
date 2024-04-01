<script>
import BaseComponent from 'primevue/basecomponent';
import KnobStyle from 'primevue/knob/style';
import { $dt } from 'primevue/themes';

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
            default: $dt('knob.value.background')
        },
        rangeColor: {
            type: String,
            default: $dt('knob.range.background')
        },
        textColor: {
            type: String,
            default: $dt('knob.text.color')
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
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: KnobStyle,
    provide() {
        return {
            $parentInstance: this
        };
    }
};
</script>
