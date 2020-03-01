<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="c_visible">
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
            d_active: false
        };
    },
    computed: {
        c_visible: function() {
            return this.d_active && !this.hidden;
        }
    },
    watch: {
        active(newValue) {
            this.d_active = newValue;
        }
    }
}
</script>
