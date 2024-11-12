<template>
    <Fieldset legend="Overlay" :toggleable="true">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Select</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.select.borderRadius" label="Border Radius" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.select.shadow" label="Shadow" />
            </div>
            <div class="flex flex-col gap-1"></div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Popover</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.popover.borderRadius" label="Border Radius" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.popover.padding" label="Padding" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.popover.shadow" label="Shadow" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Modal</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.modal.borderRadius" label="Border Radius" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.modal.padding" label="Padding" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.modal.shadow" label="Shadow" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Navigation</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$preset.semantic.overlay.navigation.shadow" label="Shadow" />
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
