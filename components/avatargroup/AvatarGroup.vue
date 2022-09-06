<template>
    <div class="p-avatar-group p-component">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AvatarGroup'
}
</script>

<style>
.p-avatar-group .p-avatar + .p-avatar {
    margin-left: -1rem;
}

.p-avatar-group {
    display: flex;
    align-items: center;
}
</style>
