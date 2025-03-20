<template>
    <transition name="p-scrolltop" appear @enter="onEnter" @after-leave="onAfterLeave" v-bind="ptm('transition')">
        <Button v-if="visible" :ref="containerRef" :class="cx('root')" @click="onClick" :aria-label="scrollTopAriaLabel" :unstyled="unstyled" v-bind="buttonProps" :pt="ptm('root')">
            <template #icon="slotProps">
                <slot name="icon" :class="cx('icon')">
                    <component :is="icon ? 'span' : 'ChevronUpIcon'" :class="[cx('icon'), icon, slotProps.class]" v-bind="ptm('root')['icon']" data-pc-section="icon" />
                </slot>
            </template>
        </Button>
    </transition>
</template>

<script>
import { getWindowScrollTop } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import ChevronUpIcon from '@primevue/icons/chevronup';
import Button from 'primevue/button';
import BaseScrollTop from './BaseScrollTop.vue';

export default {
    name: 'ScrollTop',
    extends: BaseScrollTop,
    inheritAttrs: false,
    scrollListener: null,
    container: null,
    data() {
        return {
            visible: false
        };
    },
    mounted() {
        if (this.target === 'window') this.bindDocumentScrollListener();
        else if (this.target === 'parent') this.bindParentScrollListener();
    },
    beforeUnmount() {
        if (this.target === 'window') this.unbindDocumentScrollListener();
        else if (this.target === 'parent') this.unbindParentScrollListener();

        if (this.container) {
            ZIndex.clear(this.container);
            this.overlay = null;
        }
    },
    methods: {
        onClick() {
            let scrollElement = this.target === 'window' ? window : this.$el.parentElement;

            scrollElement.scroll({
                top: 0,
                behavior: this.behavior
            });
        },
        checkVisibility(scrollY) {
            if (scrollY > this.threshold) this.visible = true;
            else this.visible = false;
        },
        bindParentScrollListener() {
            this.scrollListener = () => {
                this.checkVisibility(this.$el.parentElement.scrollTop);
            };

            this.$el.parentElement.addEventListener('scroll', this.scrollListener);
        },
        bindDocumentScrollListener() {
            this.scrollListener = () => {
                this.checkVisibility(getWindowScrollTop());
            };

            window.addEventListener('scroll', this.scrollListener);
        },
        unbindParentScrollListener() {
            if (this.scrollListener) {
                this.$el.parentElement.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        unbindDocumentScrollListener() {
            if (this.scrollListener) {
                window.removeEventListener('scroll', this.scrollListener);
                this.scrollListener = null;
            }
        },
        onEnter(el) {
            ZIndex.set('overlay', el, this.$primevue.config.zIndex.overlay);
        },
        onAfterLeave(el) {
            ZIndex.clear(el);
        },
        containerRef(el) {
            this.container = el ? el.$el : undefined;
        }
    },
    computed: {
        scrollTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : undefined;
        }
    },
    components: {
        ChevronUpIcon,
        Button
    }
};
</script>
