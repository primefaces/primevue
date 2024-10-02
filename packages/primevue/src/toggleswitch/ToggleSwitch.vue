<template>
    <div :class="cx('root')" :style="sx('root')" v-bind="getPTOptions('root')" :data-p-checked="checked" :data-p-disabled="disabled">
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
        <span :class="cx('slider')" v-bind="getPTOptions('slider')">
            <span :class="cx('handle')" v-bind="getPTOptions('handle')">
                <slot name="icon" :checked="checked">
                    <CheckIcon v-if="checked" :class="cx('icon')" v-bind="getPTOptions('icon')" />
                    <TimesIcon v-else :class="cx('icon')" v-bind="getPTOptions('icon')" />
                </slot>
            </span>
        </span>
    </div>
</template>

<script>
import BaseToggleSwitch from './BaseToggleSwitch.vue';
import TimesIcon from '@primevue/icons/times';
import CheckIcon from '@primevue/icons/check';

export default {
    name: 'ToggleSwitch',
    extends: BaseToggleSwitch,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
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

                this.$emit('update:modelValue', newValue);
                this.$emit('change', event);
            }
        },
        onFocus(event) {
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.$emit('blur', event);
        }
    },
    computed: {
        checked() {
            return this.modelValue === this.trueValue;
        }
    },
    components: {
        CheckIcon,
        TimesIcon
    }
};
</script>
