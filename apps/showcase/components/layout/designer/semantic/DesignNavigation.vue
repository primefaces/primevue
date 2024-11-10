<template>
    <Fieldset legend="Navigation" :toggleable="true">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">List</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.navigation.list.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Gap</span>
                <input v-model="$preset.semantic.navigation.list.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Item</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.navigation.item.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Border Radius</span>
                <input v-model="$preset.semantic.navigation.item.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Gap</span>
                <input v-model="$preset.semantic.navigation.item.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Label</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.navigation.submenuLabel.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Font Weight</span>
                <input v-model="$preset.semantic.navigation.submenuLabel.fontWeight" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Submenu Icon</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Size</span>
                <input v-model="$preset.semantic.navigation.submenuIcon.size" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$preset']
};
</script>
