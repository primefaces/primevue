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
        },
        $pcFormField: {
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
        defaultValue(newValue) {
            this.d_value = newValue;
        },
        $formName: {
            immediate: true,
            handler(newValue) {
                this.formField = this.$pcForm?.register?.(newValue, this.$formControl) || {};
            }
        },
        $formControl: {
            immediate: true,
            handler(newValue) {
                this.formField = this.$pcForm?.register?.(this.$formName, newValue) || {};
            }
        },
        $formDefaultValue: {
            immediate: true,
            handler(newValue) {
                this.d_value !== newValue && (this.d_value = newValue);
            }
        },
        $formValue: {
            immediate: false,
            handler(newValue) {
                if (this.$pcForm?.getFieldState(this.$formName) && newValue !== this.d_value) {
                    this.d_value = newValue;
                }
            }
        }
    },
    formField: {},
    methods: {
        writeValue(value, event) {
            if (this.controlled) {
                this.d_value = value;
                this.$emit('update:modelValue', value);
            }

            this.$emit('value-change', value);

            this.formField.onChange?.({ originalEvent: event, value });
        },
        // @todo move to @primeuix/utils
        findNonEmpty(...values) {
            return values.find(isNotEmpty);
        }
    },
    computed: {
        $filled() {
            return isNotEmpty(this.d_value);
        },
        $invalid() {
            return !this.$formNovalidate && this.findNonEmpty(this.invalid, this.$pcFormField?.$field?.invalid, this.$pcForm?.getFieldState(this.$formName)?.invalid);
        },
        $formName() {
            return !this.$formNovalidate ? this.name || this.$formControl?.name : undefined;
        },
        $formControl() {
            return this.formControl || this.$pcFormField?.formControl;
        },
        $formNovalidate() {
            return this.$formControl?.novalidate;
        },
        $formDefaultValue() {
            return this.findNonEmpty(this.d_value, this.$pcFormField?.initialValue, this.$pcForm?.initialValues?.[this.$formName]);
        },
        $formValue() {
            return this.findNonEmpty(this.$pcFormField?.$field?.value, this.$pcForm?.getFieldState(this.$formName)?.value);
        },
        controlled() {
            return this.$inProps.hasOwnProperty('modelValue') || (!this.$inProps.hasOwnProperty('modelValue') && !this.$inProps.hasOwnProperty('defaultValue'));
        },
        // @deprecated use $filled instead
        filled() {
            return this.$filled;
        }
    }
};
</script>
