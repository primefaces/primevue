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
    padding: .25em;
    display: flex;
}

.p-menubar .p-menu-separator {
    border-width: 1px 0 0 0;
}

.p-menubar:after {
    content: "";
    clear: both;
    display: table;
}

.p-menubar ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.p-menubar .p-menuitem-link {
    display: block;
    padding: .25em;
    position: relative;
    text-decoration: none;
    cursor: pointer;
}

.p-menubar .p-menuitem-icon {
    margin-right: .25em;
}

.p-menubar .p-menubar-root-list {
    display: inline-block;
}

.p-menubar .p-menubar-root-list > .p-menuitem {
    display: inline-block;
    position: relative;
}

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: .5em;
}

.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    vertical-align: middle;
    margin-left: .25em;
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
    min-width: 12.5em;
    padding: .25em;
}

.p-menubar .p-submenu-list .p-menuitem {
    margin: .125em 0;
    position: relative;
}

.p-menubar .p-submenu-list > .p-menuitem-active > .p-submenu-list  {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar .p-menuitem-icon {
    margin-right: .25em;
    vertical-align: middle;
}

.p-menubar .p-menuitem-text {
    vertical-align: middle;
}

.p-menubar .p-submenu-list .p-menuitem-link .p-submenu-icon {
    position: absolute;
    margin-top: -.5em;
    right: 0;
    top: 50%;
}

.p-menubar .p-menuitem-active > .p-submenu > .p-submenu-list {
    display: block;
}

.p-menubar .p-menubar-custom,
.p-menubar .p-menubar-end {
    margin-left: auto;
    align-self: center;
    margin-right: .25em;

}
</style>