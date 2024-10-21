<template>
    <TemplateSeparator>
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.75" width="47" height="47" rx="23.5" fill="white" />
            <rect x="0.5" y="0.75" width="47" height="47" rx="23.5" :fill="oppositeFillColor" />
            <path d="M16.8828 30.828L23.3633 14.0817V6.50049L12.1555 31.9914L16.8828 30.828Z" :fill="fillColor" />
            <path
                d="M23.9999 15.9655L18.1204 31.1591L23.9999 35.801L29.8795 31.1591L23.9999 15.9655ZM21.6515 27.1187L22.9397 26.1921C23.6237 25.6997 24.3672 26.7342 23.6834 27.2259L22.3951 28.1525C21.7189 28.6393 20.9643 27.6128 21.6515 27.1187ZM26.6668 29.1923L22.8051 31.9699C22.1291 32.4565 21.374 31.4305 22.0614 30.9361L25.923 28.1585C26.6074 27.6661 27.3502 28.7006 26.6668 29.1923Z"
                :fill="fillColor"
            />
            <path d="M23.3629 36.9209L17.2065 32.0603L12.4832 33.2227L23.3629 41.5005V36.9209Z" :fill="fillColor" />
            <path d="M30.7929 32.0603L24.6365 36.9209V41.5005L35.5162 33.2227L30.7929 32.0603Z" :fill="fillColor" />
            <path d="M24.6365 14.082L31.1169 30.8283L35.8442 31.9916L24.6365 6.50073V14.082Z" :fill="fillColor" />
        </svg>
    </TemplateSeparator>
</template>

<script>
export default {
    computed: {
        fillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-0)' : 'var(--p-surface-900)';
        },
        oppositeFillColor() {
            return this.$appState.darkTheme ? 'var(--p-surface-900)' : 'var(--p-surface-0)';
        }
    }
};
</script>
