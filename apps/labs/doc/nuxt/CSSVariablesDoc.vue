<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Final step is defining the default values for the colors in RGB format, this can be done in a global CSS file in your Nuxt application. See the
            <a href="https://nuxt.com/docs/getting-started/styling" target="_blank" rel="noopener noreferrer">styling</a> section at Nuxt documentation for more information.
        </p>
        <p>With a future update of the primeui tailwind plugin, this step will be done implicitly.</p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
/* Primary and Surface Palettes */
:root {
    --p-primary-50: #ecfdf5;
    --p-primary-100: #d1fae5;
    --p-primary-200: #a7f3d0;
    --p-primary-300: #6ee7b7;
    --p-primary-400: #34d399;
    --p-primary-500: #10b981;
    --p-primary-600: #059669;
    --p-primary-700: #047857;
    --p-primary-800: #065f46;
    --p-primary-900: #064e3b;
    --p-primary-950: #022c22;
    --p-surface-0: #ffffff;
    --p-surface-50: #fafafa;
    --p-surface-100: #f4f4f5;
    --p-surface-200: #e4e4e7;
    --p-surface-300: #d4d4d8;
    --p-surface-400: #a1a1aa;
    --p-surface-500: #71717a;
    --p-surface-600: #52525b;
    --p-surface-700: #3f3f46;
    --p-surface-800: #27272a;
    --p-surface-900: #18181b;
    --p-surface-950: #09090b;
    --p-content-border-radius: 6px;
}

/* Light */
:root {
    --p-primary-color: var(--p-primary-500);
    --p-primary-contrast-color: var(--p-surface-0);
    --p-primary-hover-color: var(--p-primary-600);
    --p-primary-active-color: var(--p-primary-700);
    --p-content-border-color: var(--p-surface-200);
    --p-content-hover-background: var(--p-surface-100);
    --p-content-hover-color: var(--p-surface-800);
    --p-highlight-background: var(--p-primary-50);
    --p-highlight-color: var(--p-primary-700);
    --p-highlight-focus-background: var(--p-primary-100);
    --p-highlight-focus-color: var(--p-primary-800);
    --p-text-color: var(--p-surface-700);
    --p-text-hover-color: var(--p-surface-800);
    --p-text-muted-color: var(--p-surface-500);
    --p-text-hover-muted-color: var(--p-surface-600);
}

/* 
 * Dark Mode
 * Defaults to system, change the selector to match the darkMode in tailwind.config.
 * For example; 
 * darkMode: ['selector', '[class*="app-dark"]'] 
 * should be;
 * :root[class="app-dark"] {
*/
@media (prefers-color-scheme: dark) {
    :root {
        --p-primary-color: var(--p-primary-400);
        --p-primary-contrast-color: var(--p-surface-900);
        --p-primary-hover-color: var(--p-primary-300);
        --p-primary-active-color: var(--p-primary-200);
        --p-content-border-color: var(--p-surface-700);
        --p-content-hover-background: var(--p-surface-800);
        --p-content-hover-color: var(--p-surface-0);
        --p-highlight-background: color-mix(in srgb, var(--p-primary-400), transparent 84%);
        --p-highlight-color: rgba(255, 255, 255, 0.87);
        --p-highlight-focus-background: color-mix(in srgb, var(--p-primary-400), transparent 76%);
        --p-highlight-focus-color: rgba(255, 255, 255, 0.87);
        --p-text-color: var(--p-surface-0);
        --p-text-hover-color: var(--p-surface-0);
        --p-text-muted-color: var(--p-surface-400);
        --p-text-hover-muted-color: var(--p-surface-300);
    }
}
`
            }
        };
    }
};
</script>
