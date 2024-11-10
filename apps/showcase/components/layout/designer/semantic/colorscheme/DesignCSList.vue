<template>
    <Fieldset legend="List" :toggleable="true" class="mb-3">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Background</span>
                <input v-model="$colorScheme.list.option.focusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Selected Background</span>
                <input v-model="$colorScheme.list.option.selectedBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Selected Focus Background</span>
                <input v-model="$colorScheme.list.option.selectedFocusBackground" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.list.option.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Selected Color</span>
                <input v-model="$colorScheme.list.option.selectedColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Selected Focus Color</span>
                <input v-model="$colorScheme.list.option.selectedFocusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Icon</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.list.option.icon.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Focus Color</span>
                <input v-model="$colorScheme.list.option.icon.focusColor" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Background</span>
                <input v-model="$colorScheme.list.optionGroup.background" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Color</span>
                <input v-model="$colorScheme.list.optionGroup.color" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$colorScheme']
};
</script>
