<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div v-if="cancel" :class="cx('cancelItem')" @click="onOptionClick($event, 0)" v-bind="getPTOptions('cancelItem', 0)" :data-p-focused="focusedOptionIndex === 0">
            <span class="p-hidden-accessible" v-bind="ptm('hiddenCancelInputWrapper')" :data-p-hidden-accessible="true">
                <input
                    type="radio"
                    value="0"
                    :name="name"
                    :checked="modelValue === 0"
                    :disabled="disabled"
                    :readonly="readonly"
                    :aria-label="cancelAriaLabel()"
                    @focus="onFocus($event, 0)"
                    @blur="onBlur"
                    @change="onChange($event, 0)"
                    v-bind="ptm('hiddenCancelInput')"
                />
            </span>
            <slot name="cancelicon" :class="cx('cancelIcon')">
                <component :is="cancelIcon ? 'span' : 'BanIcon'" :class="[cx('cancelIcon'), cancelIcon]" v-bind="ptm('cancelIcon')" />
            </slot>
        </div>
        <template v-for="value in stars" :key="value">
            <div :class="cx('item', { value })" @click="onOptionClick($event, value)" v-bind="getPTOptions('item', value)" :data-p-active="value <= modelValue" :data-p-focused="value === focusedOptionIndex">
                <span class="p-hidden-accessible" v-bind="ptm('hiddenItemInputWrapper')" :data-p-hidden-accessible="true">
                    <input
                        type="radio"
                        :value="value"
                        :name="name"
                        :checked="modelValue === value"
                        :disabled="disabled"
                        :readonly="readonly"
                        :aria-label="starAriaLabel(value)"
                        @focus="onFocus($event, value)"
                        @blur="onBlur"
                        @change="onChange($event, value)"
                        v-bind="ptm('hiddenItemInput')"
                    />
                </span>
                <slot v-if="value <= modelValue" name="onicon" :value="value" :class="cx('onIcon')">
                    <component :is="onIcon ? 'span' : 'StarFillIcon'" :class="[cx('onIcon'), onIcon]" v-bind="ptm('onIcon')" />
                </slot>
                <slot v-else name="officon" :value="value" :class="cx('offIcon')">
                    <component :is="offIcon ? 'span' : 'StarIcon'" :class="[cx('offIcon'), offIcon]" v-bind="ptm('offIcon')" />
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
import BanIcon from 'primevue/icons/ban';
import StarIcon from 'primevue/icons/star';
import StarFillIcon from 'primevue/icons/starfill';
import { DomHandler, UniqueComponentId } from 'primevue/utils';
import BaseRating from './BaseRating.vue';

export default {
    name: 'Rating',
    extends: BaseRating,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    data() {
        return {
            name: this.$attrs.name,
            focusedOptionIndex: -1,
            isFocusVisibleItem: true
        };
    },
    watch: {
        '$attrs.name': function (newValue) {
            this.name = newValue || UniqueComponentId();
        }
    },
    mounted() {
        this.name = this.name || UniqueComponentId();
    },
    methods: {
        getPTOptions(key, value) {
            return this.ptm(key, {
                context: {
                    active: value <= this.modelValue,
                    focused: value === this.focusedOptionIndex
                }
            });
        },
        onOptionClick(event, value) {
            if (!this.readonly && !this.disabled) {
                this.onOptionSelect(event, value);
                this.isFocusVisibleItem = false;
                const firstFocusableEl = DomHandler.getFirstFocusableElement(event.currentTarget);

                firstFocusableEl && DomHandler.focus(firstFocusableEl);
            }
        },
        onFocus(event, value) {
            this.focusedOptionIndex = value;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focusedOptionIndex = -1;
            this.$emit('blur', event);
        },
        onChange(event, value) {
            this.onOptionSelect(event, value);
            this.isFocusVisibleItem = true;
        },
        onOptionSelect(event, value) {
            this.focusedOptionIndex = value;
            this.updateModel(event, value || null);
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', { originalEvent: event, value });
        },
        cancelAriaLabel() {
            return this.$primevue.config.locale.clear;
        },
        starAriaLabel(value) {
            return value === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, value);
        }
    },
    components: {
        StarFillIcon: StarFillIcon,
        StarIcon: StarIcon,
        BanIcon: BanIcon
    }
};
</script>
