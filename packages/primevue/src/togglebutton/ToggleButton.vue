<template>
    <button
        v-ripple
        type="button"
        :class="cx('root')"
        :tabindex="tabindex"
        :disabled="disabled"
        :aria-pressed="d_value"
        @click="onChange"
        @blur="onBlur"
        v-bind="getPTOptions('root')"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledby"
        :data-p-checked="active"
        :data-p-disabled="disabled"
        :data-p="dataP"
    >
        <span :class="cx('content')" v-bind="getPTOptions('content')" :data-p="dataP">
            <slot>
                <slot name="icon" :value="d_value" :class="cx('icon')">
                    <span v-if="onIcon || offIcon" :class="[cx('icon'), d_value ? onIcon : offIcon]" v-bind="getPTOptions('icon')" />
                </slot>
                <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
            </slot>
        </span>
    </button>
</template>

<script>
import { cn } from '@primeuix/utils';
import { isNotEmpty } from '@primeuix/utils/object';
import Ripple from 'primevue/ripple';
import BaseToggleButton from './BaseToggleButton.vue';

export default {
    name: 'ToggleButton',
    extends: BaseToggleButton,
    inheritAttrs: false,
    emits: ['change'],
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
        onChange(event) {
            if (!this.disabled && !this.readonly) {
                this.writeValue(!this.d_value, event);
                this.$emit('change', event);
            }
        },
        onBlur(event) {
            this.formField.onBlur?.(event);
        }
    },
    computed: {
        active() {
            return this.d_value === true;
        },
        hasLabel() {
            return isNotEmpty(this.onLabel) && isNotEmpty(this.offLabel);
        },
        label() {
            return this.hasLabel ? (this.d_value ? this.onLabel : this.offLabel) : '\u00A0';
        },
        dataP() {
            return cn({
                checked: this.active,
                invalid: this.$invalid,
                [this.size]: this.size
            });
        }
    },
    directives: {
        ripple: Ripple
    }
};
</script>
