<template>
    <Portal v-if="fullScreen">
        <div v-if="containerVisible" :ref="maskRef" :class="[cx('mask'), maskClass]" :role="fullScreen ? 'dialog' : 'region'" :aria-modal="fullScreen ? 'true' : undefined" v-bind="ptm('mask')">
            <transition name="p-galleria" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="onBeforeLeave" @after-leave="onAfterLeave" appear>
                <GalleriaContent v-if="visible" :ref="containerRef" v-focustrap @mask-hide="maskHide" :templates="$slots" @activeitem-change="onActiveItemChange" :pt="pt" :unstyled="unstyled" v-bind="$props" />
            </transition>
        </div>
    </Portal>
    <GalleriaContent v-else :templates="$slots" @activeitem-change="onActiveItemChange" :pt="pt" :unstyled="unstyled" v-bind="$props" />
</template>

<script>
import FocusTrap from 'primevue/focustrap';
import Portal from 'primevue/portal';
import { DomHandler, ZIndexUtils } from 'primevue/utils';
import BaseGalleria from './BaseGalleria.vue';
import GalleriaContent from './GalleriaContent.vue';

export default {
    name: 'Galleria',
    extends: BaseGalleria,
    inheritAttrs: false,
    emits: ['update:activeIndex', 'update:visible'],
    container: null,
    mask: null,
    data() {
        return {
            containerVisible: this.visible
        };
    },
    updated() {
        if (this.fullScreen && this.visible) {
            this.containerVisible = this.visible;
        }
    },
    beforeUnmount() {
        if (this.fullScreen) {
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        }

        this.mask = null;

        if (this.container) {
            ZIndexUtils.clear(this.container);
            this.container = null;
        }
    },
    methods: {
        onBeforeEnter(el) {
            ZIndexUtils.set('modal', el, this.baseZIndex || this.$primevue.config.zIndex.modal);
        },
        onEnter(el) {
            this.mask.style.zIndex = String(parseInt(el.style.zIndex, 10) - 1);
            DomHandler.addClass(document.body, 'p-overflow-hidden');
            this.focus();
        },
        onBeforeLeave() {
            !this.isUnstyled && DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        },
        onAfterLeave(el) {
            ZIndexUtils.clear(el);
            this.containerVisible = false;
            DomHandler.removeClass(document.body, 'p-overflow-hidden');
        },
        onActiveItemChange(index) {
            if (this.activeIndex !== index) {
                this.$emit('update:activeIndex', index);
            }
        },
        maskHide() {
            this.$emit('update:visible', false);
        },
        containerRef(el) {
            this.container = el;
        },
        maskRef(el) {
            this.mask = el;
        },
        focus() {
            let focusTarget = this.container.$el.querySelector('[autofocus]');

            if (focusTarget) {
                focusTarget.focus();
            }
        }
    },
    components: {
        GalleriaContent: GalleriaContent,
        Portal: Portal
    },
    directives: {
        focustrap: FocusTrap
    }
};
</script>
