<template>
    <transition name="p-input-overlay" @enter="onEnter" @leave="onLeave">
        <div ref="container" :class="containerClass" v-if="popup ? visible : true">
            <TieredMenuSub :model="model" :root="true" :popup="popup" @leaf-click="onLeafClick"/>
        </div>
    </transition>
</template>

<script>
import DomHandler from '../utils/DomHandler';
import TieredMenuSub from './TieredMenuSub';

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
    target: null,
    outsideClickListener: null,
    resizeListener: null,
    data() {
        return {
            visible: false
        };
    },
    beforeDestroy() {
        this.restoreAppend();
        this.unbindResizeListener();
        this.unbindOutsideClickListener();
        this.target = null;
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
        show(event) {
            this.visible = true;
            this.target = event.currentTarget;
        },
        hide() {
            this.visible = false;
        },
        onEnter() {
            this.appendContainer();
            this.alignOverlay();
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
        alignOverlay() {
            DomHandler.absolutePosition(this.$refs.container, this.target);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && this.$refs.container && !this.$refs.container.contains(event.target) && !this.isTargetClicked(event)) {
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
        onLeafClick() {
            if (this.popup) {
                this.hide();
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
        'TieredMenuSub': TieredMenuSub
    }
}
</script>

<style>
.p-tieredmenu {
    width: 12.5em;
    padding: .25em;
}

.p-tieredmenu.p-tieredmenu-dynamic {
    position: absolute;
}

.p-tieredmenu .p-menu-separator {
    border-width: 1px 0 0 0;
}

.p-tieredmenu ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.p-tieredmenu .p-submenu-list {
    display: none;
    position: absolute;
    width: 12.5em;
    padding: .25em;
    z-index: 1;
}

.p-tieredmenu .p-menuitem-link {
    padding: .25em;
    display: block;
    position: relative;
    text-decoration: none;
    cursor: pointer;
}

.p-tieredmenu .p-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-tieredmenu .p-menuitem-text {
    vertical-align: middle;
}

.p-tieredmenu .p-menuitem {
    position: relative;
    margin: .125em 0;
}

.p-tieredmenu .p-menuitem-link .p-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.p-tieredmenu .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
</style>