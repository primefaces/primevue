<template>
    <div ref="container" v-ripple :class="cx('root')" @click="onClick($event)" v-bind="ptm('root')" :data-p-active="modelValue === true" data-pc-name="togglebutton">
        <span class="p-hidden-accessible" v-bind="ptm('hiddenInputWrapper')" :data-p-hidden-accessible="true">
            <input
                :id="inputId"
                type="checkbox"
                role="switch"
                :class="inputClass"
                :style="inputStyle"
                :checked="modelValue"
                :value="modelValue"
                :aria-labelledby="ariaLabelledby"
                :aria-label="ariaLabel"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                v-bind="{ ...inputProps, ...ptm('hiddenInput') }"
            />
        </span>
        <slot name="icon" :value="modelValue" :class="cx('icon')">
            <span v-if="onIcon || offIcon" :class="[cx('icon'), modelValue ? onIcon : offIcon]" v-bind="ptm('icon')" />
        </slot>
        <span :class="cx('label')" v-bind="ptm('label')">{{ label }}</span>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import BaseToggleButton from './BaseToggleButton.vue';

export default {
    name: 'ToggleButton',
    extends: BaseToggleButton,
    emits: ['update:modelValue', 'change', 'click', 'focus', 'blur'],
    outsideClickListener: null,
    data() {
        return {
            focused: false
        };
    },
    mounted() {
        this.bindOutsideClickListener();
    },
    beforeUnmount() {
        this.unbindOutsideClickListener();
    },
    methods: {
        onClick(event) {
            if (!this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
                this.$emit('click', event);
                this.focused = true;
            }
        },
        onFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        onBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.focused && !this.$refs.container.contains(event.target)) {
                        this.focused = false;
                    }
                };

                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        }
    },
    computed: {
        hasLabel() {
            return this.onLabel && this.onLabel.length > 0 && this.offLabel && this.offLabel.length > 0;
        },
        hasIcon() {
            return this.$slots.icon || (this.onIcon && this.offIcon);
        },
        label() {
            return this.hasLabel ? (this.modelValue ? this.onLabel : this.offLabel) : '&nbsp;';
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
