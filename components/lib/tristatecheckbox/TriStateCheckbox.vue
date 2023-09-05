<template>
    <div :class="cx('root')" @click="onClick($event)" v-bind="ptm('root')" data-pc-name="tristatecheckbox">
        <div class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input
                ref="input"
                :id="inputId"
                type="checkbox"
                :checked="modelValue === true"
                :tabindex="tabindex"
                :disabled="disabled"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @keydown="onKeyDown($event)"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </div>
        <span role="status" class="p-hidden-accessible" aria-live="polite" v-bind="ptm('hiddenValueLabel')" :data-p-hidden-accessible="true">{{ ariaValueLabel }}</span>
        <div ref="box" :class="cx('checkbox')" v-bind="getPTOptions('checkbox')" :data-p-highlight="modelValue != null" :data-p-disabled="disabled" :data-p-focused="focused">
            <slot v-if="modelValue === true" name="checkicon" :class="cx('checkIcon')">
                <component :is="'CheckIcon'" :class="cx('checkIcon')" v-bind="ptm('checkIcon')" />
            </slot>
            <slot v-else-if="modelValue === false" name="uncheckicon" :class="cx('uncheckIcon')">
                <component :is="'TimesIcon'" :class="cx('uncheckIcon')" v-bind="ptm('uncheckIcon')" />
            </slot>
            <slot v-else name="nullableicon" :class="cx('nullableIcon')">
                <span :class="cx('nullableIcon')" v-bind="ptm('nullableIcon')"></span>
            </slot>
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
    emits: ['click', 'update:modelValue', 'change', 'keydown', 'focus', 'blur'],
    data() {
        return {
            focused: false
        };
    },
    methods: {
        getPTOptions(key) {
            return this.ptm(key, {
                context: {
                    active: this.modelValue !== null,
                    focused: this.focused,
                    disabled: this.disabled
                }
            });
        },
        updateModel() {
            if (!this.disabled) {
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
            }
        },
        onClick(event) {
            this.updateModel();
            this.$emit('click', event);
            this.$emit('change', event);
            this.$refs.input.focus();
        },
        onKeyDown(event) {
            if (event.code === 'Enter') {
                this.updateModel();
                this.$emit('keydown', event);
                event.preventDefault();
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
        ariaValueLabel() {
            return this.modelValue ? this.$primevue.config.locale.aria.trueLabel : this.modelValue === false ? this.$primevue.config.locale.aria.falseLabel : this.$primevue.config.locale.aria.nullLabel;
        }
    },
    components: {
        CheckIcon: CheckIcon,
        TimesIcon: TimesIcon
    }
};
</script>
