<template>
    <div :class="cx('root')" v-bind="ptmi('root')" :data-p="dataP">
        <template v-for="value in stars" :key="value">
            <div :class="cx('option', { value })" @click="onOptionClick($event, value)" v-bind="getPTOptions('option', value)" :data-p-active="value <= d_value" :data-p-focused="value === focusedOptionIndex" :data-p="dataOption(value)">
                <span class="p-hidden-accessible" v-bind="ptm('hiddenOptionInputContainer')" :data-p-hidden-accessible="true">
                    <input
                        type="radio"
                        :value="value"
                        :name="namex"
                        :checked="d_value === value"
                        :disabled="disabled"
                        :readonly="readonly"
                        :aria-label="starAriaLabel(value)"
                        @focus="onFocus($event, value)"
                        @blur="onBlur"
                        @change="onChange($event, value)"
                        v-bind="ptm('hiddenOptionInput')"
                    />
                </span>
                <slot v-if="value <= d_value" name="onicon" :value="value" :toggleCallback="(event) => onChange(event, value)" :class="cx('onIcon')">
                    <component :is="onIcon ? 'span' : 'StarFillIcon'" :class="[cx('onIcon'), onIcon]" v-bind="ptm('onIcon')" />
                </slot>
                <slot v-else name="officon" :value="value" :class="cx('offIcon')" :toggleCallback="(event) => onChange(event, value)">
                    <component :is="offIcon ? 'span' : 'StarIcon'" :class="[cx('offIcon'), offIcon]" v-bind="ptm('offIcon')" />
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import { focus, getFirstFocusableElement } from '@primeuix/utils/dom';
import BanIcon from '@primevue/icons/ban';
import StarIcon from '@primevue/icons/star';
import StarFillIcon from '@primevue/icons/starfill';
import BaseRating from './BaseRating.vue';

export default {
    name: 'Rating',
    extends: BaseRating,
    inheritAttrs: false,
    emits: ['change', 'focus', 'blur'],
    data() {
        return {
            focusedOptionIndex: -1,
            isFocusVisibleItem: true
        };
    },
    methods: {
        getPTOptions(key, value) {
            return this.ptm(key, {
                context: {
                    active: value <= this.d_value,
                    focused: value === this.focusedOptionIndex
                }
            });
        },
        onOptionClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.onOptionSelect(event, value);
                this.isFocusVisibleItem = false;
                const firstFocusableEl = getFirstFocusableElement(event.currentTarget);

                firstFocusableEl && focus(firstFocusableEl);
            }
        },
        onFocus(event, value) {
            this.focusedOptionIndex = value;
            this.isFocusVisibleItem = event.sourceCapabilities?.firesTouchEvents === false;

            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
            this.formField.onBlur?.();
        },
        onChange(event, value) {
            this.onOptionSelect(event, value);
            this.isFocusVisibleItem = true;
        },
        onOptionSelect(event, value) {
            if (this.focusedOptionIndex === value || this.d_value === value) {
                this.focusedOptionIndex = -1;
                this.updateModel(event, null);
            } else {
                this.focusedOptionIndex = value;
                this.updateModel(event, value || null);
            }
        },
        updateModel(event, value) {
            this.writeValue(value, event);
            this.$emit('change', { originalEvent: event, value });
        },
        starAriaLabel(value) {
            return value === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, value);
        },
        dataOption(value) {
            return cn({
                readonly: this.readonly,
                disabled: this.disabled,
                active: value <= this.d_value,
                'focus-visible': value === this.focusedOptionIndex && this.isFocusVisibleItem
            });
        }
    },
    computed: {
        namex() {
            return this.name || `${this.$attrSelector}_name`;
        },
        dataP() {
            return cn({
                readonly: this.readonly,
                disabled: this.disabled
            });
        }
    },
    components: {
        StarFillIcon,
        StarIcon,
        BanIcon
    }
};
</script>
