<template>
    <div class="flex flex-1 border border-surface rounded-l-lg rounded-r-lg overflow-hidden">
        <div v-for="color of value" :key="color" class="flex-1 h-8" :style="{ backgroundColor: resolveColor(color) }" :title="color"></div>
    </div>
</template>

<script>
import { $dt } from '@primeuix/themes';

export default {
    inject: ['designerService'],
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    methods: {
        resolveColor(color) {
            if (color.startsWith('{') && color.endsWith('}')) {
                return $dt(color).variable;
            } else {
                return color;
            }
        }
    }
};
</script>
