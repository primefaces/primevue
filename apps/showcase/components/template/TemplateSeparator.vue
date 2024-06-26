<template>
    <div class="flex items-center w-full gap-6">
        <Divider class="flex-1" />
        <div class="w-12 h-12 overflow-hidden flex items-center justify-center border border-surface rounded-full bg-surface-0 dark:bg-surface-900">
            <slot />
        </div>
        <Divider class="flex-1" />
    </div>
</template>
