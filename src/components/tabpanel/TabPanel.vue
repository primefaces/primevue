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
    },
    mounted() {
        if (!this.$parent.tabs.includes(this)) {
            this.$parent.tabs.push(this);
        }
    },
    beforeDestroy() {
        this.$parent.tabs = this.$parent.tabs.filter(tab => tab !== this);
    }
}
</script>