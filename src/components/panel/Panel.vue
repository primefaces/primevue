<template>
    <div :class="containerClass">
        <div class="p-panel-titlebar">
            <slot name="header">
                <span class="p-panel-title" v-if="header" :id="ariaId + '_header'">{{header}}</span>
            </slot>
            <div class="p-panel-icons">
                 <slot name="icons"></slot>
                <a v-if="toggleable" tabindex="0" class="p-panel-titlebar-icon p-panel-titlebar-toggler" @click="toggle" @keydown.enter="toggle"
                    :id="ariaId +  '_header'" :aria-controls="ariaId + '_content'" :aria-expanded="!d_collapsed">
                    <span :class="{'pi pi-minus': !d_collapsed, 'pi pi-plus': d_collapsed}"></span>
                </a>
            </div>
        </div>
        <transition name="p-toggleable-content">
            <div class="p-toggleable-content" v-show="!d_collapsed" role="region" :id="ariaId + '_content'" :aria-labelledby="ariaId + '_header'">
                <div class="p-panel-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import UniqueComponentId from '../utils/UniqueComponentId';

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
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-panel p-component', {'p-panel-toggleable': this.toggleable}];
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
.p-panel-titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-panel-title {
    line-height: 1;
}

.p-panel-titlebar-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
