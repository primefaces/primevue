<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'columngroup',
    props: {
        type: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            _rows: null
        };
    },
    mounted() {
        this._rows = this.$children;
    },
    computed: {
        rows() {
            return this._rows;
        }
    }
}
</script>