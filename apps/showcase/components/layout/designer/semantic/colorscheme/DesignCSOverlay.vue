<template>
    <Fieldset legend="Overlay" :toggleable="true" class="mb-3">
        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Select</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.select.background" label="BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.select.borderColor" label="Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.select.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Popover</div>
        <section class="grid grid-cols-4 mb-3 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.popover.background" label="BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.popover.borderColor" label="Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.popover.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>

        <div class="text-sm mb-1 font-semibold text-surface-950 dark:text-surface-0">Modal</div>
        <section class="grid grid-cols-4 gap-2">
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.modal.background" label="BG" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.modal.borderColor" label="Border Color" type="color" />
            </div>
            <div class="flex flex-col gap-1">
                <DesignTokenField v-model="$colorScheme.overlay.modal.color" label="Color" type="color" />
            </div>
            <div class="flex flex-col gap-1"></div>
        </section>
    </Fieldset>
</template>

<script>
export default {
    inject: ['$colorScheme']
};
</script>
