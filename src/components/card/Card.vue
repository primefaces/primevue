<template>
    <div class="p-card p-component">
        <div v-if="$slots.header" class="p-card-header">
            <slot name="header"></slot>
        </div>
        <div class="p-card-body">
            <div v-if="$slots.title" class="p-card-title"><slot name="title"></slot></div>
            <div v-if="$slots.subtitle" class="p-card-subtitle"><slot name="subtitle"></slot></div>
            <div class="p-card-content">
                <slot name="content"></slot>
            </div>
            <div v-if="$slots.footer" class="p-card-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
};
</script>

<style>
.p-card-header img {
    width: 100%;
}
</style>
