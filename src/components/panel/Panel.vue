<template>
    <div :class="containerClass">
        <div class="p-panel-header">
            <slot name="header">
                <span class="p-panel-title" v-if="header" :id="ariaId + '_header'">{{header}}</span>
            </slot>
            <div class="p-panel-icons">
                 <slot name="icons"></slot>
                <button v-if="toggleable" class="p-panel-header-icon p-panel-toggler p-link" @click="toggle" type="button"
                    :id="ariaId +  '_header'" :aria-controls="ariaId + '_content'" :aria-expanded="!d_collapsed" v-ripple>
                    <span :class="{'pi pi-minus': !d_collapsed, 'pi pi-plus': d_collapsed}"></span>
                </button>
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
import {UniqueComponentId} from 'primevue/utils';
import Ripple from 'primevue/ripple';

export default {
    name: 'Panel',
    emits: ['update:collapsed', 'toggle'],
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
    },
    computed: {
        ariaId() {
            return UniqueComponentId();
        },
        containerClass() {
            return ['p-panel p-component', {'p-panel-toggleable': this.toggleable}];
        }
    },
    directives: {
        'ripple': Ripple
    }
}
</script>

<style>
.p-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.p-panel-title {
    line-height: 1;
}

.p-panel-header-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
</style>
