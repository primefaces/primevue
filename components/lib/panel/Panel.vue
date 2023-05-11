<template>
    <div :class="containerClass" v-bind="ptm('root')">
        <div class="p-panel-header" v-bind="ptm('header')">
            <slot :id="ariaId + '_header'" name="header" class="p-panel-title">
                <span v-if="header" :id="ariaId + '_header'" class="p-panel-title" v-bind="ptm('title')">{{ header }}</span>
            </slot>
            <div class="p-panel-icons" v-bind="ptm('icons')">
                <slot name="icons"></slot>
                <button
                    v-if="toggleable"
                    :id="ariaId + '_header'"
                    v-ripple
                    type="button"
                    role="button"
                    class="p-panel-header-icon p-panel-toggler p-link"
                    :aria-label="buttonAriaLabel"
                    :aria-controls="ariaId + '_content'"
                    :aria-expanded="!d_collapsed"
                    @click="toggle"
                    @keydown="onKeyDown"
                    v-bind="{ ...toggleButtonProps, ...ptm('toggler') }"
                >
                    <slot name="togglericon" :collapsed="d_collapsed">
                        <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" v-bind="ptm('togglericon')" />
                    </slot>
                </button>
            </div>
        </div>
        <transition name="p-toggleable-content">
            <div v-show="!d_collapsed" :id="ariaId + '_content'" class="p-toggleable-content" role="region" :aria-labelledby="ariaId + '_header'" v-bind="ptm('toggleablecontent')">
                <div class="p-panel-content" v-bind="ptm('content')">
                    <slot></slot>
                </div>
                <div v-if="$slots.footer" class="p-panel-footer" v-bind="ptm('footer')">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import MinusIcon from 'primevue/icons/minus';
import PlusIcon from 'primevue/icons/plus';
import Ripple from 'primevue/ripple';
import { UniqueComponentId } from 'primevue/utils';

export default {
    name: 'Panel',
    extends: BaseComponent,
    emits: ['update:collapsed', 'toggle'],
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean,
        toggleButtonProps: {
            type: null,
            default: null
        }
    },
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
            if (event.code === 'Enter' || event.code === 'Space') {
                this.toggle(event);
                event.preventDefault();
            }
        }
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-panel p-component', { 'p-panel-toggleable': this.toggleable }];
        },
        buttonAriaLabel() {
            return this.toggleButtonProps && this.toggleButtonProps['aria-label'] ? this.toggleButtonProps['aria-label'] : this.header;
        }
    },
    components: {
        PlusIcon,
        MinusIcon
    },
    directives: {
        ripple: Ripple
    }
};
</script>

<style>
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-panel-title {
    line-height: 1;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
</style>
