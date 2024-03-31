<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-highlight="active" :data-p-disabled="disabled">
        <input
            :id="inputId"
            type="checkbox"
            :class="[cx('input'), inputClass]"
            :style="inputStyle"
            :value="modelValue"
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
        <span role="status" class="p-hidden-accessible" aria-live="polite" v-bind="getPTOptions('hiddenValueLabel')" :data-p-hidden-accessible="true">{{ ariaValueLabel }}</span>
        <div :class="cx('box')" v-bind="getPTOptions('box')">
            <slot v-if="modelValue === true" name="checkicon" :class="cx('checkIcon')">
                <CheckIcon :class="cx('checkIcon')" v-bind="getPTOptions('checkIcon')" />
            </slot>
            <slot v-else-if="modelValue === false" name="uncheckicon" :class="cx('uncheckIcon')">
                <TimesIcon :class="cx('uncheckIcon')" v-bind="getPTOptions('uncheckIcon')" />
            </slot>
            <slot v-else name="nullableicon" :class="cx('nullableIcon')" />
        </div>
    </div>
</template>

<script>
import CheckIcon from 'primevue/icons/check';
import TimesIcon from 'primevue/icons/times';
import BaseTriStateCheckbox from './BaseTriStateCheckbox.vue';

export default {
    name: 'TriStateCheckbox',
    extends: BaseTriStateCheckbox,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    methods: {
        getPTOptions(key) {
            const _ptm = key === 'root' ? this.ptmi : this.ptm;

            return _ptm(key, {
                context: {
                    active: this.active,
                    disabled: this.disabled
                }
            });
        },
        updateModel() {
            let newValue;

            switch (this.modelValue) {
                case true:
                    newValue = false;
                    break;

                case false:
                    newValue = null;
                    break;

                default:
                    newValue = true;
                    break;
            }

            this.$emit('update:modelValue', newValue);
        },
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                this.updateModel();
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
        active() {
            return this.modelValue != null;
        },
        checked() {
            return this.modelValue === true;
        },
        ariaValueLabel() {
            return this.modelValue ? this.$primevue.config.locale.aria.trueLabel : this.modelValue === false ? this.$primevue.config.locale.aria.falseLabel : this.$primevue.config.locale.aria.nullLabel;
        }
    },
    components: {
        CheckIcon,
        TimesIcon
    }
};
</script>
