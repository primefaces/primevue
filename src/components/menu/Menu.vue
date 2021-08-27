<template>
    <Teleport :to="appendTo" :disabled="!popup">
        <transition name="p-connected-overlay" @enter="onEnter" @leave="onLeave" @after-leave="onAfterLeave">
            <div :ref="containerRef" :class="containerClass" v-if="popup ? overlayVisible : true" v-bind="$attrs" @click="onOverlayClick">
                <ul class="p-menu-list p-reset" role="menu">
                    <template v-for="(item, i) of model" :key="item.label + i.toString()">
                        <template v-if="item.items && visible(item) && !item.separator">
                            <li class="p-submenu-header" v-if="item.items">
                                <slot name="item" :item="item">{{item.label}}</slot>
                            </li>
                            <template v-for="(child, j) of item.items" :key="child.label + i + j">
                                <Menuitem v-if="visible(child) && !child.separator" :item="child" @click="itemClick" :template="$slots.item" :exact="exact" />
                                <li v-else-if="visible(child) && child.separator" :class="['p-menu-separator', child.class]" :style="child.style" :key="'separator' + i + j" role="separator"></li>
                            </template>
                        </template>
                        <li v-else-if="visible(item) && item.separator" :class="['p-menu-separator', item.class]" :style="item.style" :key="'separator' + i.toString()" role="separator"></li>
                        <Menuitem v-else :key="item.label + i.toString()" :item="item" @click="itemClick" :template="$slots.item" :exact="exact" />
                    </template>
                </ul>
            </div>
        </transition>
    </Teleport>
</template>

<script>
import {ConnectedOverlayScrollHandler,DomHandler,ZIndexUtils} from 'primevue/utils';
import OverlayEventBus from 'primevue/overlayeventbus';
import Menuitem from './Menuitem.vue';

export default {
    name: 'Menu',
    emits: ['show', 'hide'],
    inheritAttrs: false,
    props: {
        popup: {
            type: Boolean,
            default: false
        },
		model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: String,
            default: 'body'
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            overlayVisible: false
        };
    },
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    container: null,
    beforeUnmount() {
        this.unbindResizeListener();
        this.unbindOutsideClickListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }
        this.target = null;

        if (this.container && this.autoZIndex) {
            ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    methods: {
        itemClick(event) {
            const item = event.item;
            if (item.disabled) {
                return;
            }

            if (item.command) {
                item.command(event);
            }

            if (item.to && event.navigate) {
                event.navigate(event.originalEvent);
            }

            this.hide();
        },
        toggle(event) {
            if (this.overlayVisible)
                this.hide();
            else
                this.show(event);
        },
        show(event) {
            this.overlayVisible = true;
            this.target = event.currentTarget;
        },
        hide() {
            this.overlayVisible = false;
            this.target = null;
        },
        onEnter(el) {
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindResizeListener();
            this.bindScrollListener();

            if (this.autoZIndex) {
                ZIndexUtils.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }

            this.$emit('show');
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
            this.$emit('hide');
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndexUtils.clear(el);
            }
        },
        alignOverlay() {
            DomHandler.absolutePosition(this.container, this.target);
            this.container.style.minWidth = DomHandler.getOuterWidth(this.target) + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.container && !this.container.contains(event.target) && !this.isTargetClicked(event)) {
                        this.hide();
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.overlayVisible) {
                        this.hide();
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        isTargetClicked() {
            return this.target && (this.target === event.target || this.target.contains(event.target));
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        },
        containerRef(el) {
            this.container = el;
        },
        onOverlayClick(event) {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: this.target
            });
        }
    },
    computed: {
        containerClass() {
            return ['p-menu p-component', {
                'p-menu-overlay': this.popup,
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }]
        }
    },
    components: {
        'Menuitem': Menuitem
    }
}
</script>

<style>
.p-menu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}

.p-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-menu .p-menuitem-text {
    line-height: 1;
}
</style>
