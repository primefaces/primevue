<script>
import BaseComponent from '@primevue/core/basecomponent';
import InputNumberStyle from 'primevue/inputnumber/style';

export default {
    name: 'BaseInputNumber',
    extends: BaseComponent,
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        format: {
            type: Boolean,
            default: true
        },
        showButtons: {
            type: Boolean,
            default: false
        },
        buttonLayout: {
            type: String,
            default: 'stacked'
        },
        incrementButtonClass: {
            type: String,
            default: null
        },
        decrementButtonClass: {
            type: String,
            default: null
        },
        incrementButtonIcon: {
            type: String,
            default: undefined
        },
        incrementIcon: {
            type: String,
            default: undefined
        },
        decrementButtonIcon: {
            type: String,
            default: undefined
        },
        decrementIcon: {
            type: String,
            default: undefined
        },
        locale: {
            type: String,
            default: undefined
        },
        localeMatcher: {
            type: String,
            default: undefined
        },
        mode: {
            type: String,
            default: 'decimal'
        },
        prefix: {
            type: String,
            default: null
        },
        suffix: {
            type: String,
            default: null
        },
        currency: {
            type: String,
            default: undefined
        },
        currencyDisplay: {
            type: String,
            default: undefined
        },
        useGrouping: {
            type: Boolean,
            default: true
        },
        minFractionDigits: {
            type: Number,
            default: undefined
        },
        maxFractionDigits: {
            type: Number,
            default: undefined
        },
        roundingMode: {
            type: String,
            default: 'halfExpand',
            validator(value) {
                return ['ceil', 'floor', 'expand', 'trunc', 'halfCeil', 'halfFloor', 'halfExpand', 'halfTrunc', 'halfEven'].includes(value);
            }
        },
        min: {
            type: Number,
            default: null
        },
        max: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        },
        allowEmpty: {
            type: Boolean,
            default: true
        },
        highlightOnFocus: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        variant: {
            type: String,
            default: null
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: null
        },
        inputId: {
            type: String,
            default: null
        },
        inputClass: {
            type: [String, Object],
            default: null
        },
        inputStyle: {
            type: Object,
            default: null
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
    style: InputNumberStyle,
    provide() {
        return {
            $pcInputNumber: this,
            $parentInstance: this
        };
    }
};
</script>
