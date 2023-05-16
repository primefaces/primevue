<template>
    <div :class="classes.root" v-bind="ptm('root')">
        <div :class="classes.header" v-bind="ptm('header')">
            <slot :id="ariaId + '_header'" name="header" :class="classes.title">
                <span v-if="header" :id="ariaId + '_header'" :class="classes.title" v-bind="ptm('title')">{{ header }}</span>
            </slot>
            <div :class="classes.icons" v-bind="ptm('icons')">
                <slot name="icons"></slot>
                <button
                    v-if="toggleable"
                    :id="ariaId + '_header'"
                    v-ripple
                    type="button"
                    role="button"
                    :class="classes.toggler"
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
            <div v-show="!d_collapsed" :id="ariaId + '_content'" :class="classes.toggleablecontent" role="region" :aria-labelledby="ariaId + '_header'" v-bind="ptm('toggleablecontent')">
                <div :class="classes.content" v-bind="ptm('content')">
                    <slot></slot>
                </div>
                <div v-if="$slots.footer" :class="classes.footer" v-bind="ptm('footer')">
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
import { useStyle } from 'primevue/usestyle';
import { UniqueComponentId } from 'primevue/utils';
import { getComputedClasses, styles } from './PanelStyle';

const styleInstance = useStyle(styles, { id: 'primevue_panel_style', manual: true });

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
        },
        isUnstyled: {
            immediate: true,
            handler(newValue) {
                !newValue && styleInstance.load();
            }
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
        buttonAriaLabel() {
            return this.toggleButtonProps && this.toggleButtonProps['aria-label'] ? this.toggleButtonProps['aria-label'] : this.header;
        },
        classes() {
            return this.isUnstyled ? {} : getComputedClasses(this.$props, this.$data);
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
