<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-checked="checked" :data-p-disabled="disabled">
        <input
            :id="inputId"
            type="radio"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="value"
            :name="groupName"
            :checked="checked"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div :class="cx('box')" v-bind="getPTOptions('box')">
            <div :class="cx('icon')" v-bind="getPTOptions('icon')"></div>
        </div>
    </div>
</template>

<script>
import { equals } from '@primeuix/utils/object';
import BaseRadioButton from './BaseRadioButton.vue';

export default {
    name: 'RadioButton',
    extends: BaseRadioButton,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur'],
    inject: {
        $pcRadioButtonGroup: {
            default: undefined
        }
    },
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    checked: this.checked,
                    disabled: this.disabled
                }
            });
        },
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                const newModelValue = this.binary ? !this.checked : this.value;

                this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.writeValue(newModelValue, event) : this.writeValue(newModelValue, event);
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
            return this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.groupName : this.$formName;
        },
        checked() {
            const value = this.$pcRadioButtonGroup ? this.$pcRadioButtonGroup.d_value : this.d_value;

            return value != null && (this.binary ? !!value : equals(value, this.value));
        }
    }
};
</script>
