<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="d_visible">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabpanel',
    props: {
        header: null,
        active: Boolean,
        disabled: Boolean,
        hidden: Boolean
    },
    data() {
        return {
            d_visible: this.active && !this.hidden
        }
    },
    watch: {
        active(newValue) {
            this.d_visible = newValue && this.hidden;
        },
        hidden(newValue) {
            this.d_visible = this.active && newValue;
        }
    }
}
</script>
