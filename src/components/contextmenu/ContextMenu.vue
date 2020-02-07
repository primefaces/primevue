<template>
    <transition name="p-contextmenu" @enter="onEnter" @leave="onLeave">
        <div ref="container" class="p-contextmenu p-component" v-if="visible">
            <ContextMenuSub :model="model" :root="true" @leaf-click="onLeafClick" />
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import ContextMenuSub from './ContextMenuSub';

export default {
    props: {
		model: {
            type: Array,
            default: null
        },
        appendTo: {
            type: String,
            default: null
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
        }
    },
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    documentContextMenuListener: null,
    pageX: null,
    pageY: null,
    data() {
        return {
            visible: false
        };
    },
    beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.unbindDocumentContextMenuListener();
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
        onEnter() {
            this.appendContainer();
            this.position();
            this.bindOutsideClickListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
        },
        position() {
            let left = this.pageX + 1;
            let top = this.pageY + 1;
            let width = this.$refs.container.offsetParent ? this.$refs.container.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.$refs.container);
            let height = this.$refs.container.offsetParent ? this.$refs.container.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.$refs.container);
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

            this.$refs.container.style.left = left + 'px';
            this.$refs.container.style.top = top + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target)) {
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
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.$refs.container);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.container);
            }
        },
        restoreAppend() {
            if (this.$refs.container && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.container);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.container);
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
        }
    },
    computed: {
        containerClass() {
            return ['p-tieredmenu p-component', {
                'p-tieredmenu-dynamic p-menu-overlay': this.popup
            }];
        }
    },
    components: {
        'ContextMenuSub': ContextMenuSub
    }
}
</script>

<style>
.p-contextmenu {
    width: 12.5em;
    padding: .25em;
    position: absolute;
}

.p-contextmenu .p-menu-separator {
    border-width: 1px 0 0 0;
}

.p-contextmenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.p-contextmenu .p-submenu-list {
    display: none;
    position: absolute;
    width: 12.5em;
    padding: .25em;
    z-index: 1;
}

.p-contextmenu .p-menuitem-active > .p-submenu-list {
    display: block;
}

.p-contextmenu .p-menuitem-link {
    padding: .25em;
    display: block;
    position: relative;
    cursor: pointer;
}

.p-contextmenu .p-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-contextmenu .p-menuitem-text {
    vertical-align: middle;
}

.p-contextmenu .p-menuitem {
    position: relative;
}

.p-contextmenu .p-menuitem-link .p-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.p-contextmenu .p-menuitem-active > .p-submenu > .p-submenu-list {
    display: block !important;
}

.p-contextmenu-enter {
    opacity: 0;
}

.p-contextmenu-enter-active {
    -webkit-transition: opacity 250ms;
    transition: opacity 250ms;
}
</style>