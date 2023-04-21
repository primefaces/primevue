<template>
    <div class="p-avatar-group p-component" v-bind="ptm('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseComponent from 'primevue/basecomponent';

export default {
    name: 'AvatarGroup',
    extends: BaseComponent
};
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
