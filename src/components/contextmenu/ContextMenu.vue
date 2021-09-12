<template>
    <Teleport :to="appendTo">
        <transition name="p-contextmenu" @enter="onEnter" @leave="onLeave" @after-leave="onAfterLeave">
            <div :ref="containerRef" :class="containerClass" v-if="visible" v-bind="$attrs">
                <ContextMenuSub :model="model" :root="true" @leaf-click="onLeafClick" :template="$slots.item" :exact="exact" />
            </div>
        </transition>
    </Teleport>
</template>

<script>
import {DomHandler,ZIndexUtils} from 'primevue/utils';
import ContextMenuSub from './ContextMenuSub.vue';

export default {
    name: 'ContextMenu',
    inheritAttrs: false,
    props: {
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
        global: {
            type: Boolean,
            default: false
        },
        exact: {
            type: Boolean,
            default: true
        }
    },
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    documentContextMenuListener: null,
    pageX: null,
    pageY: null,
    container: null,
    data() {
        return {
            visible: false
        };
    },
    beforeUnmount() {
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.unbindDocumentContextMenuListener();

        if (this.container && this.autoZIndex) {
            ZIndexUtils.clear(this.container);
        }
        this.container = null;
    },
    mounted() {
        if (this.global) {
            this.bindDocumentContextMenuListener();
        }
    },
    methods: {
        itemClick(event) {
            const item = event.item;
            if (item.command) {
                item.command(event);
                event.originalEvent.preventDefault();
            }
            this.hide();
        },
        toggle(event) {
            if (this.visible)
                this.hide();
            else
                this.show(event);
        },
        onLeafClick() {
            this.hide();
        },
        show(event) {
            this.pageX = event.pageX;
            this.pageY = event.pageY;

            if (this.visible)
                this.position();
            else
                this.visible = true;

            event.stopPropagation();
            event.preventDefault();
        },
        hide() {
            this.visible = false;
        },
        onEnter(el) {
            this.position();
            this.bindOutsideClickListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                ZIndexUtils.set('menu', el, this.baseZIndex + this.$primevue.config.zIndex.menu);
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
        },
        onAfterLeave(el) {
            if (this.autoZIndex) {
                ZIndexUtils.clear(el);
            }
        },
        position() {
            let left = this.pageX + 1;
            let top = this.pageY + 1;
            let width = this.container.offsetParent ? this.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.container);
            let height = this.container.offsetParent ? this.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.container);
            let viewport = DomHandler.getViewport();

            //flip
            if (left + width - document.body.scrollLeft > viewport.width) {
                left -= width;
            }

            //flip
            if (top + height - document.body.scrollTop > viewport.height) {
                top -= height;
            }

            //fit
            if (left < document.body.scrollLeft) {
                left = document.body.scrollLeft;
            }

            //fit
            if (top < document.body.scrollTop) {
                top = document.body.scrollTop;
            }

            this.container.style.left = left + 'px';
            this.container.style.top = top + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.container && !this.container.contains(event.target) && !event.ctrlKey) {
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
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.visible) {
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
        bindDocumentContextMenuListener() {
            if (!this.documentContextMenuListener) {
                this.documentContextMenuListener = (event) => {
                    this.show(event);
                };

                document.addEventListener('contextmenu', this.documentContextMenuListener);
            }
        },
        unbindDocumentContextMenuListener() {
            if(this.documentContextMenuListener) {
                document.removeEventListener('contextmenu', this.documentContextMenuListener);
                this.documentContextMenuListener = null;
            }
        },
        containerRef(el) {
            this.container = el;
        }
    },
    computed: {
        containerClass() {
            return ['p-contextmenu p-component', {
                'p-input-filled': this.$primevue.config.inputStyle === 'filled',
                'p-ripple-disabled': this.$primevue.config.ripple === false
            }]
        }
    },
    components: {
        'ContextMenuSub': ContextMenuSub
    }
}
</script>

<style>
.p-contextmenu {
    position: absolute;
}

.p-contextmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-contextmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
}

.p-contextmenu .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-contextmenu .p-menuitem-text {
    line-height: 1;
}

.p-contextmenu .p-menuitem {
    position: relative;
}

.p-contextmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}

.p-contextmenu-enter-from {
    opacity: 0;
}

.p-contextmenu-enter-active {
    transition: opacity 250ms;
}
</style>
