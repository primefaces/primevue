<template>
    <fieldset :class="cx('root')" v-bind="ptmi('root')">
        <legend :class="cx('legend')" v-bind="ptm('legend')">
            <slot v-if="!toggleable" name="legend">
                <span :id="id + '_header'" :class="cx('legendtitle')" v-bind="ptm('legendtitle')">{{ legend }}</span>
            </slot>
            <a
                v-if="toggleable"
                :id="id + '_header'"
                v-ripple
                tabindex="0"
                role="button"
                :aria-controls="id + '_content'"
                :aria-expanded="!d_collapsed"
                :aria-label="buttonAriaLabel"
                @click="toggle"
                @keydown="onKeyDown"
                v-bind="{ ...toggleButtonProps, ...ptm('toggler') }"
            >
                <slot name="togglericon" :collapsed="d_collapsed">
                    <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" :class="cx('togglericon')" v-bind="ptm('togglericon')" />
                </slot>
                <slot name="legend">
                    <span :class="cx('legendtitle')" v-bind="ptm('legendtitle')">{{ legend }}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-toggleable-content" v-bind="ptm('transition')">
            <div v-show="!d_collapsed" :id="id + '_content'" :class="cx('toggleablecontent')" role="region" :aria-labelledby="id + '_header'" v-bind="ptm('toggleablecontent')">
                <div :class="cx('content')" v-bind="ptm('content')">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
import MinusIcon from 'primevue/icons/minus';
import PlusIcon from 'primevue/icons/plus';
import Ripple from 'primevue/ripple';
import { UniqueComponentId } from 'primevue/utils';
import BaseFieldset from './BaseFieldset.vue';

export default {
    name: 'Fieldset',
    extends: BaseFieldset,
    inheritAttrs: false,
    emits: ['update:collapsed', 'toggle'],
    data() {
        return {
            id: this.$attrs.id,
            d_collapsed: this.collapsed
        };
    },
    watch: {
        '$attrs.id': function (newValue) {
            this.id = newValue || UniqueComponentId();
        },
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    mounted() {
        this.id = this.id || UniqueComponentId();
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
