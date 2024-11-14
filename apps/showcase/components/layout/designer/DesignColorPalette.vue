<template>
    <div class="flex border border-surface rounded-l-lg rounded-r-lg overflow-hidden">
        <div v-for="(color, i) of value" :key="i + '_' + color" class="w-8 h-8" :style="getStyle(color)" :title="color"></div>
    </div>
</template>

<script>
import { isObject } from '@primeuix/utils';
import { $dt } from '@primevue/themes';

export default {
    props: {
        value: {
            type: Object,
            default: null
        }
    },
    methods: {
        getStyle(color) {
            const colorScheme = this.$appState.darkTheme ? 'light' : 'dark';
            const token = color?.replace(/{|}/g, '');
            const tokenValue = $dt(token)?.value;
            const backgroundColor = (isObject(tokenValue) ? tokenValue[colorScheme]?.value : tokenValue) ?? color;

            return { backgroundColor };
        }
    }
};
</script>
