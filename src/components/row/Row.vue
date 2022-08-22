<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            columns: null
        };
    },
    mounted() {
        this.columns = this.$children;
    }
}
</script>