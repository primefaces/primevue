<template>
    <div v-if="visible" :class="cx('root')" :aria-label="label" v-bind="ptmi('root')" :data-p="dataP">
        <slot>
            <img v-if="image" :src="image" v-bind="ptm('image')" :class="cx('image')" />
            <component v-else-if="$slots.icon" :is="$slots.icon" :class="cx('icon')" v-bind="ptm('icon')" />
            <span v-else-if="icon" :class="[cx('icon'), icon]" v-bind="ptm('icon')" />
            <div v-if="label !== null" :class="cx('label')" v-bind="ptm('label')">{{ label }}</div>
        </slot>
        <slot v-if="removable" name="removeicon" :removeCallback="close" :keydownCallback="onKeydown">
            <component
                :is="removeIcon ? 'span' : 'TimesCircleIcon'"
                :class="[cx('removeIcon'), removeIcon]"
                :tabindex="disabled ? -1 : 0"
                role="button"
                :aria-label="removeAriaLabel"
                :aria-disabled="disabled"
                @click="!disabled && close($event)"
                @keydown="onKeydown"
                v-bind="ptm('removeIcon')"
            ></component>
        </slot>
    </div>
</template>

<script>
import { cn } from '@primeuix/utils';
import TimesCircleIcon from '@primevue/icons/timescircle';
import BaseChip from './BaseChip.vue';

export default {
    name: 'Chip',
    extends: BaseChip,
    inheritAttrs: false,
    emits: ['remove'],
    data() {
        return {
            visible: true
        };
    },
    methods: {
        onKeydown(event) {
            if (!this.disabled && (event.key === 'Enter' || event.key === ' ' || event.key === 'Backspace')) {
                event.preventDefault();
                this.close(event);
            }
        },
        close(event) {
            if (!this.disabled) {
                this.visible = false;
                this.$emit('remove', event);
            }
        }
    },
    computed: {
        dataP() {
            return cn({
                removable: this.removable
            });
        },
        removeAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
        }
    },
    components: {
        TimesCircleIcon
    }
};
</script>
