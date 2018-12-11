<template>
    <div class="p-tabview-panel" role="tabpanel" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        header: null,
        disabled: Boolean
    },
    data() {
        return {
            active: false
        }
    }
}
</script>