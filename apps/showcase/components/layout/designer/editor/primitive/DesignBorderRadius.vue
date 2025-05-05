<template>
    <Fieldset legend="Rounded" :toggleable="true">
        <section class="grid grid-cols-4 gap-x-2 gap-y-3">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.none" label="None" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.xs" label="Extra Small" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.sm" label="Small" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.md" label="Medium" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.lg" label="Large" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$appState.designer.theme.preset.primitive.borderRadius.xl" label="Extra Large" />
            </div>
        </section>
    </Fieldset>
</template>

<script>
export default {};
</script>
