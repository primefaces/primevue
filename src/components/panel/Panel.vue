<template>
    <div class="p-panel p-component">
        <div class="p-panel-titlebar">
            <slot name="header">
                <span class="p-panel-title" v-if="header">{{header}}</span>
            </slot>
            <a v-if="toggleable" tabindex="0" class="p-panel-titlebar-icon p-panel-titlebar-toggler" @click="toggle" @keydown.enter="toggle">
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
    watch: {
        collapsed(newValue) {
            this.d_collapsed = newValue;
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('update:collapsed', this.d_collapsed);
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        }
    }
}
</script>

<style>
.p-panel {
	padding: 0.2em;
}

.p-panel .p-panel-titlebar {
	padding: .5em .75em;
}

.p-panel .p-panel-titlebar-icon {
	float: right;
    cursor: pointer;
    height: 1.25em;
    width: 1.25em;
    line-height: 1.25em;
    text-align: center;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.p-panel .p-panel-titlebar-icon span {
    line-height: inherit;
}

.p-panel .p-panel-content {
	border: 0;
    background: none;
    padding: .5em .75em;
}

.p-panel .p-panel-footer {
	border-width: 1px 0 0;
	padding: .25em .5em;
	text-align:left;
}

.p-panel-content-wrapper-enter,
.p-panel-content-wrapper-leave-to {
    max-height: 0;
}

.p-panel-content-wrapper-enter-to,
.p-panel-content-wrapper-leave {
    max-height: 1000px;
}

.p-panel-content-wrapper-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-panel-content-wrapper-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}
</style>
