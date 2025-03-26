<template>
    <div class="w-full border-t border-surface-200 dark:border-surface-800">
        <div class="max-w-[70rem] mx-auto @md:px-4">
            <div class="flex flex-col border-x border-surface-200 dark:border-surface-800 px-8 md:px-12">
                <div class="flex flex-col border-x border-surface-200 dark:border-surface-800">
                    <div class="flex items-center gap-2 md:gap-4 justify-start px-8 lg:px-12 py-6 border-b border-surface-200 dark:border-surface-800 flex-wrap">
                        <Tag value="50+ Components" class="flex-shrink-0 !whitespace-nowrap" />
                        <span class="opacity-50 md:flex hidden">⋅</span>
                        <Tag value="Tailwind v4" class="flex-shrink-0 !whitespace-nowrap" />
                        <span class="opacity-50 md:flex hidden">⋅</span>
                        <Tag value="WCAG Compliant" class="flex-shrink-0 !whitespace-nowrap" />
                        <span class="opacity-50 md:flex hidden">⋅</span>
                        <Tag value="TypeScript" class="flex-shrink-0 !whitespace-nowrap" />
                    </div>
                    <div class="flex flex-col gap-8 p-8 lg:p-12">
                        <div class="flex flex-col gap-6">
                            <div class="flex flex-col">
                                <div class="text-surface-950 dark:text-surface-0 font-bold text-4xl sm:text-6xl lg:text-7xl text-left leading-tight">Craft Your Own</div>
                                <div class="text-primary font-bold text-4xl sm:text-6xl lg:text-7xl text-left leading-tight">UI Component Library</div>
                            </div>
                            <p class="text-muted-color text-base sm:text-xl max-w-2xl text-left leading-relaxed !m-0">Explore a suite of fully customizable, accessible components powered by the Unstyled PrimeVue Core and Tailwind CSS v4.</p>
                        </div>

                        <div class="flex justify-start">
                            <RouterLink
                                to="/overview"
                                class="bg-primary hover:bg-primary-emphasis active:bg-primary-emphasis-alt text-primary-contrast px-4 py-2 sm:px-6 sm:py-3 gap-2 text-base rounded-lg font-medium focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200 leading-tight"
                                >Explore the Components</RouterLink
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Tag from '@/volt/Tag.vue';
</script>
