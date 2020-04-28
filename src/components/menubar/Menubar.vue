<template>
    <div class="p-menubar p-component">
        <div class="p-menubar-start" v-if="$slots.start">
            <slot name="start"></slot>
        </div>
        <MenubarSub :model="model" :root="true" />
        <div class="p-menubar-custom" v-if="$slots.default">
            <slot></slot>
        </div>
        <div class="p-menubar-end" v-if="$slots.end">
            <slot name="end"></slot>
        </div>
    </div>
</template>

<script>
import MenubarSub from './MenubarSub';

export default {
    props: {
		model: {
            type: Array,
            default: null
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
}

.p-menubar .p-menuitem-text {
    line-height: 1;
}

.p-menubar .p-menuitem {
    position: relative;
}

.p-menubar .p-menubar-root-list {
    display: flex;
    align-items: center;
}

.p-menubar .p-menubar-root-list > li ul {
    display: none;
    z-index: 1;
}

.p-menubar .p-menubar-root-list > .p-menuitem-active > .p-submenu-list {
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
</style>