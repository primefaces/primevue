<template>
    <div ref="rating"  :class="containerClass">
        <template v-if="cancel" >
            <template v-if="!$slots.cancel">
                <span :class="cancelIconClasses()" @click="onCancelClick" @keydown="onKeyDown">
                    <span class="p-hidden-accessible">
                        <input type="radio" value="0" :name="name" :checked="modelValue === 0" :disabled="disabled" :readonly="readonly" :aria-label="$primevue.config.locale.clear" @focus="onFocus($event, 0)" @blur="onBlur" @keydown="onKeyDown($event, 0)">
                    </span>
                </span>
            </template>
            <span :class="cancelIconClasses()" v-else @click="onCancelClick" @keydown="onKeyDown">
            <component :is="$slots.cancel" />
            <span class="p-hidden-accessible">
                        <input type="radio" value="0" :name="name" :checked="modelValue === 0" :disabled="disabled" :readonly="readonly" :aria-label="$primevue.config.locale.clear" @focus="onFocus($event, 0)" @blur="onBlur" @keydown="onKeyDown($event, 0)">
                    </span>
            </span>
        </template>
        <template :key="i" v-for="i in stars">
        <template v-if="!$slots.onIcon && !$slots.offIcon">
            <span :class="iconClasses(i)" @click="onStarClick($event,i)">
                <span class="p-hidden-accessible">
                    <input type="radio" :value="i" :name="name" :checked="modelValue === i" :disabled="disabled" :readonly="readonly" :aria-label="ariaLabelTemplate(i)" @focus="onFocus($event, i)" @blur="onBlur" @keydown="onKeyDown($event,i)">
                </span>
            </span>
        </template>
            <template v-else>
                <span  :class="iconClasses(i)" @click="onStarClick($event,i)">
                <component v-if="i < modelValue + 1"  :is="$slots.onIcon" :index="i"></component>
                <component v-else  :is="$slots.offIcon" :index="i"></component>
                <span class="p-hidden-accessible">
                    <input type="radio" :value="i" :name="name" :checked="modelValue === i" :disabled="disabled" :readonly="readonly" :aria-label="ariaLabelTemplate(i)" @focus="onFocus($event, i)" @blur="onBlur" @keydown="onKeyDown($event,i)">
                </span>
            </span>
            </template>
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
        },
    },
    data() {
        return {
            focusIndex: null,
            outsideClickListener: null
        };
    },
    mounted() {
        this.bindOutsideClickListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
    },
    methods: {
        async onStarClick (event, value) {
            if (!this.readonly && !this.disabled) {
                this.updateModel(event, value);
                window.setTimeout(() => {
                    this.focusIndex = value;
                }, 1);
            }
        },
        onKeyDown(event, value) {
        if (event.code === 'Space') {
                this.updateModel(event, value);
            }
        if (event.code === 'Tab') {
                this.focusIndex = null;
            }
        },
        onFocus(event, index) {
            if (!this.readonly) {
                if (this.modelValue === null && this.focusIndex === null) {
                    this.focusIndex = this.cancel ? 0 : 1;
                }
                else if (this.modelValue !== null && this.focusIndex === null) {
                    this.focusIndex = this.modelValue;
                    this.updateModel(event, this.modelValue);
                }
                else {
                    this.focusIndex = index
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
                this.updateModel(event, null);
                this.$emit('cancel')
                this.focusIndex = null;
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
            const iconOn = i > this.modelValue && !this.hasIconSlot() ? this.onIcon : null
            const iconOff = i <= this.modelValue && !this.hasIconSlot() ? this.offIcon: null

            return ['p-rating-icon', iconOn, iconOff, {'p-focus': i === this.focusIndex}]
        },
        cancelIconClasses() {
            if(this.$slots.cancel) {
                return [ {'p-focus': this.focusIndex === null}]
            }

            return ['p-rating-icon p-rating-cancel', this.cancelIcon, {'p-focus': this.focusIndex === 0}]
        },
        hasIconSlot() {
            return this.$slots.onIcon && this.$slots.offIcon
        },
        bindOutsideClickListener() {
                this.outsideClickListener = (event) => {
                    if ( this.focusIndex && this.isOutsideRatingClicked(event)) {
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
            const ratingRef = this.$refs.rating

            return !(ratingRef === event.target || ratingRef.contains(event.target));
        },
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
    },
}
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
    box-shadow: 0 0 0 0.2rem #BFDBFE;
    border-color: #3B82F6;
}
</style>
