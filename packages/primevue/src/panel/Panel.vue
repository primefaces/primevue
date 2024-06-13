<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <div :class="cx('header')" v-bind="ptm('header')">
            <slot :id="id + '_header'" name="header" :class="cx('title')">
                <span v-if="header" :id="id + '_header'" :class="cx('title')" v-bind="ptm('title')">{{ header }}</span>
            </slot>
            <div :class="cx('headerActions')" v-bind="ptm('headerActions')">
                <slot name="icons"></slot>
                <Button
                    v-if="toggleable"
                    :id="id + '_header'"
                    :class="cx('pcToggleButton')"
                    :aria-label="buttonAriaLabel"
                    :aria-controls="id + '_content'"
                    :aria-expanded="!d_collapsed"
                    :unstyled="unstyled"
                    @click="toggle"
                    @keydown="onKeyDown"
                    v-bind="toggleButtonProps"
                    :pt="ptm('pcToggleButton')"
                >
                    <template #icon="slotProps">
                        <!--TODO: togglericon deprecated since v4.0-->
                        <slot :name="$slots.toggleicon ? 'toggleicon' : 'togglericon'" :collapsed="d_collapsed">
                            <component :is="d_collapsed ? 'PlusIcon' : 'MinusIcon'" :class="slotProps.class" v-bind="ptm('pcToggleButton')['icon']" />
                        </slot>
                    </template>
                </Button>
            </div>
        </div>
        <transition name="p-toggleable-content" v-bind="ptm('transition')">
            <div v-show="!d_collapsed" :id="id + '_content'" :class="cx('contentContainer')" role="region" :aria-labelledby="id + '_header'" v-bind="ptm('contentContainer')">
                <div :class="cx('content')" v-bind="ptm('content')">
                    <slot></slot>
                </div>
                <div v-if="$slots.footer" :class="cx('footer')" v-bind="ptm('footer')">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { UniqueComponentId } from '@primevue/core/utils';
import MinusIcon from '@primevue/icons/minus';
import PlusIcon from '@primevue/icons/plus';
import Button from 'primevue/button';
import Ripple from 'primevue/ripple';
import BasePanel from './BasePanel.vue';

export default {
    name: 'Panel',
    extends: BasePanel,
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
            return this.toggleButtonProps && this.toggleButtonProps.ariaLabel ? this.toggleButtonProps.ariaLabel : this.header;
        }
    },
    components: {
        PlusIcon,
        MinusIcon,
        Button
    },
    directives: {
        ripple: Ripple
    }
};
</script>
