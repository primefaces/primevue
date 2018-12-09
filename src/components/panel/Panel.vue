<template>
    <div class="p-panel p-component">
        <div class="p-panel-titlebar">
            <slot name="header">
                <span class="p-panel-title" v-if="header">{{header}}</span>
            </slot>
        </div>
        <div class="p-panel-content-wrapper">
            <div class="p-panel-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        toggleable: Boolean
    }
}
</script>

<style>

</style>
