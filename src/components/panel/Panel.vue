<template>
    <div class="p-panel p-component">
        <div class="p-panel-titlebar">
            <slot name="header">
                <span class="p-panel-title" v-if="header">{{header}}</span>
            </slot>
            <a v-if="toggleable" tabindex="0" class="p-panel-titlebar-icon p-panel-titlebar-toggler" @click="toggle">
                <span :class="{'pi pi-minus': !d_collapsed, 'pi pi-plus': d_collapsed}"></span>
            </a>
        </div>
        <transition name="p-panel-content-wrapper">
            <div class="p-panel-content-wrapper" v-show="!d_collapsed">
                <div class="p-panel-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        toggleable: Boolean,
        collapsed: Boolean
    },
    data() {
        return {
           d_collapsed: this.collapsed
        }
    },
    methods: {
        toggle() {
            this.d_collapsed = !this.d_collapsed;
        }
    } 
}
</script>

<style>

</style>
