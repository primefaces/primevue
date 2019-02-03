<template>
    <fieldset :class="['p-fieldset p-component', {'p-fieldset-toggleable': toggleable}]">
        <legend class="p-fieldset-legend p-unselectable-text">
            <slot name="legend" v-if="!toggleable">
                <span class="p-fieldset-legend-text" >{{legend}}</span>
            </slot>
            <a tabindex="0" v-if="toggleable" @click="toggle" @keydown.enter="toggle">
                <span class="p-fieldset-toggler pi pi-minus"></span>
                <slot name="legend">
                    <span class="p-fieldset-legend-text">{{legend}}</span>
                </slot>
            </a>
        </legend>
        <transition name="p-fieldset-content-wrapper">
            <div class="p-fieldset-content-wrapper" v-show="!d_collapsed">
                <div class="p-fieldset-content">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </fieldset>
</template>

<script>
export default {
    props: {
        legend: String,
        toggleable: Boolean,
        collapsed: Boolean
    },
    data() {
        return {
           d_collapsed: this.collapsed
        }
    },
    methods: {
        toggle(event) {
            this.d_collapsed = !this.d_collapsed;
            this.$emit('toggle', {
                originalEvent: event,
                value: this.d_collapsed
            });
        }
    } 
}
</script>

<style>

</style>
