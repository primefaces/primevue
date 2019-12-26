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
    padding: .25em .5em;
}

.p-toolbar:after {
    content: "";
    display: table;
    clear: both;
}

.p-toolbar-group-left {
    float:left
}

.p-toolbar-group-right {
    float:right
}
</style>