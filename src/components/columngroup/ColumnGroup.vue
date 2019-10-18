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
            children: null
        };
    },
    mounted() {
        this.children = this.$children;
    },
    computed: {
        rows() {
            return this.children;
        }
    }
}
</script>