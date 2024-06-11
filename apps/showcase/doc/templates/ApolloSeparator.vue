<template>
    <TemplateSeparator>
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.3576 34.2499L19.6471 28.2974L17.2754 34.2499H22.3576Z" :fill="fillColor" />
            <path d="M27.8454 28.2974L30.5559 34.2499H25.4736L27.8454 28.2974Z" :fill="fillColor" />
            <path d="M24.0043 10.25L12.001 34.187H16.0501L24.0048 17.1962L31.7995 34.187H36.009L24.0043 10.25Z" :fill="fillColor" />
        </svg>
    </TemplateSeparator>
</template>

<script>
export default {
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-0)' : 'var(--p-surface-900)';
        }
    }
};
</script>
