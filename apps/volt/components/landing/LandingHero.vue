<template>
    <div class="flex flex-col max-w-220 py-12 px-4 mx-auto">
        <div class="flex items-center gap-1 sm:gap-2 mb-8 justify-center">
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2 text-center">50+ Components</span>
            <span class="opacity-50">⋅</span>
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2 text-center">Tailwind v4</span>
            <span class="opacity-50">⋅</span>
            <span class="bg-primary-100 text-primary-950 dark:bg-primary-400/30 dark:text-primary-100 rounded-md font-medium leading-relaxed px-2 text-center">WCAG Compliant</span>
        </div>
        <div class="text-surface-950 dark:text-surface-0 font-bold text-4xl sm:text-7xl mb-2 text-center">Craft Your Own</div>
        <div class="text-primary font-bold text-4xl sm:text-7xl text-center">UI Component Library</div>
        <p class="text-muted-color text-base sm:text-xl pt-8 pb-4 font-medium text-center">Explore a suite of fully customizable, accessible components powered by the Unstyled PrimeVue Core and Tailwind CSS v4.</p>
        <div class="flex gap-4 justify-center">
            <RouterLink
                to="/overview"
                class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-4 py-2 sm:px-6 sm:py-3 gap-2 text-base sm:text-lg rounded-md font-medium focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
                >Explore the Components</RouterLink
            >
        </div>
    </div>
</template>

<script setup></script>
