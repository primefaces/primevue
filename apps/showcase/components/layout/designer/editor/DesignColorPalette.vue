<template>
    <div class="flex flex-1 border border-surface-200 dark:border-surface-700 rounded-l-lg rounded-r-lg overflow-hidden">
        <div v-for="color of value" :key="color" class="flex-1 h-8" :style="{ backgroundColor: this.designerService.resolveColorPlain(color) }" :title="color"></div>
    </div>
</template>

<script>
export default {
    inject: ['designerService'],
    props: {
        value: {
            type: Object,
            default: null
        }
    }
};
</script>
