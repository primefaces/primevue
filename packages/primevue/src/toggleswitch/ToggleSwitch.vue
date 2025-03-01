<template>
    <div :class="cx('root')" :style="sx('root')" v-bind="getPTOptions('root')" :data-p-checked="checked" :data-p-disabled="disabled" :data-p="dataP">
        <input
            :id="inputId"
            type="checkbox"
            role="switch"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :checked="checked"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :aria-checked="checked"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div :class="cx('slider')" v-bind="getPTOptions('slider')" :data-p="dataP">
            <div :class="cx('handle')" v-bind="getPTOptions('handle')" :data-p="dataP">
                <slot name="handle" :checked="checked" />
            </div>
        </div>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import BaseToggleSwitch from './BaseToggleSwitch.vue';

export default {
    name: 'ToggleSwitch',
    extends: BaseToggleSwitch,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur'],
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
                const newValue = this.checked ? this.falseValue : this.trueValue;

                this.writeValue(newValue, event);
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
        checked() {
            return this.d_value === this.trueValue;
        },
        dataP() {
            return cn({
                checked: this.checked,
                disabled: this.disabled,
                invalid: this.$invalid
            });
        }
    }
};
</script>
