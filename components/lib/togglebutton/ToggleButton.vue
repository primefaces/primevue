<template>
    <div :class="cx('root')" v-bind="getPTOptions('root')" :data-p-highlight="active" :data-p-disabled="disabled">
        <button v-ripple type="button" :class="cx('button')" :tabindex="tabindex" :aria-pressed="modelValue" :aria-disabled="disabled" @click="onChange" v-bind="getPTOptions('button')">
            <slot name="icon" :value="modelValue" :class="cx('icon')">
                <span v-if="onIcon || offIcon" :class="[cx('icon'), modelValue ? onIcon : offIcon]" v-bind="getPTOptions('icon')" />
            </slot>
            <span :class="cx('label')" v-bind="getPTOptions('label')">{{ label }}</span>
        </button>
    </div>
</template>

<script>
import Ripple from 'primevue/ripple';
import { ObjectUtils } from 'primevue/utils';
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
            return ObjectUtils.isNotEmpty(this.onLabel) && ObjectUtils.isNotEmpty(this.offLabel);
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
