<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-checked="checked" :data-p-indeterminate="d_indeterminate || undefined" :data-p-disabled="disabled">
        <input
            :id="inputId"
            type="checkbox"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="value"
            :name="groupName"
            :checked="checked"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            :aria-checked="d_indeterminate ? 'mixed' : undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div :class="cx('box')" v-bind="getPTOptions('box')">
            <slot name="icon" :checked="checked" :indeterminate="d_indeterminate" :class="cx('icon')">
                <CheckIcon v-if="checked" :class="cx('icon')" v-bind="getPTOptions('icon')" />
                <MinusIcon v-else-if="d_indeterminate" :class="cx('icon')" v-bind="getPTOptions('icon')" />
            </slot>
        </div>
    </div>
</template>

<script>
import { contains, equals } from '@primeuix/utils/object';
import CheckIcon from '@primevue/icons/check';
import MinusIcon from '@primevue/icons/minus';
import BaseCheckbox from './BaseCheckbox.vue';

export default {
    name: 'Checkbox',
    extends: BaseCheckbox,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur', 'update:indeterminate'],
    inject: {
        $pcCheckboxGroup: {
            default: undefined
        }
    },
    data() {
        return {
            d_indeterminate: this.indeterminate
        };
    },
    watch: {
        indeterminate(newValue) {
            this.d_indeterminate = newValue;
        }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    checked: this.checked,
                    indeterminate: this.d_indeterminate,
                    disabled: this.disabled
                }
            });
        },
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                const value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.d_indeterminate ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
                } else {
                    if (this.checked || this.d_indeterminate) newModelValue = value.filter((val) => !equals(val, this.value));
                    else newModelValue = value ? [...value, this.value] : [this.value];
                }

                if (this.d_indeterminate) {
                    this.d_indeterminate = false;
                    this.$emit('update:indeterminate', this.d_indeterminate);
                }

                this.$pcCheckboxGroup ? this.$pcCheckboxGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
                this.$emit('change', event);
            }
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
            this.formField.onBlur?.(event);
        }
    },
    computed: {
        groupName() {
            return this.$pcCheckboxGroup ? this.$pcCheckboxGroup.groupName : this.$formName;
        },
        checked() {
            const value = this.$pcCheckboxGroup ? this.$pcCheckboxGroup.d_value : this.d_value;

            return this.d_indeterminate ? false : this.binary ? value === this.trueValue : contains(this.value, value);
        }
    },
    components: {
        CheckIcon,
        MinusIcon
    }
};
</script>
