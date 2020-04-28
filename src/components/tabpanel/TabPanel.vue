<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="d_active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabpanel',
    props: {
        header: null,
        active: Boolean,
        disabled: Boolean
    },
    data() {
        return {
            d_active: this.active
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    }
}
</script>