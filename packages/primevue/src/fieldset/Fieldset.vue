<template>
    <fieldset :class="cx('root')" :data-p="dataP" v-bind="ptmi('root')">
        <legend :class="cx('legend')" :data-p="dataP" v-bind="ptm('legend')">
            <slot name="legend" :toggleCallback="toggle">
                <span v-if="!toggleable" :id="$id + '_header'" :class="cx('legendLabel')" v-bind="ptm('legendLabel')">{{ legend }}</span>
                <button
                    v-if="toggleable"
                    :id="$id + '_header'"
                    v-ripple
                    type="button"
                    :aria-controls="$id + '_content'"
                    :aria-expanded="!d_collapsed"
                    :aria-label="buttonAriaLabel"
                    :class="cx('toggleButton')"
                    @click="toggle"
                    @keydown="onKeyDown"
                    v-bind="{ ...toggleButtonProps, ...ptm('toggleButton') }"
                >
                    <!--TODO: togglericon deprecated since v4.0-->
                    <slot :name="$slots.toggleicon ? 'toggleicon' : 'togglericon'" :collapsed="d_collapsed" :class="cx('toggleIcon')">
                        <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" :class="cx('toggleIcon')" v-bind="ptm('toggleIcon')" />
                    </slot>
                    <span :class="cx('legendLabel')" v-bind="ptm('legendLabel')">{{ legend }}</span>
                </button>
            </slot>
        </legend>
        <transition name="p-toggleable-content" v-bind="ptm('transition')">
            <div v-show="!d_collapsed" :id="$id + '_content'" :class="cx('contentContainer')" role="region" :aria-labelledby="$id + '_header'" v-bind="ptm('contentContainer')">
                <div :class="cx('content')" v-bind="ptm('content')">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import { cn } from '@primeuix/utils';
import MinusIcon from '@primevue/icons/minus';
import PlusIcon from '@primevue/icons/plus';
import Ripple from 'primevue/ripple';
import BaseFieldset from './BaseFieldset.vue';

export default {
    name: 'Fieldset',
    extends: BaseFieldset,
    inheritAttrs: false,
    emits: ['update:collapsed', 'toggle'],
    data() {
        return {
            d_collapsed: this.collapsed
        };
    },
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        },
        onKeyDown(event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter' || event.code === 'Space') {
                this.toggle(event);
                event.preventDefault();
            }
        }
    },
    computed: {
        buttonAriaLabel() {
            return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.legend;
        },
        dataP() {
            return cn({
                toggleable: this.toggleable
            });
        }
    },
    directives: {
        ripple: Ripple
    },
    components: {
        PlusIcon,
        MinusIcon
    }
};
</script>
