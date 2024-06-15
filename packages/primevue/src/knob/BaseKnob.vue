<script>
import BaseComponent from '@primevue/core/basecomponent';
import { $dt } from '@primeuix/styled';
import KnobStyle from 'primevue/knob/style';

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
            default: () => {
                return $dt('knob.value.background').variable;
            }
        },
        rangeColor: {
            type: String,
            default: () => {
                return $dt('knob.range.background').variable;
            }
        },
        textColor: {
            type: String,
            default: () => {
                return $dt('knob.text.color').variable;
            }
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
            type: [String, Function],
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
            $pcKnob: this,
            $parentInstance: this
        };
    }
};
</script>
