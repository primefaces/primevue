<template>
    <div :class="cx('root')" @click="onClick($event)" v-bind="getPTOptions('root')" data-pc-name="checkbox">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input
                ref="input"
                :id="inputId"
                type="checkbox"
                :value="value"
                :name="name"
                :checked="checked"
                :tabindex="tabindex"
                :disabled="disabled"
                :readonly="readonly"
                :required="required"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="ptm('hiddenInput')"
            />
        </div>
        <div ref="box" :class="[cx('input'), inputClass]" :style="inputStyle" v-bind="{ ...inputProps, ...getPTOptions('input') }" :data-p-highlight="checked" :data-p-disabled="disabled" :data-p-focused="focused">
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
    emits: ['click', 'update:modelValue', 'change', 'input', 'focus', 'blur'],
    data() {
        return {
            focused: false
        };
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    checked: this.checked,
                    focused: this.focused,
                    disabled: this.disabled
                }
            });
        },
        onClick(event) {
            if (!this.disabled && !this.readonly) {
                let newModelValue;

                if (this.binary) {
                    newModelValue = this.checked ? this.falseValue : this.trueValue;
                } else {
                    if (this.checked) newModelValue = this.modelValue.filter((val) => !ObjectUtils.equals(val, this.value));
                    else newModelValue = this.modelValue ? [...this.modelValue, this.value] : [this.value];
                }

                this.$emit('click', event);
                this.$emit('update:modelValue', newModelValue);
                this.$emit('change', event);
                this.$emit('input', newModelValue);
                this.$refs.input.focus();
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        }
    },
    computed: {
        checked() {
            return this.binary ? this.modelValue === this.trueValue : ObjectUtils.contains(this.value, this.modelValue);
        }
    },
    components: {
        CheckIcon: CheckIcon
    }
};
</script>
