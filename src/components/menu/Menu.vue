<template>
    <transition name="p-connected-overlay" @enter="onEnter" @leave="onLeave">
        <div ref="container" :class="containerClass" v-if="popup ? overlayVisible : true">
            <ul class="p-menu-list p-reset" role="menu">
                <template v-for="(item, i) of model">
                    <template v-if="item.items && visible(item) && !item.separator">
                        <li class="p-submenu-header" :key="item.label+i" v-if="item.items">{{item.label}}</li>
                        <template v-for="(child, j) of item.items">
                            <Menuitem v-if="visible(child) && !child.separator" :key="child.label + i + j" :item="child" @click="itemClick" />
                            <li v-else-if="visible(child) && child.separator" class="p-menu-separator" :style="child.style" :key="'separator' + i + j" role="separator"></li>
                        </template>
                    </template>
                    <li v-else-if="visible(item) && item.separator" class="p-menu-separator" :style="item.style" :key="'separator' + i" role="separator"></li>
                    <Menuitem v-else :key="item.label+i" :item="item" @click="itemClick" />
                </template>
            </ul>
        </div>
    </transition>
</template>

<script>
import ConnectedOverlayScrollHandler from '../utils/ConnectedOverlayScrollHandler';
import DomHandler from '../utils/DomHandler';
import Menuitem from './Menuitem';

export default {
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
            default: null
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        baseZIndex: {
            type: Number,
            default: 0
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
    relativeAlign: false,
    beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        this.unbindOutsideClickListener();

        if (this.scrollHandler) {
            this.scrollHandler.destroy();
            this.scrollHandler = null;
        }

        this.target = null;
    },
    methods: {
        itemClick(event) {
            const item = event.item;
            if (item.disabled) {
                return;
            }

            if (item.command) {
                item.command(event);
                event.originalEvent.preventDefault();
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
            this.relativeAlign = event.relativeAlign;
            this.target = event.currentTarget;
        },
        hide() {
            this.overlayVisible = false;
            this.target = false;
            this.relativeAlign = false;
        },
        onEnter() {
            this.appendContainer();
            this.alignOverlay();
            this.bindOutsideClickListener();
            this.bindResizeListener();
            this.bindScrollListener();

            if (this.autoZIndex) {
                this.$refs.container.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindResizeListener();
            this.unbindScrollListener();
        },
        alignOverlay() {
            if (this.relativeAlign)
                DomHandler.relativePosition(this.$refs.container, this.target);
            else
                DomHandler.absolutePosition(this.$refs.container, this.target);

        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {
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
        beforeDestroy() {
            this.restoreAppend();
            this.unbindResizeListener();
            this.unbindOutsideClickListener();
            this.target = null;
        },
        visible(item) {
            return (typeof item.visible === 'function' ? item.visible() : item.visible !== false);
        }
    },
    computed: {
        containerClass() {
            return ['p-menu p-component', {
                'p-menu-overlay': this.popup
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
