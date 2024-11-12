<template>
    <Fieldset legend="List" :toggleable="true" class="mb-3">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.focusBackground" label="Focus BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.selectedBackground" label="Selected BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.selectedFocusBackground" label="Selected Focus BG" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.selectedColor" label="Selected Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.selectedFocusColor" label="Selected Focus Colo" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Icon</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.icon.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.option.icon.focusColor" label="Focus Color" type="color" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.optionGroup.background" label="BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.list.optionGroup.color" label="Color" type="color" />
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
