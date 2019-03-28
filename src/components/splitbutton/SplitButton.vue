<template>
    <div ref="container" class="p-splitbutton p-buttonset p-component">
        <PVSButton type="button" :icon="icon" :label="label" @click="onClick" :disabled="disabled" :tabindex="tabindex" />
        <PVSButton type="button" class="p-splitbutton-menubutton" icon="pi pi-caret-down" @click="onDropdownButtonClick" :disabled="disabled" />
        <transition name="p-input-overlay" @enter="onOverlayEnter" @leave="onOverlayLeave">
            <div ref="overlay" class="p-menu p-menu-dynamic p-component" v-if="overlayVisible">
                <ul class="p-menu-list p-reset">
                    <li class="p-menuitem" role="menuitem" v-for="item of model" :key="item.label">
                        <a :href="item.url||'#'" class="p-menuitem-link" @click="itemClick($event, item)">
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

export default {
    props: {
        label: String,
        icon: String,
		model: Array,
        disabled: Boolean,
        tabindex: String
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
        }
    },
    components: {
        'PVSButton': Button
    }
}
</script>
