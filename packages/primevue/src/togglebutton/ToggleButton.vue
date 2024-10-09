<template>
    <button
        v-ripple
        type="button"
        :class="cx('root')"
        :tabindex="tabindex"
        :disabled="disabled"
        :aria-pressed="modelValue"
        @click="onChange"
        v-bind="getPTOptions('root')"
        :aria-labelledby="ariaLabelledby"
        :data-p-checked="active"
        :data-p-disabled="disabled"
    >
        <span :class="cx('content')" v-bind="getPTOptions('content')">
            <slot>
                <slot name="icon" :value="modelValue" :class="cx('icon')">
                    <span v-if="onIcon || offIcon" :class="[cx('icon'), modelValue ? onIcon : offIcon]" v-bind="getPTOptions('icon')" />
                </slot>
                <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
            </slot>
        </span>
    </button>
</template>

<script>
import { isNotEmpty } from '@primeuix/utils/object';
import Ripple from 'primevue/ripple';
import BaseToggleButton from './BaseToggleButton.vue';

export default {
    name: 'ToggleButton',
    extends: BaseToggleButton,
    inheritAttrs: false,
    emits: ['update:modelValue', 'change'],
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
                this.$emit('update:modelValue', !this.modelValue);
                this.$emit('change', event);
            }
        }
    },
    computed: {
        active() {
            return this.modelValue === true;
        },
        hasLabel() {
            return isNotEmpty(this.onLabel) && isNotEmpty(this.offLabel);
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
