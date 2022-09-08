<template>
    <div ref="rating" :class="containerClass">
        <template v-if="cancel">
            <span :class="cancelIconClasses()" @click="onCancelClick" @keydown="onKeyDown">
                <component v-if="$slots.cancel" :is="$slots.cancel" />
                <span class="p-hidden-accessible">
                    <input
                        type="radio"
                        value="0"
                        :name="name"
                        :checked="modelValue === 0"
                        :disabled="disabled"
                        :readonly="readonly"
                        :aria-label="$primevue.config.locale.clear"
                        @focus="onFocus($event, 0)"
                        @blur="onBlur"
                        @keydown="onKeyDown($event, 0)"
                    />
                </span>
            </span>
        </template>
        <template v-for="i in stars" :key="i">
            <span :class="iconClasses(i)" @click="onStarClick($event, i)">
                <component v-if="hasIconSlot && i <= modelValue" :is="$slots.onIcon" :index="i" />
                <component v-if="hasIconSlot && i > modelValue" :is="$slots.offIcon" :index="i" />
                <span class="p-hidden-accessible">
                    <input type="radio" :value="i" :name="name" :checked="modelValue === i" :disabled="disabled" :readonly="readonly" :aria-label="ariaLabelTemplate(i)" @focus="onFocus($event, i)" @blur="onBlur" @keydown="onKeyDown($event, i)" />
                </span>
            </span>
        </template>
    </div>
</template>

<script>
export default {
    name: 'Rating',
    emits: ['update:modelValue', 'change', 'focus', 'blur', 'cancel'],
    props: {
        modelValue: {
            type: Number,
            default: null
        },
        name: {
            type: String,
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
            default: 'pi pi-star'
        },
        offIcon: {
            type: String,
            default: 'pi pi-star-fill'
        },
        cancelIcon: {
            type: String,
            default: 'pi pi-ban'
        }
    },
    data() {
        return {
            focusIndex: null,
            outsideClickListener: null,
            keyboardEvent: false
        };
    },
    mounted() {
        this.bindOutsideClickListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
    },
    methods: {
        onStarClick(event, value) {
            if (!this.readonly && !this.disabled && !this.keyboardEvent) {
                this.updateModel(event, value);
                window.setTimeout(() => {
                    this.focusIndex = value;
                }, 1);
            }

            this.keyboardEvent = false;
        },
        onKeyDown(event, value) {
            this.keyboardEvent = true;

            if (event.code === 'Space') {
                this.updateModel(event, value);
            }

            if (event.code === 'Tab') {
                this.focusIndex = null;
            }
        },
        onFocus(event, index) {
            if (!this.readonly) {
                if (this.modelValue === null && this.focusIndex === null && index === this.stars) {
                    this.focusIndex = this.cancel ? 0 : 1;
                    this.updateModel(event, this.focusIndex);
                } else if (this.modelValue === 0 && this.focusIndex === 0 && index === this.stars - 1) {
                    this.focusIndex = index + 1;
                    this.updateModel(event, this.focusIndex);
                } else if (this.modelValue === null && this.focusIndex === null) {
                    this.focusIndex = this.cancel ? 0 : 1;
                    this.updateModel(event, this.focusIndex);
                } else if (this.modelValue !== null && this.focusIndex === null) {
                    this.focusIndex = this.modelValue;
                    this.updateModel(event, this.modelValue);
                } else {
                    this.focusIndex = index;
                    this.updateModel(event, index);
                }

                this.$emit('focus', event);
            }
        },
        onBlur(event) {
            this.$emit('blur', event);
        },
        onCancelClick(event) {
            if (!this.readonly && !this.disabled) {
                window.setTimeout(() => {
                    this.focusIndex = 0;
                }, 1);
                this.updateModel(event, null);
                this.$emit('cancel');
            }
        },
        updateModel(event, value) {
            this.$emit('update:modelValue', value);
            this.$emit('change', {
                originalEvent: event,
                value: value
            });
        },
        ariaLabelTemplate(index) {
            return index === 1 ? this.$primevue.config.locale.aria.star : this.$primevue.config.locale.aria.stars.replace(/{star}/g, index);
        },
        iconClasses(i) {
            const iconOn = i > this.modelValue && !this.hasIconSlot() ? this.onIcon : null;
            const iconOff = i <= this.modelValue && !this.hasIconSlot() ? this.offIcon : null;

            return ['p-rating-icon', iconOn, iconOff, { 'p-focus': i === this.focusIndex }];
        },
        cancelIconClasses() {
            const focusOnCancel = this.focusIndex === 0 && (this.modelValue === 0 || this.modelValue === null);

            if (this.$slots.cancel) {
                return ['p-rating-icon', { 'p-focus': focusOnCancel }];
            }

            return ['p-rating-icon p-rating-cancel', this.cancelIcon, { 'p-focus': focusOnCancel }];
        },
        hasIconSlot() {
            return this.$slots.onIcon && this.$slots.offIcon;
        },
        bindOutsideClickListener() {
            this.outsideClickListener = (event) => {
                if (this.focusIndex !== null && this.isOutsideRatingClicked(event)) {
                    this.focusIndex = null;
                }
            };

            document.addEventListener('click', this.outsideClickListener);
        },
        unbindOutsideClickListener() {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        },
        isOutsideRatingClicked(event) {
            const ratingRef = this.$refs.rating;

            return !(ratingRef.isSameNode(event.target) || ratingRef.contains(event.target));
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
    }
};
</script>

<style>
.p-rating-icon {
    cursor: pointer;
    display: inline-block;
}

.p-rating.p-rating-readonly .p-rating-icon {
    cursor: default;
}

.p-rating:not(.p-disabled) .p-rating-icon.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem #bfdbfe;
    border-color: #3b82f6;
}
</style>
