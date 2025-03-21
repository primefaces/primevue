<template>
    <div class="flex flex-col max-w-220 p-12 mx-auto">
        <div class="flex items-center gap-2 mb-8 justify-center">
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2">50+ Components</span>
            <span class="opacity-50">⋅</span>
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2">Tailwind v4</span>
            <span class="opacity-50">⋅</span>
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2">WCAG Compliant</span>
        </div>
        <div class="text-surface-950 dark:text-surface-0 font-bold text-7xl mb-2 text-center">Craft Your Own</div>
        <div class="text-primary font-bold text-7xl text-center">UI Component Library</div>
        <p class="text-muted-color text-xl py-8 font-medium text-center">Explore a suite of fully customizable, accessible components powered by the Unstyled PrimeVue Core and styled with Tailwind v4.</p>
        <div class="flex gap-4 justify-center">
            <RouterLink
                to="/architecture"
                class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-6 py-3 gap-2 text-lg rounded-md font-medium focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
                >Explore the Components</RouterLink
            >
        </div>
    </div>
</template>

<script setup></script>
