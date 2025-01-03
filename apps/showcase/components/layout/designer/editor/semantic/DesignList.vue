<template>
    <Fieldset legend="List" :toggleable="true">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Container</div>
        <section class="grid grid-cols-4 mb-3 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.padding" label="Padding" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.gap" label="Gap" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.header.padding" label="Header Padding" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option</div>
        <section class="grid grid-cols-4 mb-3 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.option.padding" label="Padding" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.option.borderRadius" label="Border Radius" />
            </div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Option Group</div>
        <section class="grid grid-cols-4 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.optionGroup.padding" label="Padding" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.semantic.list.optionGroup.fontWeight" label="Font Weight" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
export default {};
</script>
