<template>
    <transition name="p-scrolltop" appear @enter="onEnter" @after-leave="onAfterLeave">
        <button v-if="visible" :ref="containerRef" :class="cx('root')" @click="onClick" type="button" :aria-label="scrollTopAriaLabel" v-bind="ptm('root')" data-pc-name="scrolltop">
            <slot name="icon" :class="cx('icon')">
                <component :is="icon ? 'span' : 'ChevronUpIcon'" :class="[cx('icon'), icon]" v-bind="ptm('icon')" />
            </slot>
        </button>
    </transition>
</template>

<script>
import ChevronUpIcon from 'primevue/icons/chevronup';
import { DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseScrollTop from './BaseScrollTop.vue';

export default {
    name: 'ScrollTop',
    extends: BaseScrollTop,
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
            ZIndexUtils.clear(this.container);
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
                this.checkVisibility(DomHandler.getWindowScrollTop());
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
            ZIndexUtils.set('overlay', el, this.$primevue.config.zIndex.overlay);
        },
        onAfterLeave(el) {
            ZIndexUtils.clear(el);
        },
        containerRef(el) {
            this.container = el;
        }
    },
    computed: {
        scrollTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : undefined;
        }
    },
    components: {
        ChevronUpIcon
    }
};
</script>
