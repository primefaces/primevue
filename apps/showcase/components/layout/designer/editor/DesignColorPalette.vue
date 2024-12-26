<template>
    <div class="flex border border-surface rounded-l-lg rounded-r-lg overflow-hidden">
        <div v-for="color of value" :key="color" class="w-8 h-8" :style="{ backgroundColor: color }" :title="color"></div>
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
