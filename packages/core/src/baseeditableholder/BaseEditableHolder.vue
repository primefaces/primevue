<script>
import { isNotEmpty } from '@primeuix/utils';
import BaseComponent from '@primevue/core/basecomponent';

export default {
    name: 'BaseEditableHolder',
    extends: BaseComponent,
    emits: ['update:modelValue', 'value-change'],
    props: {
        modelValue: {
            type: null,
            default: undefined
        },
        defaultValue: {
            type: null,
            default: undefined
        },
        name: {
            type: String,
            default: undefined
        },
        invalid: {
            type: Boolean,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        },
        formControl: {
            type: Object,
            default: undefined
        }
    },
    inject: {
        $parentInstance: {
            default: undefined
        },
        $pcForm: {
            default: undefined
        }
    },
    data() {
        return {
            d_value: this.defaultValue || this.modelValue
        };
    },
    watch: {
        modelValue(newValue) {
            this.d_value = newValue;
        },
        formControl: {
            immediate: true,
            handler(newValue) {
                this.formField = this.$pcForm?.register?.(this.$formName, newValue) || {};
            }
        },
        $formName: {
            immediate: true,
            handler(newValue) {
                this.formField = this.$pcForm?.register?.(newValue, this.formControl) || {};
            }
        }
    },
    formField: {},
    methods: {
        updateValue(value, event) {
            // uncontrolled
            this.d_value = value;
            this.$emit('value-change', value);

            // controlled
            this.$emit('update:modelValue', value);

            this.formField.onChange?.({ originalEvent: event, value });
        }
    },
    computed: {
        $filled() {
            return isNotEmpty(this.d_value);
        },
        $invalid() {
            return this.invalid ?? this.$pcForm?.states?.[this.$formName]?.invalid;
        },
        $formName() {
            return this.formControl?.name || this.name;
        },
        // @deprecated use $filled instead
        filled() {
            return this.$filled;
        }
    }
};
</script>
