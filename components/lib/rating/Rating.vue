<template>
    <div :class="containerClass" v-bind="ptm('root')">
        <div v-if="cancel" :class="['p-rating-item p-rating-cancel-item', { 'p-focus': focusedOptionIndex === 0 }]" @click="onOptionClick($event, 0)" v-bind="ptm('cancelItem')">
            <span class="p-hidden-accessible" v-bind="ptm('hiddenCancelInputWrapper')">
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
            <slot name="cancelicon">
                <component :is="cancelIcon ? 'span' : 'BanIcon'" :class="['p-rating-icon p-rating-cancel', cancelIcon]" v-bind="ptm('cancelIcon')" />
            </slot>
        </div>
        <template v-for="value in stars" :key="value">
            <div :class="['p-rating-item', { 'p-rating-item-active': value <= modelValue, 'p-focus': value === focusedOptionIndex }]" @click="onOptionClick($event, value)" v-bind="getPTOptions(value, 'item')">
                <span class="p-hidden-accessible" v-bind="ptm('hiddenItemInputWrapper')">
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
                <slot v-if="value <= modelValue" name="onicon" :value="value">
                    <component :is="onIcon ? 'span' : 'StarFillIcon'" :class="['p-rating-icon', onIcon]" v-bind="ptm('onIcon')" />
                </slot>
                <slot v-else name="officon" :value="value">
                    <component :is="offIcon ? 'span' : 'StarIcon'" :class="['p-rating-icon', offIcon]" v-bind="ptm('offIcon')" />
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import BanIcon from 'primevue/icons/ban';
import StarIcon from 'primevue/icons/star';
import StarFillIcon from 'primevue/icons/starfill';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Rating',
    extends: BaseComponent,
    emits: ['update:modelValue', 'change', 'focus', 'blur'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        cancel: {
            type: Boolean,
            default: true
        },
        onIcon: {
            type: String,
            default: undefined
        },
        offIcon: {
            type: String,
            default: undefined
        },
        cancelIcon: {
            type: String,
            default: undefined
        }
    },
    data() {
        return {
            name: this.$attrs.name,
            focusedOptionIndex: -1
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
        getPTOptions(value, key) {
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
    computed: {
        containerClass() {
            return [
                'p-rating',
                {
                    'p-readonly': this.readonly,
                    'p-disabled': this.disabled
                }
            ];
        }
    },
    components: {
        StarFillIcon: StarFillIcon,
        StarIcon: StarIcon,
        BanIcon: BanIcon
    }
};
</script>

<style>
.p-rating {
    position: relative;
    display: flex;
    align-items: center;
}

.p-rating-item {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

.p-rating.p-readonly .p-rating-item {
    cursor: default;
}
</style>
