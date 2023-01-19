<template>
    <div :class="containerClass">
        <div v-if="cancel" :class="['p-rating-item p-rating-cancel-item', { 'p-focus': focusedOptionIndex === 0 }]" @click="onOptionClick($event, 0)">
            <span class="p-hidden-accessible">
                <input type="radio" value="0" :name="name" :checked="modelValue === 0" :disabled="disabled" :readonly="readonly" :aria-label="cancelAriaLabel()" @focus="onFocus($event, 0)" @blur="onBlur" @change="onChange($event, 0)" />
            </span>
            <slot name="cancelicon">
                <span :class="cancelIconClass" />
            </slot>
        </div>
        <template v-for="value in stars" :key="value">
            <div :class="['p-rating-item', { 'p-rating-item-active': value <= modelValue, 'p-focus': value === focusedOptionIndex }]" @click="onOptionClick($event, value)">
                <span class="p-hidden-accessible">
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
                    />
                </span>
                <slot v-if="value <= modelValue" name="onicon" :value="value">
                    <span :class="onIconClass" />
                </slot>
                <slot v-else name="officon" :value="value">
                    <span :class="offIconClass" />
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
import { DomHandler, UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Rating',
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
            default: 'pi pi-star-fill'
        },
        offIcon: {
            type: String,
            default: 'pi pi-star'
        },
        cancelIcon: {
            type: String,
            default: 'pi pi-ban'
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
        },
        cancelIconClass() {
            return ['p-rating-icon p-rating-cancel', this.cancelIcon];
        },
        onIconClass() {
            return ['p-rating-icon', this.onIcon];
        },
        offIconClass() {
            return ['p-rating-icon', this.offIcon];
        }
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
