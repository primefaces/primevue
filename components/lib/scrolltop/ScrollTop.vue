<template>
    <transition name="p-scrolltop" appear @enter="onEnter" @after-leave="onAfterLeave">
        <button v-if="visible" :ref="containerRef" :class="containerClass" @click="onClick" type="button" :aria-label="scrollTopAriaLabel" v-bind="ptm('root')">
            <slot name="icon">
                <component :is="icon ? 'span' : 'ChevronUpIcon'" :class="['p-scrolltop-icon', icon]" v-bind="ptm('icon')" />
            </slot>
        </button>
    </transition>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';
import ChevronUpIcon from 'primevue/icons/chevronup';
import { DomHandler, ZIndexUtils } from 'primevue/utils';

export default {
    name: 'ScrollTop',
    extends: BaseComponent,
    scrollListener: null,
    container: null,
    props: {
        target: {
            type: String,
            default: 'window'
        },
        threshold: {
            type: Number,
            default: 400
        },
        icon: {
            type: String,
            default: undefined
        },
        behavior: {
            type: String,
            default: 'smooth'
        }
    },
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
        containerClass() {
            return ['p-scrolltop p-link p-component', { 'p-scrolltop-sticky': this.target !== 'window' }];
        },
        scrollTopAriaLabel() {
            return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.scrollTop : undefined;
        }
    },
    components: {
        ChevronUpIcon
    }
};
</script>

<style>
.p-scrolltop {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-scrolltop-sticky {
    position: sticky;
}

.p-scrolltop-sticky.p-link {
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
</style>
