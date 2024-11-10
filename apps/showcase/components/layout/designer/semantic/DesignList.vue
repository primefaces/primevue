<template>
    <Fieldset legend="List" :toggleable="true">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Container</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.list.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Gap</span>
                <input v-model="$preset.semantic.list.gap" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Header Padding</span>
                <input v-model="$preset.semantic.list.header.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.list.option.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Border Radius</span>
                <input v-model="$preset.semantic.list.option.borderRadius" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <span class="text-sm">Padding</span>
                <input v-model="$preset.semantic.list.optionGroup.padding" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
            <div class="flex flex-col gap-1">
                <span class="text-sm">Font Weight</span>
                <input v-model="$preset.semantic.list.optionGroup.fontWeight" type="text" class="border border-surface-300 dark:border-surface-600 rounded-lg p-2 w-full" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$preset']
};
</script>
