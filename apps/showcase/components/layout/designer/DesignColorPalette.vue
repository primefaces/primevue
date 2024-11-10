<template>
    <div class="flex border border-surface">
        <div v-for="color of value" :key="color" class="w-4 h-4 sm:w-8 sm:h-8" :style="{ backgroundColor: color }" :title="color"></div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Object,
            default: null
        }
    }
};
</script>
