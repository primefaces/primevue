<template>
    <div class="p-toolbar p-component" role="toolbar">
        <div class="p-toolbar-group-left">
             <slot name="left"></slot>
        </div>
        <div class="p-toolbar-group-right">
             <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>