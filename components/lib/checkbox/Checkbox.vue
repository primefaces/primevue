<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-highlight="checked" :data-p-disabled="disabled">
        <input
            :id="inputId"
            type="checkbox"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="value"
            :name="name"
            :checked="checked"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            :required="required"
            :aria-labelledby="ariaLabelledby"
            :aria-label="ariaLabel"
            :aria-invalid="invalid || undefined"
            @focus="onFocus"
            @blur="onBlur"
            @change="onChange"
            v-bind="getPTOptions('input')"
        />
        <div :class="cx('box')" v-bind="getPTOptions('box')">
            <slot name="icon" :checked="checked" :class="cx('icon')">
                <CheckIcon v-if="checked" :class="cx('icon')" v-bind="getPTOptions('icon')" />
            </slot>
        </div>
    </div>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import { ObjectUtils } from 'primevue/utils';
import BaseCheckbox from './BaseCheckbox.vue';

export default {
    name: 'Checkbox',
    extends: BaseCheckbox,
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
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                } else {
                    if (this.checked) newModelValue = this.modelValue.filter((val) => !ObjectUtils.equals(val, this.value));
                    else newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('update:modelValue', newModelValue);
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
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        }
    },
    components: {
        CheckIcon
    }
};
</script>
