<template>
    <div :class="containerClass">
        <div class="p-menubar-start" v-if="$slots.start">
            <slot name="start"></slot>
        </div>
        <a ref="menubutton" tabindex="0" class="p-menubar-button" @click="toggle($event)">
            <i class="pi pi-bars" />
        </a>
        <MenubarSub ref="rootmenu" :model="model" :root="true" :mobileActive="mobileActive" @leaf-click="onLeafClick"/>
        <div class="p-menubar-end" v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import MenubarSub from './MenubarSub';
import DomHandler from '../utils/DomHandler';

export default {
    props: {
		model: {
            type: Array,
            default: null
        }
    },
    outsideClickListener: null,
    data() {
        return {
            mobileActive: false
        }
    },
    beforeDestroy() {
        this.mobileActive = false;
        this.unbindOutsideClickListener();
    },
    methods: {
        toggle(event) {
            this.mobileActive = !this.mobileActive;
            this.$refs.rootmenu.$el.style.zIndex = String(DomHandler.generateZIndex());
            this.bindOutsideClickListener();
            event.preventDefault();
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.mobileActive && this.$refs.rootmenu.$el !== event.target && !this.$refs.rootmenu.$el.contains(event.target)
                        && this.$refs.menubutton !== event.target && !this.$refs.menubutton.contains(event.target)) {
                        this.mobileActive = false;
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
        onLeafClick() {
            this.mobileActive = false;
        }
    },
    computed: {
        containerClass() {
            return ['p-menubar p-component', {'p-menubar-mobile-active': this.mobileActive}];
        }
    },
    components: {
        'MenubarSub': MenubarSub
    }
}
</script>

<style>
.p-menubar {
    display: flex;
    align-items: center;
}

.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menubar .p-menuitem-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}

.p-menubar .p-menuitem-text {
    line-height: 1;
}

.p-menubar .p-menuitem {
    position: relative;
}

.p-menubar-root-list {
    display: flex;
    align-items: center;
}

.p-menubar-root-list > li ul {
    display: none;
    z-index: 1;
}

.p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
    display: block;
}

.p-menubar .p-submenu-list {
    display: none;
    position: absolute;
    z-index: 1;
}

.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}

.p-menubar .p-menubar-custom,
.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    cursor: pointer;
    align-items: center;
    justify-content: center;
}
</style>