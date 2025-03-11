<template>
    <div :class="landingClass">
        <AppNews />
        <AppTopBar :showMenuButton="false" />
        <h1>Hello World</h1>
    </div>
</template>

<script setup>
import { usePrimeVue } from 'primevue/config';
import { computed } from 'vue';

definePageMeta({
    layout: 'custom'
});

const props = defineProps({
    theme: {
        type: String,
        default: null
    }
});

const { layoutState } = useLayout();
const primevue = usePrimeVue();

const landingClass = computed(() => {
    return [
        'landing bg-surface-0 dark:bg-surface-900',
        {
            'layout-news-active': layoutState.newsActive,
            'layout-ripple-disabled': primevue.config.ripple === false
        }
    ];
});
</script>
