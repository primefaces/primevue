<template>
    <div ref="container" class="p-splitbutton p-buttonset p-component">
        <PVSButton type="button" :icon="icon" :label="label" @click="onClick" :disabled="disabled" :tabindex="tabindex" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-caret-down" @click="onDropdownButtonClick" :disabled="disabled"
            :aria-expanded="overlayVisible" aria-haspopup="true" :aria-owns="ariaId + '_overlay'"/>
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div id="ariaId + '_overlay'" ref="overlay" class="p-menu p-menu-dynamic p-component" v-if="overlayVisible">
                <ul class="p-menu-list p-reset" role="menu">
                    <li role="none" v-for="item of model" :key="item.label" :target="item.target" :style="item.style" :class="['p-menuitem', item.class]">
                        <a :href="item.url||'#'" class="p-menuitem-link" @click="itemClick($event, item)" role="menuitem">
                            <span :class="['p-menuitem-icon', item.icon]"></span>
                            <span class="p-menuitem-text">{{item.label}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import Button from '../button/Button';
import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

export default {
    props: {
        label: {
            type: String,
            default: null
        },
        icon: {
            type: String,
            default: null
        },
		model: {
            type: Array,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        tabindex: {
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
    },
    data() {
        return {
            overlayVisible: false
        };
    },
    beforeDestroy() {
        this.unbindOutsideClickListener();
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
            this.overlayVisible = false;
        },
        onDropdownButtonClick() {
            this.overlayVisible = !this.overlayVisible;
        },
        itemClick(event, item) {
            if (item.command) {
                item.command({originalEvent: event, item: item });
            }
            this.overlayVisible = false;
            event.preventDefault();
        },
        onOverlayEnter() {
            if (this.autoZIndex) {
                this.$refs.overlay.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
            this.alignOverlay();
            this.bindOutsideClickListener();
        },
        onOverlayLeave() {
            this.unbindOutsideClickListener();
        },
        alignOverlay() {
            DomHandler.relativePosition(this.$refs.overlay, this.$refs.container);
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.overlayVisible && this.$refs.overlay && !this.$refs.container.contains(event.target)) {
                        this.overlayVisible = false;
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
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        }
    },
    components: {
        'PVSButton': Button
    }
}
</script>
